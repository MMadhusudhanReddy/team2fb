import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDK6lwJSsX8z1T2gLp8AcS1Cf9d3738p7I",
  authDomain: "team2fbuploadposts.firebaseapp.com",
  databaseURL: "https://team2fbuploadposts.firebaseio.com",
  projectId: "team2fbuploadposts",
  storageBucket: "team2fbuploadposts.appspot.com",
  messagingSenderId: "686386551682",
  appId: "1:686386551682:web:df7c63d4cf0bd0799e8d9b",
  measurementId: "G-001GFXP88P"
})

new Vue({
  router,
  store,
  render: h => h(App),
  

}).$mount('#app')
