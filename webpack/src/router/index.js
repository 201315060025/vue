import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import redirectPage from '@/components/redirectPage'
import mergeTablePage from '@/components/mergeTablePage'
import xiaLaTablePage from '@/components/xiaLaTablePage'
import messageBox from '@/components/messageBox'
import componentDemo from '@/components/componentDemo'
// import header from '@/components/comments/header'
import watchDemo from '@/components/watchDemo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/redirect',
      name: 'redirectPage',
      component: redirectPage
    },
    {
      path: '/merge-table',
      name: 'mergeTablePage',
      component: mergeTablePage
    },
    {
      path: '/down-table',
      name: 'xiaLaTablePage',
      component: xiaLaTablePage
    },
    {
      path: '/message',
      name: 'messageBox',
      component: messageBox
    },
    {
      path: '/component',
      name: 'componentDemo',
      component: componentDemo
    },
    // {
    //   path: '/header',
    //   name: 'header',
    //   component: header
    // }
    {
      path: '/watch',
      name: 'watchDemo',
      component: watchDemo
    }
  ]
})
