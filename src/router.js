// 路由
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Corridors from './views/Corridors.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/corridors',
      name: 'corridors',
      component: Corridors
    }
    // {
    //   path: '/loading',
    //   name: 'load',
    //   component: () => import('@/views/Loading.vue')
    // }
  ]
})
