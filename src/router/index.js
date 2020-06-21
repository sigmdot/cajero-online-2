import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import InventarioView from '../views/InventarioView.vue'
import Login from '../views/User/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path:'/inventario',
    name:'Inventario',
    component: InventarioView
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
