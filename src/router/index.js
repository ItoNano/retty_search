import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/components/Top.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
  ]
})