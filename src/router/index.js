import Vue from 'vue'
import VueRouter from 'vue-router'
import QnaInput from '@/views/QnaInput.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/input',
    name: 'QnaInput',
    component: QnaInput
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
