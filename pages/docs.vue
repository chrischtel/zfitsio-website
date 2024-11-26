<!-- pages/docs.vue -->
<template>
  <div class="docs-layout">
    <!-- Sidebar Navigation -->
    <aside class="docs-sidebar">
      <nav class="sidebar-nav">
        <div v-for="(section, index) in docSections" :key="index" class="nav-section">
          <h3 class="nav-section-title">{{ section.title }}</h3>
          <div class="nav-items">
            <a 
              v-for="item in section.items" 
              :key="item.id"
              :href="`#${item.id}`"
              class="nav-item"
              :class="{ 'is-active': currentSection === item.id }"
              @click.prevent="scrollToSection(item.id)"
            >
              {{ item.title }}
            </a>
          </div>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="docs-content">
      <article class="content-container">
        <!-- Getting Started -->
        <section id="getting-started" class="docs-section">
          <h1>Getting Started</h1>
          <p>zfitsio provides Zig bindings for the CFITSIO library, allowing you to work with FITS (Flexible Image Transport System) files in Zig. Whether you're working with astronomical data or scientific imaging, zfitsio makes it easy to read, write, and manipulate FITS files.</p>
        </section>

        <!-- Installation -->
        <section id="installation" class="docs-section">
          <h2>Installation</h2>
          <p>Add zfitsio to your Zig project using the following steps:</p>
          
          <div class="code-block">
            <div class="code-header">
              <span>build.zig.zon</span>
              <button class="copy-button" @click="copyCode($event)" title="Copy to clipboard">
                <span class="copy-icon">📋</span>
              </button>
            </div>
            <pre><code class="language-zig">.{
    .name = "your-project",
    .version = "0.0.1",
    .dependencies = .{
        .zfitsio = .{
            .url = "https://github.com/username/zfitsio/archive/refs/tags/v0.0.1.tar.gz",
        },
    },
}</code></pre>
          </div>

          <p>Then include zfitsio in your build.zig:</p>

          <div class="code-block">
            <div class="code-header">
              <span>build.zig</span>
              <button class="copy-button" @click="copyCode($event)" title="Copy to clipboard">
                <span class="copy-icon">📋</span>
              </button>
            </div>
            <pre><code class="language-zig">const std = @import("std");
const zfitsio = @import("zfitsio");

pub fn build(b: *std.Build) void {
    const target = b.standardTargetOptions(.{});
    const optimize = b.standardOptimizeOption(.{});

    const exe = b.addExecutable(.{
        .name = "your-project",
        .root_source_file = .{ .path = "src/main.zig" },
        .target = target,
        .optimize = optimize,
    });

    const zfitsio_dep = b.dependency("zfitsio", .{});
    exe.addModule("zfitsio", zfitsio_dep.module("zfitsio"));
    
    b.installArtifact(exe);
}</code></pre>
          </div>
        </section>

        <!-- Basic Usage -->
        <section id="basic-usage" class="docs-section">
          <h2>Basic Usage</h2>
          <p>Here's how to get started with basic FITS operations:</p>

          <div class="code-block">
            <div class="code-header">
              <span>main.zig</span>
              <button class="copy-button" @click="copyCode($event)" title="Copy to clipboard">
                <span class="copy-icon">📋</span>
              </button>
            </div>
            <pre><code class="language-zig">const std = @import("std");
const fits = @import("zfitsio");

pub fn main() !void {
    // Open a FITS file
    var f = try fits.open("image.fits", .{});
    defer f.close();

    // Read header
    const header = try f.header();
    std.debug.print("NAXIS: {}\n", .{header.naxis});

    // Read image data
    var data = try f.readImage();
    defer data.deinit();
}</code></pre>
          </div>
        </section>

        <!-- Headers -->
        <section id="headers" class="docs-section">
          <h2>Working with Headers</h2>
          <p>FITS headers contain metadata about the file and its contents. Here's how to work with them:</p>

          <div class="code-block">
            <pre><code class="language-zig">// Read header keywords
const naxis = try header.getInt("NAXIS");
const exptime = try header.getFloat("EXPTIME");
const object = try header.getString("OBJECT");

// Write header keywords
try header.setInt("MYNAXIS", 2);
try header.setFloat("MYEXP", 30.0);
try header.setString("MYOBJ", "M31");</code></pre>
          </div>

          <div class="info-box">
            <div class="info-icon">ℹ️</div>
            <div class="info-content">
              <strong>Note:</strong> Header keywords are case-insensitive in FITS files, but conventionally written in uppercase.
            </div>
          </div>
        </section>

        <!-- Image Data -->
        <section id="image-data" class="docs-section">
          <h2>Image Data Handling</h2>
          <p>FITS images can contain various types of data. Here's how to work with image data:</p>

          <div class="code-block">
            <pre><code class="language-zig">// Read entire image
var image_data = try fits.readImage();
defer image_data.deinit();

// Read specific pixel
const value = image_data.at(x, y);

