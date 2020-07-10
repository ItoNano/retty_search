import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/pages/Top.vue'
import ToDo from '@/components/pages/ToDo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/todo',
      component: ToDo,
    }
  ]
})