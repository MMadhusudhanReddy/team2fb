import Vue from 'vue'
import VueRouter from 'vue-router'
import landing from '../views/landing.vue'
import MyProfile from '../views/MyProfile.vue'
import CommonRegister from '../views/CommonRegister.vue'
import FbLogin from '../views/FbLogin.vue'
import Register2 from '../views/Register2.vue'
import BusinessLanding from '../views/Business/BusinessLanding.vue'
import Timeline from '../views/Timeline.vue'
import Friends from '../views/Friends.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'landing',
    component: landing
  },
  {
    path: '/myprofile/:userId',
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
  {
    path: '/businesslanding',
    name: 'Business Landing',
    component: BusinessLanding
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
