<template>
    <div class="parentfeed">
        <div v-for="(order,index) in feeds" v-bind:key="index">
            <div class="singlepost">
                <!-- {{index}} -->
                <!-- {{order.content.text}} -->
                <div v-if="order.postDTO.content.image!=null">
                    <img v-bind:src="order.postDTO.content.image" style="width:100%;height:280px;"><br>
                </div>
                <div v-if="order.postDTO.content.video!=null">
                    <video style="width:100%;" autoplay>
                        <source v-bind:src="order.postDTO.content.video" type="video/mp4">
                        <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                        This video is not supported by the browser
                    </video> 
                </div>
                <div v-if="order.postDTO.content.text!=null">
                  <div style="width:100%">
                    <p style="width:100%">{{order.postDTO.content.text}}   </p>  
                  </div>
                </div>
                <div class="bottomsection">
                    <div v-on:click="postreaction(index)">
                        <i class="far fa-thumbs-up"></i>
                        Like
                    </div>
                    <div v-on:click="postreaction1(index)">
                        <i class="far fa-thumbs-down"></i>
                        Dislike
                    </div>
                    <div v-on:click="postreaction2(index)">
                        <i class="far fa-surprise"></i>
                        wow
                    </div>
                    <div v-on:click="postreaction3(index)">
                        <i class="far fa-angry"></i>
                        Angry
                    </div>
                    </div>
                </div>
            </div>
       

    </div>
</template>


<script>
// import VueCoreVideoPlayer from 'vue-core-video-player';
export default {
    components:{
        // VueCoreVideoPlayer
    },
    data :function(){
        return {
            orders:[
                {
                        "text" : null ,
                        "image" : null,
                        "video":"http://vjs.zencdn.net/v/oceans.mp4"
                },

                {
                    "text":"This is an image",
                    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgOf1qyDUgUdfRBFpxM_YQ7QWSKfB_NaoD_vB2tzJey1XfGCN",
                    "video":null
                },
                {
                    "text":"This is a text",
                    "image":null,
                    "video":null
                },
                
            ],



            comments:[
          {
              parentid:1,
              parenttext:"hello world",
              childcomments:[
                  {
                      commentid:11,
                      commenttext:"hello mini world"
                  },
                  {
                      commentid:12,
                      commenttext:"this is fun"
                  }
              ]
          },
          {
              parentid:2,
              parenttext:"Welcome to fb!!!",
              childcomments:[
                  {
                      commentid:21,
                      commenttext:"childcomment 21"

                  },
                  {
                      commentid:22,
                      commenttext:"childcomment 22"

                  }

              ]
          }
      ]









            
        }
    },
    created(){
      window.console.log("inside feeds created")
      this.$store.dispatch("getFeeds",localStorage.getItem('userId'))
      // this.$store.dispatch("/getFeeds/"+)
      

    },
    computed:{
      feeds(){
        window.console.log("inside feed",this.$store.state.feed)
        return this.$store.state.feed
      }

    },
   methods:{
        postreaction(index){
        this.$store.state.postreaction="like"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('sendPostReaction1')

      },
      postreaction1(index){
        this.$store.state.postreaction="dislike"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('sendPostReaction1')

      },
      postreaction2(index){
        this.$store.state.postreaction="wow"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('sendPostReaction1')

      },
      postreaction3(index){
        this.$store.state.postreaction="angry"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('sendPostReaction1')

      }
      
    }
}
</script>

<style scoped>
.singlepost{
    width:90%;
    margin:auto;
    background-color: #F7F0F0;
    margin-bottom: 2%;
    margin-top: 2%;
    /* padding-top:1%; */
}
.bottomsection{
    margin-left: 3%;
    display: flex;
    justify-content: space-between;
    margin-right: 3%;
}
.parentfeed{
  width:100%;
}



.myModal{
  margin-top:20%;
  width:60%;
  height:200px;
}
.one{
  width:200px;
  height:40px;
  border:1px solid black;
  margin-bottom:20px;
}
.two{
  width:200px;
  height:40px;
  border:1px solid black;
  float:right;
}
.comment{
    margin: 4%;
    border: 1px solid;
    width: 60%;
}
.commentchild{
    margin: 4%;
    border: 1px solid;
    float:right;

}






</style>