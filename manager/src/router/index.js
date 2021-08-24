import Vue from 'vue'
import Router from 'vue-router'
import DS from '@/components/Data_Manage/DS'
import AILabel from '@/components/Data_Manage/AILabel'
import editConfiguration from '@/components/Data_Manage/editConfiguration'
import demandManage from '@/components/Role_Manage/demandManage'
import medicalManage from '@/components/Role_Manage/medicalManage'
import roleManage from '@/components/Role_Manage/roleManage'
import taskDetail from '@/components/Role_Manage/taskDetail'
import userDetail from '@/components/Role_Manage/userDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DS',
      redirect: '/DS'
    },
    {
      path: '/DS',
      name: 'DS',
      component: DS
    },
    {
      path: '/AILabel',
      name: 'AILabel',
      component: AILabel
    },
    {
      path: '/editConfiguration',
      name: 'editConfiguration',
      component: editConfiguration
    },
    
    {
      path: '/roleManage',
      name: 'roleManage',
      component: roleManage,
      redirect: '/roleManage/medicalManage',
      children: [
        {
      path: 'demandManage',
      name: 'demandManage',
      component: demandManage
    },
    {
      path: 'medicalManage',
      name: 'medicalManage',
      component: medicalManage
    },
      ]
    },
    {
      path: '/taskDetail',
      name: 'taskDetail',
      component: taskDetail
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      component: userDetail
    },
    {
      path: '/AILabel',
      name: 'AILabel',
      component: AILabel
    },

    {
      path: '/AILabel',
      name: 'AILabel',
      component: AILabel
    },
  ]
})
