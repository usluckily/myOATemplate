import admin from '@/view/admin/index'
import error from '@/view/admin//404'
import home from '@/view/admin/home'
import test from '@/view/admin/test'

import travel from './travel'
import caigou from './caigou'
import holiday from './holiday'
import overtime from './overtime'
import device from './device'
import contract from './contract'
import approve from './approve'

export default[
    {
      path:'/admin',
      name:'主页',
      component:admin,
      redirect:'/admin/home',
      children:[
        ...travel,
        ...caigou,
        ...holiday,
        ...overtime,
        ...device,
        ...contract,
        ...approve,
        {
          path:'home',
          name:'home',
          component:home
        },
        {
          path:'test',
          name:'test',
          component:test
        },
        {
            path:'*',
            name:'404',
            component:error
        }
      ]
    }
  ]