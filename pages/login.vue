// pages/login.vue
<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl mb-4">Admin Login</h1>
      <button
        @click="handleLogin"
        class="bg-black text-white px-4 py-2 rounded flex items-center gap-2"
      >
        Login with GitHub
      </button>
    </div>
  </div>
</template>

<script setup>
const { signIn, status } = useAuth()
const router = useRouter()

// Redirect if already authenticated
watchEffect(() => {
  if (status.value === 'authenticated') {
    router.push('/admin/devlogs')
  }
})

const handleLogin = async () => {
  try {
    await signIn('github')  // Remove options to use default behavior
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>