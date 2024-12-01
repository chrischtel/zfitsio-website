// composables/useTheme.ts
export const useTheme = () => {
  // Initialize from localStorage, defaulting to light if not set
  const isDark = useState('isDark', () => {
    if (process.client) {
      return localStorage.getItem('theme') === 'dark'
    }
    return false
  })

  // Add onMounted to ensure we set initial class
  onMounted(() => {
    if (isDark.value) {
      document.documentElement.classList.add('dark-theme')
    }
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      
      if (isDark.value) {
        document.documentElement.classList.add('dark-theme')
      } else {
        document.documentElement.classList.remove('dark-theme')
      }
    }
  }

  return {
    isDark,
    toggleTheme
  }
}