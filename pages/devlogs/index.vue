// pages/devlogs/index.vue
<template>
  <div class="section-full-width">
    <div class="content-container">
      <h1 class="page-title">Devlog</h1>
      <div class="devlog-list">
        <NuxtLink
          v-for="devlog in devlogs"
          :key="devlog.id"
          :to="`/devlogs/${devlog.id}`"
          class="devlog-card"
        >
          <h2>{{ devlog.title }}</h2>
          <p class="devlog-preview">{{ devlog.content.substring(0, 100) }}...</p>
          <div class="devlog-date">
            <span>{{ formatDate(devlog.date) }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: devlogs } = await useFetch('/api/devlogs')

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.page-title {
 font-size: 2.5rem;
 font-weight: 700;
 margin-bottom: 2rem;
}

.devlog-list {
 display: flex;
 flex-direction: column;
 gap: 1rem;
}

.devlog-card {
 display: block;
 padding: 1.5rem;
 border-radius: 8px;
 background: var(--bg-secondary);
 transition: transform 0.2s;
 text-decoration: none;
 color: inherit;
}

.devlog-card:hover {
 transform: translateY(-2px);
}

.devlog-card h2 {
 font-size: 1.5rem;
 margin-bottom: 0.5rem;
}

.devlog-preview {
 color: var(--text-secondary);
 margin-bottom: 1rem;
}

.devlog-date {
 font-size: 0.9rem;
 color: var(--text-secondary);
}
</style>