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


                      <div class="Comment">
                        <div class="container">
                      <!-- <h2>Small Modal</h2> -->
                      <!-- Button to Open the Modal -->
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                          Comment
                        </button>
                        <!-- The Modal -->
                        <div class="modal fade" id="myModal" >
                          <div class="modal-dialog modal-sm" style="width:50%;">
                            <div class="modal-content">
                              <!-- Modal body -->


                              <div v-for="(comment,index) in comments" :key="index" class="order">
                                    <div class="parentcomment">
                                        <div class="comment">
                                          parentcommentid:  {{comment.parentid}}
                                        </div>
                                        <div class="comment">
                                          parenttext: {{comment.parenttext}}
                                        </div>
                                      </div>
                                      <!-- <hr style="background: 1px solid black; padding:0%;margin:0%;"> -->
                                      <div class="orderlist">
                                      <div v-for="(childcomment,commentindex) in comment.childcomments" :key="commentindex" class="item">
                                        <div class="childcomment">
                                            <div class="commentchild">
                                              childcommentid: {{childcomment.commentid}}
                                            </div>
                                            <div class="commentchild">
                                              commenttext:{{childcomment.commenttext}} 
                                            </div>
                                        </div>
                                      </div> 
                                      </div>
                                  </div>


                              <!-- Modal footer -->
                              <div class="modal-footer">
                                <input type="text" placeholder="start typing.." id="text" style="width:70%;"><br><br>
                                <button type="button" class="btn btn-secondary" style="width:20%;" data-dismiss="modal" @click="add">send</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
        this.$store.dispatch('sendPostReaction')

      },
      postreaction1(index){
        this.$store.state.postreaction="dislike"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('sendPostReaction')

      },
      postreaction2(index){
        this.$store.state.postreaction="wow"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('sendPostReaction')

      },
      postreaction3(index){
        this.$store.state.postreaction="angry"
        window.console.log("reaction",this.$store.state.postreaction)
        window.console.log(index)
        this.$store.state.index=index
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