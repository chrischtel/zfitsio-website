<!-- pages/index.vue -->
<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="section-full-width hero">
      <div class="content-container">
        <h1>Zig bindings for CFITSIO</h1>
        <p class="hero-subtitle">
          A high-performance, safe interface to work with FITS files in Zig
        </p>
        <div class="hero-buttons">
          <NuxtLink to="/docs" class="button primary">Get Started</NuxtLink>
          <a href="https://github.com/chrischtel/zfitsio" target="_blank" class="button secondary">
            View on GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="section-full-width">
      <div class="content-container">
        <h2>Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Zero-Cost Abstractions</h3>
            <p>Direct mapping to CFITSIO with no runtime overhead while maintaining Zig's safety guarantees.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Type Safety</h3>
            <p>Leverage Zig's type system for compile-time checks and safer FITS file handling.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>High Performance</h3>
            <p>Efficient memory usage and fast I/O operations for astronomical data processing.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📦</div>
            <h3>Easy Integration</h3>
            <p>Simple package management and straightforward integration with existing Zig projects.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-full-width">
      <div class="content-container">
        <h2>About</h2>
        <p class="about-text">
          zfitsio is a lightweight (not yet powerful) Zig wrapper around the widely-used CFITSIO library designed to provide Zig developers with seamless access to FITS (Flexible Image Transport System) files. FITS is a standard file format used in astrophotography astronomy and scientific imaging. This project simplifies the process of reading manipulating and analyzing FITS data by wrapping core CFITSIO functions in a Zig-friendly interface allowing efficient data handling without complex setups.
        </p>
      </div>
    </section>

    <!-- Status Section -->
    <section class="section-full-width status-section">
      <div class="content-container">
        <h2>Implementation Status</h2>
        <div class="status-grid">
          <div class="status-category">
            <h3>Core Features</h3>
            <div class="status-items">
              <div class="status-item">
                <span class="status-indicator implemented"></span>
                <span class="feature-name">Basic I/O Operations</span>
              </div>
              <div class="status-item">
                <span class="status-indicator implemented"></span>
                <span class="feature-name">Header Manipulation</span>
              </div>
              <div class="status-item">
                <span class="status-indicator partial"></span>
                <span class="feature-name">Image Data Handling</span>
                <span class="status-note">Missing compressed images</span>
              </div>
              <div class="status-item">
                <span class="status-indicator planned"></span>
                <span class="feature-name">Table Operations</span>
              </div>
            </div>
          </div>

          <div class="status-category">
            <h3>Data Types</h3>
            <div class="status-items">
              <div class="status-item">
                <span class="status-indicator implemented"></span>
                <span class="feature-name">Integer Types</span>
              </div>
              <div class="status-item">
                <span class="status-indicator implemented"></span>
                <span class="feature-name">Float Types</span>
              </div>
              <div class="status-item">
                <span class="status-indicator partial"></span>
                <span class="feature-name">Complex Numbers</span>
                <span class="status-note">Basic support only</span>
              </div>
              <div class="status-item">
                <span class="status-indicator planned"></span>
                <span class="feature-name">String Arrays</span>
              </div>
            </div>
          </div>

          <div class="status-category">
            <h3>Advanced Features</h3>
            <div class="status-items">
              <div class="status-item">
                <span class="status-indicator partial"></span>
                <span class="feature-name">Async I/O</span>
                <span class="status-note">Experimental</span>
              </div>
              <div class="status-item">
                <span class="status-indicator planned"></span>
                <span class="feature-name">Memory Mapping</span>
              </div>
              <div class="status-item">
                <span class="status-indicator planned"></span>
                <span class="feature-name">Compression</span>
              </div>
              <div class="status-item">
                <span class="status-indicator planned"></span>
                <span class="feature-name">Checksums</span>
              </div>
            </div>
          </div>
        </div>

        <div class="status-legend">
          <div class="legend-item">
            <span class="status-indicator implemented"></span>
            <span>Implemented</span>
          </div>
          <div class="legend-item">
            <span class="status-indicator partial"></span>
            <span>Partial</span>
          </div>
          <div class="legend-item">
            <span class="status-indicator planned"></span>
            <span>Planned</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap Section -->
    <section class="section-full-width">
      <div class="content-container">
        <h2>Roadmap</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker completed"></div>
            <div class="timeline-content">
              <h4>Core Bindings</h4>
              <p>Basic CFITSIO function bindings and safety wrappers</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker current"></div>
            <div class="timeline-content">
              <h4>High-Level API</h4>
              <p>Intuitive Zig-style API for common FITS operations</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>Advanced Features</h4>
              <p>Support for advanced FITS features and optimizations</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>Ecosystem Integration</h4>
              <p>Tools and utilities for the broader astronomical software ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.section-full-width {
  width: 100%;
  padding: 4rem 0;
}

.content-container {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 2rem;
}

.hero {
  background: var(--bg-secondary);
  text-align: center;
  border-bottom: 1px solid rgba(140, 132, 122, 0.1);
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.button.primary {
  background-color: var(--accent-primary);
  color: white;
}

.button.primary:hover {
  filter: brightness(1.1);
}

.button.secondary {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid rgba(140, 132, 122, 0.2);
}

.button.secondary:hover {
  background-color: var(--bg-secondary);
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.status-section {
  background: var(--bg-secondary);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.status-category h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(140, 132, 122, 0.1);
}

.status-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.status-indicator {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-indicator.implemented {
  background-color: #22c55e;
}

.status-indicator.partial {
  background-color: #f59e0b;
}

.status-indicator.planned {
  background-color: var(--text-disabled);
}

.feature-name {
  color: var(--text-primary);
  font-weight: 500;
}

.status-note {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-left: auto;
  font-style: italic;
}

.status-legend {
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(140, 132, 122, 0.1);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--text-disabled);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--text-disabled);
  border: 2px solid var(--bg-primary);
  transform: translateX(0.5rem);
}

.timeline-marker.completed {
  background: var(--accent-primary);
}

.timeline-marker.current {
  background: var(--accent-secondary);
}

.timeline-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .content-container {
    padding: 0 1rem;
  }

  .section-full-width {
    padding: 3rem 0;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .button {
    width: 100%;
    justify-content: center;
  }

  h2 {
    font-size: 1.75rem;
  }

  .status-grid {
    grid-template-columns: 1fr;
  }

  .status-note {
    display: none;
  }

  .status-legend {
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>