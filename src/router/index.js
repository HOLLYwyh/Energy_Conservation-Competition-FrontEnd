import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/home')
    }, {
      path: '/company',
      name: 'Company',
      component: () => import('@/views/Company/company')
    }, {
      path: '/introduction',
      name: 'Introduction',
      component: () => import('@/views/Introduction/introduction')
    }, {
      path: '/policy',
      name: 'Policy',
      component: () => import('@/views/Policy/policy')
    }
  ]
})
