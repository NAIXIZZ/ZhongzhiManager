import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DS from '@/components/Data_Manage/DS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DS',
      redirect: '/DS'
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/DS',
      name: 'DS',
      component: DS
    },
  ]
})
