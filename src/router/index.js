import { createRouter, createWebHashHistory } from 'vue-router'
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */'../views/about.vue')
  },
  {
    path: '/about',
    name: 'about2',
    component: () => import(/* webpackChunkName: "about" */'../views/about2.vue')
  },
  {
    path: '/example1',
    name: 'example1',
    component: () => import(/* webpackChunkName: "about" */'../views/example1.vue')
  },
  {
    path: '/example2',
    name: 'example2',
    component: () => import(/* webpackChunkName: "about" */'../views/example2.vue')
  },
  {
    path: '/example3',
    name: 'example3',
    component: () => import(/* webpackChunkName: "about" */'../views/example3.vue')
  },
  {
    path: '/example4',
    name: 'example4',
    component: () => import(/* webpackChunkName: "about" */'../views/example4.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// const router = new VueRouter({
//   routes
// })

export default router
