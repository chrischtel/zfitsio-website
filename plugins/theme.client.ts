// plugins/theme.client.ts
export default defineNuxtPlugin(() => {
    if (process.client) {
      // Check localStorage on initial load
      const theme = localStorage.getItem('theme')
      if (theme === 'dark') {
        document.documentElement.classList.add('dark-theme')
      }
    }
  })