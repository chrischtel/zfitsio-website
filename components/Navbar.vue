<!-- components/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="navbar-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" class="logo-svg">
          <!-- Background -->
          <rect width="400" height="400" fill="var(--bg-secondary)" rx="20"/>
          
          <!-- Slimmer Z -->
          <path 
            d="M 140 100 
               L 260 100 
               L 160 300 
               L 260 300 
               L 260 270 
               L 200 270 
               L 300 70 
               L 140 70 
               Z" 
            fill="var(--accent-primary)"/>
          
          <!-- FITS data visualization elements -->
          <g transform="translate(200, 200)">
            <circle r="120" fill="none" stroke="var(--text-disabled)" stroke-width="2"/>
            
            <g id="dataPoints">
              <circle cx="0" cy="-100" r="3" fill="var(--accent-primary)" opacity="0.8"/>
              <circle cx="71" cy="-71" r="2" fill="var(--text-primary)" opacity="0.6"/>
              <circle cx="100" cy="0" r="4" fill="var(--accent-primary)" opacity="0.9"/>
              <circle cx="71" cy="71" r="2" fill="var(--text-primary)" opacity="0.7"/>
              <circle cx="0" cy="100" r="3" fill="var(--accent-primary)" opacity="0.8"/>
              <circle cx="-71" cy="71" r="2" fill="var(--text-primary)" opacity="0.6"/>
              <circle cx="-100" cy="0" r="4" fill="var(--accent-primary)" opacity="0.9"/>
              <circle cx="-71" cy="-71" r="2" fill="var(--text-primary)" opacity="0.7"/>
            </g>
            
            <g stroke="var(--accent-primary)" stroke-width="2" opacity="0.5">
              <path d="M -90 -90 L -60 -60" />
              <path d="M 90 -90 L 60 -60" />
              <path d="M 90 90 L 60 60" />
              <path d="M -90 90 L -60 60" />
            </g>
          </g>
          
          <path 
            d="M 280 280 L 320 280 L 320 320 L 280 320 Z" 
            fill="none" 
            stroke="var(--accent-primary)" 
            stroke-width="2"
            opacity="0.3"/>
          <path 
            d="M 290 290 L 310 290 L 310 310 L 290 310 Z" 
            fill="var(--accent-primary)" 
            opacity="0.2"/>
        </svg>
        <span class="logo-text">zfitsio</span>
      </NuxtLink>

      <div class="navbar-menu" :class="{ 'is-active': isMobileMenuOpen }">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.path"
          :to="item.path"
          class="navbar-item"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <button 
        class="navbar-toggle"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggle-icon"></span>
        <span class="navbar-toggle-icon"></span>
        <span class="navbar-toggle-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Docs', path: '/docs' },
  { name: 'Examples', path: '/examples' },
  { name: 'GitHub', path: 'https://github.com/yourusername/zfitsio' }
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: var(--bg-primary);
  border-bottom: 1px solid rgba(140, 132, 122, 0.1);
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-primary);
  position: absolute;
  left: 2rem;
}

.logo-svg {
  width: 32px;
  height: 32px;
  transition: transform 0.2s ease;
}

.navbar-logo:hover .logo-svg {
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.navbar-menu {
  display: flex;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-item {
  position: relative;
  text-decoration: none;
  color: var(--text-secondary);
  padding: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navbar-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-primary);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.navbar-item:hover {
  color: var(--accent-primary);
}

.navbar-item:hover::after,
.navbar-item.router-link-active::after {
  transform: scaleX(1);
}

.navbar-item.router-link-active {
  color: var(--accent-primary);
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.navbar-toggle-icon {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  margin: 5px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.is-active + .navbar-toggle .navbar-toggle-icon:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.is-active + .navbar-toggle .navbar-toggle-icon:nth-child(2) {
  opacity: 0;
}

.is-active + .navbar-toggle .navbar-toggle-icon:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .navbar-logo {
    position: static;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    position: absolute;
    top: calc(var(--header-height) - 1px);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: var(--bg-primary);
    padding: 0;
    box-shadow: var(--shadow-md);
    border-bottom: 1px solid rgba(140, 132, 122, 0.1);
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-item {
    padding: 1rem 2rem;
    width: 100%;
    border-top: 1px solid rgba(140, 132, 122, 0.1);
  }

  .navbar-item::after {
    display: none;
  }

  .navbar-item:hover {
    background-color: var(--bg-secondary);
  }
}
</style>