<!-- layouts/default.vue -->
<template>
  <div class="layout">
    <Navbar />
    <main class="main-wrapper">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-wrapper {
  margin-top: var(--header-height);
  flex: 1;
  width: 100%;
}
</style>