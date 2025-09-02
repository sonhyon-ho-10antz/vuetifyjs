import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import Page01 from '@/views/Page01.vue'
import Page02 from '@/views/Page02.vue'
import Page03 from '@/views/Page03.vue'
import Page04 from '@/views/Page04.vue'
import Page05 from '@/views/Page05.vue'
import Page06 from '@/views/Page06.vue'
import Page07 from '@/views/Page07.vue'
import Page08 from '@/views/Page08.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Home' }
  },
  {
    path: '/page01',
    name: 'Page01',
    component: Page01,
    meta: { title: 'Navigation' }
  },
  {
    path: '/page02',
    name: 'Page02',
    component: Page02,
    meta: { title: 'Button' }
  },
  {
    path: '/page03',
    name: 'Page03',
    component: Page03,
    meta: { title: 'Dialogs' }
  },
  {
    path: '/page04',
    name: 'Page04',
    component: Page04,
    meta: { title: 'Expansion panels' }
  },
  {
    path: '/page05',
    name: 'Page05',
    component: Page05,
    meta: { title: 'List' }
  },
  {
    path: '/page06',
    name: 'Page06',
    component: Page06,
    meta: { title: 'Pagination' }
  },
  {
    path: '/page07',
    name: 'Page07',
    component: Page07,
    meta: { title: 'Tabs' }
  },
  {
    path: '/page08',
    name: 'Page08',
    component: Page08,
    meta: { title: 'Autocompletes' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router