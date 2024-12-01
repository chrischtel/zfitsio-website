<template>
  <div class="section-full-width">
    <div class="content-container">
      <!-- Auth Controls -->
      <div class="auth-controls">
        <button 
          v-if="!isAuthenticated" 
          @click="handleLogin" 
          class="login-button"
        >
          Login with GitHub
        </button>
        <div v-else class="user-controls">
          <span class="user-email">{{ user?.email }}</span>
          <button @click="handleSignOut" class="logout-button">Sign Out</button>
        </div>
      </div>

      <!-- Admin Interface -->
      <template v-if="isAuthenticated">
        <h1 class="page-title">{{ isEditing ? 'Edit' : 'Create' }} Devlog Entry</h1>
        
        <div class="admin-controls" v-if="!isEditing">
          <select v-model="selectedDevlogId" class="form-input">
            <option value="">Create New Devlog</option>
            <option v-for="d in devlogs" :key="d.id" :value="d.id">{{ d.title }}</option>
          </select>
          <button v-if="selectedDevlogId" @click="editDevlog" class="edit-button">Edit</button>
          <button v-if="selectedDevlogId" @click="deleteDevlog" class="delete-button">Delete</button>
        </div>

        <form @submit.prevent="saveDevlog" class="admin-form">
          <div class="form-group">
            <label>Title</label>
            <input v-model="devlog.title" class="form-input"/>
          </div>

          <div class="form-group">
            <label>Version</label>
            <input v-model="devlog.version" class="form-input"/>
          </div>

          <div class="form-group">
            <label>Content</label>
            <div class="editor-container">
              <textarea v-model="devlog.content" class="content-editor"/>
              <div class="preview prose" v-html="marked(devlog.content)"/>
            </div>
          </div>

          <div class="form-group">
            <label>Tags</label>
            <div class="tag-input-container">
              <input v-model="tagInput" @keydown.enter.prevent="addTag" class="form-input"/>
              <div class="tag-list">
                <span v-for="tag in devlog.tags" :key="tag" class="tag">
                  {{ tag }}
                  <button @click="removeTag(tag)" class="tag-remove">&times;</button>
                </span>
              </div>
            </div>
          </div>

          <div class="button-group">
            <button v-if="isEditing" @click="cancelEdit" type="button" class="cancel-button">
              Cancel
            </button>
            <button type="submit" class="submit-button">
              {{ isEditing ? 'Update' : 'Publish' }} Devlog
            </button>
          </div>
        </form>
      </template>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

import { ref, computed } from 'vue'
import { marked } from 'marked'

// Auth composables
const { signIn, signOut, status, user } = useAuth()
const router = useRouter()
const isAuthenticated = computed(() => status.value === 'authenticated')

// Modified signIn handler with callback
const handleLogin = async () => {
  try {
    const result = await signIn('github', { 
      redirect: false,
    })
    
    if (result?.error) {
      console.error('Login error:', result.error)
    } else {
      // Manual redirect after successful login
      window.location.href = '/admin/devlogs'
    }
  } catch (error) {
    console.error('Login error:', error)
  }
}

const handleSignOut = async () => {
  try {
    await signOut({
      redirect: true,
      callbackUrl: '/'
    })
  } catch (error) {
    console.error('Logout error:', error)
  }
}

// Devlog data and methods
const { data: devlogs } = await useFetch('/api/devlogs')
const selectedDevlogId = ref('')
const isEditing = ref(false)

const devlog = ref({
  id: '',
  title: '',
  version: '',
  content: '',
  tags: []
})

const tagInput = ref('')

const addTag = () => {
  if (tagInput.value.trim()) {
    devlog.value.tags.push(tagInput.value.trim())
    tagInput.value = ''
  }
}

const removeTag = (tag) => {
  devlog.value.tags = devlog.value.tags.filter(t => t !== tag)
}

const editDevlog = async () => {
  const selected = devlogs.value.find(d => d.id === selectedDevlogId.value)
  if (selected) {
    devlog.value = {
      id: selected.id,
      title: selected.title,
      version: selected.version,
      content: selected.content,
      tags: selected.tags.map(t => t.name)
    }
    isEditing.value = true
  }
}

const deleteDevlog = async () => {
  if (confirm('Are you sure you want to delete this devlog?')) {
    await useFetch('/api/devlogs', {
      method: 'DELETE',
      body: { id: selectedDevlogId.value }
    })
    selectedDevlogId.value = ''
    location.reload()
  }
}

const cancelEdit = () => {
  isEditing.value = false
  selectedDevlogId.value = ''
  devlog.value = { id: '', title: '', version: '', content: '', tags: [] }
}

const saveDevlog = async () => {
  if (isEditing.value) {
    await useFetch('/api/devlogs', {
      method: 'PUT',
      body: devlog.value
    })
  } else {
    await useFetch('/api/devlogs', {
      method: 'POST',
      body: devlog.value
    })
  }
 
  location.reload()
}
</script>

<style scoped>
.auth-controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  padding: 1rem 0;
}

.login-button {
  padding: 0.75rem 1.5rem;
  background: #24292e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-email {
  color: var(--text-secondary);
}

.logout-button {
  padding: 0.5rem 1rem;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.admin-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.edit-button {
  padding: 0.75rem 1.5rem;
  background: var(--accent-secondary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.delete-button {
  padding: 0.75rem 1.5rem;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.cancel-button {
  padding: 0.75rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
}

.submit-button {
  flex: 2;
}

/* Add any additional styles you had for form-group, form-input, etc. */
</style>