import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    usercommonregistration(context,credentials){
      axios.post('http://ipaddress:port/usercommonregister',{
        username:credentials.username,
        email :credentials.email,
        password:credentials.password
      })
      .then(response=>{
        window.console.log('response',response)
      })

    },

    
  }
 })
