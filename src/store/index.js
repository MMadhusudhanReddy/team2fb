import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdetails:[],
    accesstoken:null
  },
  mutations: {
    UPDATE_USER_DETAILS(state,json)
    {
      state.userdetails=json

    }
  },
  actions: {

    getAboutDetails({ commit }, userId) {
      // window.console.log('in store, getproductdetails ', this.state)
      axios.get('http://10.177.68.178:8082/user/getUserDetails/' + userId.userId)
        .then(product => {
          window.console.log(product.data)
          commit('UPDATE_USER_DETAILS', product.data.data)
          localStorage.setItem('userId',this.state.userdetails.userId)
        })
        .catch(error => {
          window.console.log(error)
        })
    },
    userfblogin(context,credentials){
      window.console.log("fblogin  ",credentials)
      axios.post('http://172.16.20.32:8080/auth/signin',{
        
        email :credentials.email,
        password:credentials.password,
        
      })
      .then(response=>{
        window.console.log('response',response)
        window.console.log("inside second response")
        this.state.accesstoken="Bearer "+response.data.accessToken
        axios.get('http://172.16.20.32:8080/jwt/getUserDetails',
        {
          "provider": 2

        },{ headers:{"authorization":this.state.accesstoken}})
        .then(response=>{
          window.console.log('second response',response)
        })


      })
      .catch(error => {
        window.console.log(error)
      })

    },

    // sendGoogleToken() {
    //   return new Promise((resolve, reject) => {
    //     axios.get('http://e4f0173c.ngrok.io/google/authenticate/' + localStorage.getItem("gtoken"))
    //       .then(response => {
    //         // localStorage.setItem('access_token', token)
    //         // context.commit('retrieveToken', token)
    //         // resolve(response)
    //         window.console.log(response);
    //       })
    //       .catch(error => {
    //         window.console.log(error)
    //         reject(error)
    //       })
    //   })
    // },





    
  }
 })
