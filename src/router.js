import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AddListaView from './views/AddListaView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/addlista', component: AddListaView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router