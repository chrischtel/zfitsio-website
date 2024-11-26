<!-- components/Navbar.vue -->
<template>
  <!-- Previous template code remains exactly the same -->
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <!-- SVG remains exactly the same -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" class="logo-svg">
          <!-- Background -->
          <rect width="400" height="400" fill="#1a1b26" rx="20"/>
          
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
            fill="#f7a41d"/>
          
          <!-- FITS data visualization elements -->
          <g transform="translate(200, 200)">
            <circle r="120" fill="none" stroke="#444" stroke-width="2"/>
            
            <g id="dataPoints">
              <circle cx="0" cy="-100" r="3" fill="#f7a41d" opacity="0.8"/>
              <circle cx="71" cy="-71" r="2" fill="#fff" opacity="0.6"/>
              <circle cx="100" cy="0" r="4" fill="#f7a41d" opacity="0.9"/>
              <circle cx="71" cy="71" r="2" fill="#fff" opacity="0.7"/>
              <circle cx="0" cy="100" r="3" fill="#f7a41d" opacity="0.8"/>
              <circle cx="-71" cy="71" r="2" fill="#fff" opacity="0.6"/>
              <circle cx="-100" cy="0" r="4" fill="#f7a41d" opacity="0.9"/>
              <circle cx="-71" cy="-71" r="2" fill="#fff" opacity="0.7"/>
            </g>
            
            <g stroke="#f7a41d" stroke-width="2" opacity="0.5">
              <path d="M -90 -90 L -60 -60" />
              <path d="M 90 -90 L 60 -60" />
              <path d="M 90 90 L 60 60" />
              <path d="M -90 90 L -60 60" />
            </g>
          </g>
          
          <path 
            d="M 280 280 L 320 280 L 320 320 L 280 320 Z" 
            fill="none" 
            stroke="#f7a41d" 
            stroke-width="2"
            opacity="0.3"/>
          <path 
            d="M 290 290 L 310 290 L 310 310 L 290 310 Z" 
            fill="#f7a41d" 
            opacity="0.2"/>
        </svg>
        <span class="logo-text">zfitsio</span>
      </div>

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
  { name: 'GitHub', path: '/github' }
]
</script>

<style>
/* Font imports - add these to your main.css or app.vue */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
</style>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 2rem;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
  position: absolute;
  left: 0;
}

.logo-svg {
  width: 35px;
  height: 35px;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1b26;
  letter-spacing: -0.01em;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
  margin: 0 auto;
}

.navbar-item {
  text-decoration: none;
  color: #333;
  padding: 0.5rem;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  font-weight: 400;
}

.navbar-item:hover {
  color: #f7a41d;
}

.navbar-item.router-link-active {
  color: #f7a41d;
  font-weight: 500;
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
  width: 25px;
  height: 2px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .navbar-container {
    justify-content: space-between;
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
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-item {
    padding: 0.75rem;
    width: 100%;
    text-align: center;
  }
}
</style>