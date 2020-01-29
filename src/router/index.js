import Vue from 'vue'
import VueRouter from 'vue-router'
import landing from '../views/landing.vue'
import MyProfile from '../views/MyProfile.vue'
import CommonRegister from '../views/CommonRegister.vue'
import FbLogin from '../views/FbLogin.vue'
import Register2 from '../views/Register2.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'landing',
    component: landing
  },
  {
    path: '/myprofile',
    name: 'myprofile of user',
    component: MyProfile
  },
  {
    path: '/commonregister',
    name: 'common register',
    component: CommonRegister
  },
  {
    path: '/fblogin',
    name: 'fb login',
    component: FbLogin
  },
  {
    path: '/register',
    name: 'fb Registration',
    component: Register2
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