// Write image data
try fits.writeImage(data);

// Read subset of image
const subset = try fits.readRegion(x1, x2, y1, y2);</code></pre>
          </div>

          <h3>Supported Data Types</h3>
          <p>zfitsio supports various FITS data types:</p>
          <ul>
            <li>BYTE (8-bit unsigned integer)</li>
            <li>SHORT (16-bit signed integer)</li>
            <li>LONG (32-bit signed integer)</li>
            <li>FLOAT (32-bit floating point)</li>
            <li>DOUBLE (64-bit floating point)</li>
          </ul>
        </section>

        <!-- Error Handling -->
        <section id="error-handling" class="docs-section">
          <h2>Error Handling</h2>
          <p>zfitsio uses Zig's error handling system to manage FITS errors:</p>

          <div class="code-block">
            <pre><code class="language-zig">const FitsError = error{
    FileNotFound,
    InvalidFormat,
    InvalidOperation,
    // ... other errors
};

// Example error handling
fn readFitsFile(path: []const u8) !void {
    const file = fits.open(path, .{}) catch |err| {
        switch (err) {
            error.FileNotFound => std.debug.print("File not found: {s}\n", .{path}),
            error.InvalidFormat => std.debug.print("Invalid FITS format\n", .{}),
            else => return err,
        }
        return err;
    };
    defer file.close();</code></pre>
          </div>

          <div class="info-box warning">
            <div class="info-icon">⚠️</div>
            <div class="info-content">
              <strong>Warning:</strong> Always remember to close FITS files and free resources using defer statements.
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
const currentSection = ref('getting-started')

const docSections = [
  {
    title: 'Introduction',
    items: [
      { title: 'Getting Started', id: 'getting-started' },
      { title: 'Installation', id: 'installation' },
      { title: 'Basic Usage', id: 'basic-usage' },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { title: 'Headers', id: 'headers' },
      { title: 'Image Data', id: 'image-data' },
      { title: 'Error Handling', id: 'error-handling' },
    ]
  }
]

// Scroll handling
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    currentSection.value = id
  }
}

// Update active section based on scroll position
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentSection.value = entry.target.id
      }
    })
  }, { threshold: 0.5 })

  // Observe all section elements
  document.querySelectorAll('.docs-section').forEach(section => {
    observer.observe(section)
  })
})

// Copy code function
const copyCode = async (event: Event) => {
  const button = event.target as HTMLElement
  const codeBlock = button.closest('.code-block')
  if (codeBlock) {
    const code = codeBlock.querySelector('code')?.textContent || ''
    await navigator.clipboard.writeText(code)
    
    // Show feedback
    const originalText = button.textContent
    button.textContent = '✓'
    setTimeout(() => {
      button.textContent = originalText
    }, 2000)
  }
}
</script>

<style scoped>
.docs-layout {
  display: flex;
  min-height: calc(100vh - var(--header-height));
  margin-top: var(--header-height);
}

.docs-sidebar {
  position: fixed;
  width: var(--sidebar-width, 280px);
  height: calc(100vh - var(--header-height));
  background: var(--bg-secondary);
  border-right: 1px solid rgba(140, 132, 122, 0.1);
  overflow-y: auto;
  padding: 2rem 0;
}

.nav-section {
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
}

.nav-section-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  display: block;
  padding: 0.5rem 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  cursor: pointer;
}

.nav-item:hover {
  color: var(--text-primary);
  background: rgba(140, 132, 122, 0.05);
}

.nav-item.is-active {
  color: var(--accent-primary);
  background: rgba(247, 164, 29, 0.1);
  font-weight: 500;
}

.docs-content {
  flex: 1;
  margin-left: var(--sidebar-width, 280px);
  padding: 2rem;
}

.content-container {
  max-width: 768px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.docs-section {
  margin-bottom: 3rem;
  scroll-margin-top: calc(var(--header-height) + 2rem);
}

h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: var(--text-primary);
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  color: var(--text-primary);
}

p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

ul {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.code-block {
  margin: 1.5rem 0;
  background: var(--bg-secondary);
  border-radius: 8px;
  overflow: hidden;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(140, 132, 122, 0.05);
  border-bottom: 1px solid rgba(140, 132, 122, 0.1);
  font-family: monospace;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.copy-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.copy-button:hover {
  opacity: 1;
}

pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
}

code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.info-box {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(247, 164, 29, 0.1);
  border-radius: 6px;
  margin: 1.5rem 0;
}

.info-box.warning {
  background: rgba(245, 158, 11, 0.1);
}

.info-icon {
  font-size: 1.25rem;
}

.info-content {
  flex: 1;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.info-content strong {
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .docs-sidebar {
    display: none;
  }

  .docs-content {
    margin-left: 0;
  }

  .content-container {
    padding: 0 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .docs-section {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  .code-block {
    margin: 1rem 0;
    border-radius: 6px;
  }

  .info-box {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>