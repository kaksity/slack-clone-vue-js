import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Chat from '@/views/Chat.vue'
import Threads from '@/views/Threads.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/chat/:roomName',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/threads',
    name: 'Threads',
    component: Threads
  },
  {
    path: '/mentions-reactions',
    name: 'MentionReactions',
    component: Chat
  },
  {
    path: '/saved-items',
    name: 'SaveItems',
    component: Threads
  },
  {
    path: '/channel-browser',
    name: 'ChangelBrowser',
    component: Chat
  },
  {
    path: '/people',
    name: 'People',
    component: Threads
  },
  {
    path: '/apps',
    name: 'Apps',
    component: Chat
  },
  {
    path: '/file-browser',
    name: 'FileBrowser',
    component: Threads
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
