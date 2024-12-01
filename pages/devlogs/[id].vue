// pages/devlogs/[id].vue
<template>
  <div class="section-full-width">
    <div class="content-container">
      <article class="devlog-detail">
        <h1>{{ devlog?.title }}</h1>
        <div class="devlog-meta">
          <time>{{ formatDate(devlog?.date) }}</time>
          <span class="version">v{{ devlog?.version }}</span>
        </div>
        <div class="devlog-content prose" v-html="marked(devlog?.content)" />
        <div class="devlog-tags">
          <span v-for="tag in devlog?.tags" :key="tag.id" class="tag">
            {{ tag.name }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked'

const route = useRoute()
const { data: devlog } = await useFetch(`/api/devlogs/${route.params.id}`)

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.devlog-detail {
 max-width: 48rem;
 margin: 0 auto;
}

.devlog-detail h1 {
 font-size: 2.5rem;
 margin-bottom: 1rem;
}

.devlog-meta {
 color: var(--text-secondary);
 margin-bottom: 2rem;
 display: flex;
 gap: 1rem;
 align-items: center;
}

.version {
 background: var(--accent-primary);
 color: white;
 padding: 0.25rem 0.75rem;
 border-radius: 1rem;
 font-size: 0.875rem;
}

.devlog-content {
 margin-bottom: 2rem;
 color: var(--text-secondary);
 line-height: 1.7;
}

.devlog-tags {
 display: flex;
 gap: 0.5rem;
 flex-wrap: wrap;
}

.tag {
 background: var(--bg-secondary);
 padding: 0.25rem 0.75rem;
 border-radius: 1rem;
 font-size: 0.9rem;
 color: var(--text-secondary);
}

.prose {
 max-width: none;
}

.prose h2 {
 font-size: 1.8rem;
 margin: 2rem 0 1rem;
 color: var(--text-primary);
}

.prose h3 {
 font-size: 1.4rem;
 margin: 1.5rem 0 1rem;
 color: var(--text-primary);
}

.prose p {
 margin-bottom: 1rem;
}

.prose ul, .prose ol {
 list-style-type: disc;
 margin: 1rem 0;
 padding-left: 1.5rem;
}

.prose li {
 margin-bottom: 0.5rem;
}
</style>