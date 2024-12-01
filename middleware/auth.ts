// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  // Add a console.log to debug
  console.log('Auth middleware running on path:', to.path)
  
  // Early return for non-admin routes
  if (!to.path.startsWith('/admin')) {
    return
  }

  const { status } = useAuth()
  if (status.value !== 'authenticated') {
    return navigateTo('/login')
  }
})