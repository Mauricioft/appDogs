import Vue from 'vue'
import Router from 'vue-router'
import PmHome from './views/Home'
import PmDogs from './views/Dogs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: PmHome
    },
    {
      path: '/list',
      name: 'list',
      component: PmDogs
    },
    {
      path: '*',
      component: PmHome,
    },
  ]
})
