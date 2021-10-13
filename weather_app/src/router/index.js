import { createRouter, createWebHistory } from '@ionic/vue-router';
import store from '@/store'
import titulo from '../api/titulo';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    name: 'Tabs',
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        name: 'Tab1',
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        name: 'Tab2',
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        name: 'Tab3',
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        name: 'Tab4',
        path: 'tab4',
        component: () => import('@/views/Tab4.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('CHANGE_TITLE', titulo[to.name]);
  store.commit('CHANGE_SEARCH', '');
  next()
})

export default router
