import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import FatherViewPage from "@/views/QueryParams/FatherViewPage";
import MiddleViewPage from "@/views/QueryParams/MiddelViewPage";
import InnerViewPage from "@/views/QueryParams/InnerViewPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/father',
    name: 'Father',
    component: FatherViewPage
  },
  {
    path: '/middle',
    name: 'Middle',
    component: MiddleViewPage
  },
  {
    path: '/inner',
    name: 'Inner',
    component: InnerViewPage
  }

]

const router = new VueRouter({
  routes
})

export default router
