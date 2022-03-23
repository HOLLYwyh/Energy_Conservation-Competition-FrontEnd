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
      path: '/news',
      name: 'Name',
      component: () => import('@/views/News/news')
    }, {
      path: '/policy',
      name: 'Policy',
      component: () => import('@/views/Policy/policy')
    }, {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About/about')
    }, {
      path: '/simulator',
      name: 'Simulator',
      component: () => import('@/views/Policy/simulator')
    }, {
      path: '/company/detail',
      name: 'Detail',
      component: () => import('@/views/Company/companyDetail')
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
