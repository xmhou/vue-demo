import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Router from "../views/Router"
import VuexDemo from "../views/VuexDemo"
import AxiosDemo from "../views/AxiosDemo"
// import ElementUI from "../views/ElementUI"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/router',
    name: 'Hab',
    component: Router
  },
  {
    path: "/vuexdemo",
    name: VuexDemo,
    component: VuexDemo
  },
  {
    path: "/axiosdemo",
    name: AxiosDemo,
    component: AxiosDemo
  },
  // {
  //   path: '/element',
  //   name: 'ElementUI',
  //   component: ElementUI
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
