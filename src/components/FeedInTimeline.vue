<template>
    <div class="parentfeed">
        <div v-for="(order,index) in feeds" v-bind:key="index">
            <div class="singlepost">
                <!-- {{index}} -->
                <!-- {{order.content.text}} -->
                <div v-if="order.content.image!=null">
                    <img v-bind:src="order.content.image" style="width:100%;height:280px;"><br>
                </div>
                <div v-if="order.content.video!=null">
                    <video style="width:100%;" autoplay>
                        <source v-bind:src="order.content.video" type="video/mp4">
                        <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                        This video is not supported by the browser
                    </video> 
                </div>
                <div v-if="order.content.text!=null">
                  <div style="width:100%">
                    <p style="width:100%">{{order.content.text}}   </p>  
                  </div>
                </div>
                <div class="bottomsection">
                    <div v-on:click="postreaction(index)" >
                        <i class="far fa-thumbs-up"></i>
                        Like
                    </div>
                    <div v-on:click="postreaction1(index)" >
                        <i class="far fa-thumbs-down"></i>
                        Dislike
                    </div>
                    <div v-on:click="postreaction2(index)" >
                        <i class="far fa-surprise"></i>
                        wow
                    </div>
                    <div v-on:click="postreaction3(index)" >
                        <i class="far fa-angry"></i>
                        Angry
                    </div>
                    <div>
                        <!-- <v-btn
        color="primary"
        dark
        @click.stop="dialog = true"
      >
        Open Dialog
      </v-btn>
  
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>
  
          <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Disagree
            </v-btn>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
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
                
            ]
            
        }
    },
    created(){
      this.$store.dispatch("getFeedTimeline",localStorage.getItem('userId'))
      // this.$store.dispatch("/getFeeds/"+)
      

    },
    computed:{
      feeds(){
        window.console.log("inside feed",this.$store.state.timelinefeeds)
        return this.$store.state.timelinefeeds
      },
      

    },
    methods:{
        postreaction(index){
        this.$store.state.postreaction="like"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('sendPostReaction')

      },
      postreaction1(index){
        this.$store.state.postreaction="dislike"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.dispatch('sendPostReaction')

      },
      postreaction2(index){
        this.$store.state.postreaction="wow"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.dispatch('sendPostReaction')

      },
      postreaction3(index){
        this.$store.state.postreaction="angry"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.dispatch('sendPostReaction')

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

</style>