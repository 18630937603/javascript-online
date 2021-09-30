import Vue from 'vue'
import VueRouter from 'vue-router'
import LessAndSelector from "@/views/LessAndSelector";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Test',
    component: LessAndSelector
  },

]

const router = new VueRouter({
  routes
})

export default router
