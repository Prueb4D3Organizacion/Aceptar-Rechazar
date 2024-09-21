import PersonRents from '@/contexts/learning/components/person-rents.vue'
import TableRents from '@/contexts/learning/components/table-rents.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: PersonRents },
  { path: '/table-rents', component: TableRents },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router