import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Main from '../views/main/main'
import Login from '../views/login/login'
import Start from '../views/start/start'
import Setpwd from '../views/setpwd/setpwd'


const routes=[
  {
    path:'/main',
    component:Main
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/start',
    component:Start
  },
  {
    path:'/setpwd',
    component:Setpwd
  },
  {
    path:'*',
    redirect:'/login'
  }
]
export default new Router({
  routes: routes
})
