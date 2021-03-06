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
    index: 1,
    friends:[],
    ads:[],
    uploadtext:null,
    comments:[],
    businessfeed:[],
    pageName:null,
    category:null

  },
  mutations: {
    UPDATE_BUSINESS_TIMELINE_FEED_DETAILS(state,data)
    {
      state.businessfeed=data

    },
    UPDATE_COMMENT_DETAILS(state,data)
    {
      state.comments=data
    },
    UPDATE_ADS(state,data)
    {
      state.ads=data
    },
    UPDATE_FRIENDS(state,data)
    {
      state.searchdetails=data

    },
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
    addfriendrequest(friendid)
    {
      window.console.log("friend id",friendid)
      axios.post('http://172.16.20.180:8082/user/sendFriendRequest',
      {
        userId:localStorage.getItem('userId'),
        friendId :localStorage.getItem('friendId')

      })
      .then(response => {
        window.console.log(response)
        // window.console.log('after axios postid',this.state.timelinefeeds[this.state.index].postId)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


    },
    getAds(context)
    {
      axios.get('http://172.16.20.181:8080/ads/getAds/1',
      {
        headers:{"authorization":localStorage.getItem('accessToken')}
        //  headers:{"authorization":'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWQiOjIsIm5hbWUiOiJCaHVtaSIsImVtYWlsIjoiYmh1bWkucGF0ZWxAY292aWFtLmNvbSIsImlhdCI6MTU4MDQ2MzEzNSwiZXhwIjoxNTgxMzI3MTM1fQ.Vy-da5MWLd6CsGdGjP6EEwi6vvWSiCt3NfWhQX0I3ckwBINpQb2VPJ8xcMsrRYCHdIxxeSFKTgqc6KvPvfcVPQ'}

      })
      .then(response => {
        window.console.log("Ads::", response)
        context.commit('UPDATE_ADS', response.data)
      })
      .catch(error => {
        window.console.log(error)
      })
    },
    getFriends(context,userId)
    {
      axios.get('http://172.16.20.180:8082/user/getFriends/' + userId)
        .then(product => {
          window.console.log("inside get friends",product.data.data)
          context.commit('UPDATE_FRIENDS', product.data.data)
        })
        .catch(error => {
          window.console.log(error)
        })

    },
    getBusinessFeedTimeline(context,userId)
    {
      window.console.log("inside get business feeds in store and userid is",userId)
      axios.get('http://172.16.20.82:8083/post/admin/timeline/' + userId)
        .then(product => {
          window.console.log("inside get feed timeline",product.data.data)
          context.commit('UPDATE_BUSINESS_TIMELINE_FEED_DETAILS', product.data.data)
        })
        .catch(error => {
          window.console.log(error)
        })

    },
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
      window.console.log('in store, feeds ')
      axios.get('http://172.16.20.113:8084/feed/createFeed/' + userId)
        .then(product => {
          window.console.log(product.data.data)
          context.commit('UPDATE_FEED_DETAILS', product.data.data)
        })
        .catch(error => {
          window.console.log(error)
        })
    },


    getCommentsForPost(context){
      window.console.log("inside get comments in store")
      window.console.log("index",this.state.index)
      window.console.log('post details',this.state.feed[this.state.index])
      window.console.log('postid',this.state.feed[this.state.index].postDTO.postId)
      axios.get('http://172.16.20.82:8083/comment/viewCommentByPost/' + this.state.feed[this.state.index].postDTO.postId)
        .then(product => {
          window.console.log(product.data)
          context.commit('UPDATE_COMMENT_DETAILS', product.data.data)
        })
        .catch(error => {
          window.console.log(error)
        })
      

    },

    getCommentsForPost1(context){
      window.console.log("inside get comments in store")
      window.console.log("index",this.state.index)
      window.console.log('post details',this.state.timelinefeeds[this.state.index])
      window.console.log('postid',this.state.timelinefeeds[this.state.index].postId)
      axios.get('http://172.16.20.82:8083/comment/viewCommentByPost/' + this.state.timelinefeeds[this.state.index].postId)
        .then(product => {
          window.console.log(product.data)
          context.commit('UPDATE_COMMENT_DETAILS', product.data.data)
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



      //to aman for post reaction

      axios.post('http://172.16.20.33:8080/search/save',
              {
                "targetId":this.state.timelinefeeds[this.state.index].postDTO.userId,
                "action":this.state.postreaction,
                "appId":"facebook",
                "userId":localStorage.getItem('userId'),
                "targetEntity":"post",
                "tag":""

              },)
              .then(response=>{
                window.console.log('aman response',response)
                // localStorage.setItem('userId',response.data.data.userId)
                // this.$router.push('/landing/'+localStorage.getItem('userId')+"")
                
                
              })

            .catch(error => {
              window.console.log(error)
            })


    },
    sendPostReaction1(){
      window.console.log("inside send post reaction in store")
      window.console.log("index",this.state.index)
      window.console.log('post details',this.state.feed[this.state.index])
      window.console.log('postid',this.state.feed[this.state.index].postDTO.postId)
      axios.post('http://172.16.20.82:8083/reaction/addActivity',
      {
        // "userId":1,
        userId:localStorage.getItem('userId'),
        postId:this.state.feed[this.state.index].postDTO.postId,
        activity:this.state.postreaction


      }).then(response => {
        window.console.log(response)
        window.console.log('after axios postid',this.state.feed[this.state.index].postDTO.postId)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })




      //to aman for post reaction

      axios.post('http://172.16.20.33:8080/search/save',
              {
                "targetId":this.state.timelinefeeds[this.state.index].postDTO.userId,
                "action":this.state.postreaction,
                "appId":"facebook",
                "userId":localStorage.getItem('userId'),
                "targetEntity":"post",
                "tag":""

              },)
              .then(response=>{
                window.console.log('aman response',response)
                // localStorage.setItem('userId',response.data.data.userId)
                // this.$router.push('/landing/'+localStorage.getItem('userId')+"")
                
                
              })

            .catch(error => {
              window.console.log(error)
            })



    },

    businessCreatePage(userId) {
      // window.console.log('in store, getproductdetails ', this.state)
      axios.post('http://172.16.20.180:8082/user/getBusinessDetails/' + userId,
      {
        "businessName":this.state.pageName,
        "category":this.category


      })
        .then(product => {
          window.console.log(product.data)
          
        })
        .catch(error => {
          window.console.log(error)
        })
    },

    getAboutDetails({ commit }, userId) {
      // window.console.log('in store, getproductdetails ', this.state)
      axios.get('http://172.16.20.180:8082/user/getUserDetails/' + userId.userId)
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
      
      window.console.log("inside image send post details")
      window.console.log(localStorage.getItem('userId'))
      window.console.log("upload text",this.state.uploadtext)
      axios.post('http://172.16.20.82:8083/post/addPost',
      {
        "category" :"personal",
        // "userId":39,
        "userId":localStorage.getItem('userId'),
        "content":{
          "video": null,
          "image":this.state.uploadimageurl,
          "text":this.state.uploadtext
        }

      }).then(response => {
        window.console.log(response)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


      //to aman for create post

      axios.post('http://172.16.20.33:8080/search/save',
              {
                "targetId":"",
                "action":"post",
                "appId":"facebook",
                "userId":localStorage.getItem('userId'),
                "targetEntity":"image",
                "tag":""

              },)
              .then(response=>{
                window.console.log('aman response',response)
                // localStorage.setItem('userId',response.data.data.userId)
                // this.$router.push('/landing/'+localStorage.getItem('userId')+"")
                
                
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
