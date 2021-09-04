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
import visitLog from '@/components/Role_Manage/visitLog'
import demandCheck from '@/components/User_Check/demandCheck'
import medicalCheck from '@/components/User_Check/medicalCheck'
import userCheck from '@/components/User_Check/userCheck'
import commentManage from '@/components/Comment_Manage/commentManage'
import modelDisplay from '@/components/Model_Display/modelDisplay'
import dataRelease from '@/components/Data_Release/dataRelease'
import viewDetail from '@/components/Data_Release/viewDetail'

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
      path: '/userDetail',
      name: 'userDetail',
      component: userDetail,
      redirect: '/userDetail/visitLog',
      children: [
        {
          path: 'visitLog',
          name: 'visitLog',
          component: visitLog
        },
        {
          path: 'taskDetail',
          name: 'taskDetail',
          component: taskDetail
        },
      ]
    },
    {
      path: '/userCheck',
      name: 'userCheck',
      component: userCheck,
      redirect: '/userCheck/medicalCheck',
      children: [
        {
          path: 'medicalCheck',
          name: 'medicalCheck',
          component: medicalCheck
        },
        {
          path: 'demandCheck',
          name: 'demandCheck',
          component: demandCheck
        },
      ]
    },
    {
      path: '/commentManage',
      name: 'commentManage',
      component: commentManage
    },
    {
      path: '/modelDisplay',
      name: 'modelDisplay',
      component: modelDisplay
    },
    {
      path: '/dataRelease',
      name: 'dataRelease',
      component: dataRelease,
    },
    {
      path: '/viewDetail',
      name: 'viewDetail',
      component: viewDetail
    }
  ]
})
