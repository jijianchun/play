import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Detail from '@/components/Detail'
import List from '@/components/List'


Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: Home
    },
    {
    	path: '/Detail',
    	name: 'Detail',
    	component: Detail
    },
    {
      path: '/List',
      name: 'List',
      component: List
    }
  ]
})
