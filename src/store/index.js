import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import $router from 'router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userdetails:[],
    accesstoken:null,
    uploadimageurl:null,
    searchdetails:[],
    postreaction:null,
    feed:[],
    timelinefeeds:[],
    index:null,
    
  },
  mutations: {
    UPDATE_TIMELINE_FEED_DETAILS(state,data)
    {
      state.timelinefeeds=data

    },
    UPDATE_FEED_DETAILS(state,data)
    {
      state.feed=data
    },
    UPDATE_SEARCH_DETAILS(state,data)
    {
      state.searchdetails=data


    },
    UPDATE_USER_DETAILS(state,json)
    {
      state.userdetails=json

    }
  },
  actions: {
    getFeedTimeline(context, userId) {
      // window.console.log("inside get feed timeline")
      // window.console.log('in store, getproductdetails ', this.state)
      axios.get('http://172.16.20.82:8083/post/user/timeline/' + userId)
        .then(product => {
          window.console.log("inside get feed timeline",product.data.data)
          context.commit('UPDATE_TIMELINE_FEED_DETAILS', product.data.data)
        })
        .catch(error => {
          window.console.log(error)
        })
    },
    getFeeds(context, userId) {
      // window.console.log('in store, getproductdetails ', this.state)
      axios.get('http://172.16.20.113:8084/feed/getFeed/' + userId)
        .then(product => {
          window.console.log(product.data.postDTOList)
          context.commit('UPDATE_FEED_DETAILS', product.data.postDTOList)
        })
        .catch(error => {
          window.console.log(error)
        })
    },
    sendPostReaction(){
      window.console.log("inside send post reaction in store")
      window.console.log("index",this.state.index)
      window.console.log('post details',this.state.timelinefeeds[this.state.index])
      window.console.log('postid',this.state.timelinefeeds[this.state.index].postId)
      axios.post('http://172.16.20.82:8083/reaction/addActivity',
      {
        // "userId":1,
        userId:localStorage.getItem('userId'),
        postId:this.state.timelinefeeds[this.state.index].postId,
        activity:this.state.postreaction


      }).then(response => {
        window.console.log(response)
        window.console.log('after axios postid',this.state.timelinefeeds[this.state.index].postId)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


    },

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
    sendPostDetails(){
      axios.post('http://10.177.68.182:8083/post/addPost',
      {
        "category" :"personal",
        "userId":1,
        // "userId":localStorage.getItem('userId'),
        "content":{
          "video": null,
          "image":this.state.uploadimageurl,
          "text":null


        }


      }).then(response => {
        window.console.log(response)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


    },
    getSearchResults(context,searchText)
    {
      axios.get('http://172.16.20.138:8085/search/getAll/'+searchText)
      .then(product => {
        window.console.log("inside search in store",product.data)
        context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })

    }





    
  }
 })
