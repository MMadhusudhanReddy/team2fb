import Vue from 'vue'
import VueRouter from 'vue-router'
import landing from '../views/landing.vue'
import MyProfile from '../views/MyProfile.vue'
import CommonRegister from '../views/CommonRegister.vue'
import FbLogin from '../views/FbLogin.vue'
import Register2 from '../views/Register2.vue'
import BusinessLanding from '../views/Business/BusinessLanding.vue'
import Timeline from '../views/Timeline.vue'
import search from '../views/search.vue'
import Friends from '../views/Friends.vue'
import FriendTimeline from '../views/FriendTimeline.vue'
import commenttry from '../views/commenttry.vue'
import BusinessPages from '../views/Business/BusinessPages.vue'
import BusinessTimeline from '../views/BusinessTimeline.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/landing/:userId',
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
    path: '/businesspages',
    name: 'Business Pages',
    component: BusinessPages
  },
  {
    path: '/timeline/:userId',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/friends/:userId',
    name: 'friends',
    component: Friends
  },
  {
    path: '/friendtimeline/:userId',
    name: 'Friend Timeline',
    component: FriendTimeline
  },
  {
    path: '/commenttry',
    name: 'Comment example',
    component: commenttry
  },
  {
    path: '/businesspages',
    name: 'Business Pages',
    component: BusinessPages
  },
  {
    path: '/businesstimeline/:userId',
    name: 'Business Timeline',
    component: BusinessTimeline
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router