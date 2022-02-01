import VueRouter from "vue-router";

import Registration from './components/Registration.vue'

import Authorization from './components/Authorization.vue'


export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/signin',
    },
    {
      path: '/signin',
      component: Registration,
    },
    {
      path: '/signup',
      component: Authorization,
    }
  ],
})

