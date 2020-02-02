<template>
    <div class="parentfeed">
        <div v-for="(order,index) in feeds" v-bind:key="index">
            <div class="singlepost">
                <div class="topsection">
                          <img v-bind:src="order.imageurl" style="width:50px;border-radius:50%;" >
                          <div style="padding: 2%;5"> {{order.username}} </div>
                </div>
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


                    <div class="Comment">
                      <div class="container">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                          Comment
                        </button>
                        <div class="modal fade" id="myModal" >
                          <div class="modal-dialog modal-sm" style="width:50%;">
                            <div class="modal-content">


                              <div v-for="(comment,index) in comments" :key="index" class="order">
                                    <div class="parentcomment">
                                        <div class="comment">
                                          parentcommentid:  {{comment.parentid}}
                                        </div>
                                        <div class="comment">
                                          parenttext: {{comment.parenttext}}
                                        </div>
                                        <button style="background-color: dodgerblue;font-size: 12px;"> reply </button>
                                      </div>
                            
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


                    
                              <div class="modal-footer">
                                <input type="text" placeholder="start typing.." id="text" style="width:70%;"><br><br>
                                <button type="button" class="btn btn-secondary" style="width:20%;" data-dismiss="modal" @click="add">send</button>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>



















                  <!-- <div v-for="(order,index) in orders" v-bind:key="index">
                    <div class="singlepost">
                      <div class="topsection">
                        <img v-bind:src="order.imageurl" style="width:50px;border-radius:50%;" >
                        <div style="padding: 2%;5"> {{order.username}} </div>
                      </div>
                      
                      <div v-if="order.image!=null">
                        <img v-bind:src="order.image">
                      </div>
                      <div v-if="order.video!=null">
                        <img v-bind:src="order.video">
                      </div>
                      <div v-if="order.text!=null">
                        <img v-bind:src="order.text">
                      </div>
                      </div> -->


<!-- 
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
                    </div> -->




                    <!-- <div class="Comment">
                        <div class="container">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                          Comment
                        </button>
                        <div class="modal fade" id="myModal" >
                          <div class="modal-dialog modal-sm" style="width:50%;">
                            <div class="modal-content">


                              <div v-for="(comment,index) in comments" :key="index" class="order">
                                    <div class="parentcomment">
                                        <div class="comment">
                                          parentcommentid:  {{comment.parentid}}
                                        </div>
                                        <div class="comment">
                                          parenttext: {{comment.parenttext}}
                                        </div>
                                        <button style="background-color: dodgerblue;font-size: 12px;"> reply </button>
                                      </div>
                            
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


                    
                              <div class="modal-footer">
                                <input type="text" placeholder="start typing.." id="text" style="width:70%;"><br><br>
                                <button type="button" class="btn btn-secondary" style="width:20%;" data-dismiss="modal" @click="add">send</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div> -->
                      































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

                        "username":"hrithik",
                        "imageurl":"data:image/jpeg;base64,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",
                        "text" : null ,
                        "image" : null,
                        "video":"http://vjs.zencdn.net/v/oceans.mp4"
                },

                {
                    "username":"hrithik",
                    "imageurl":"data:image/jpeg;base64,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",
                        
                    "text":"This is an image",
                    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgOf1qyDUgUdfRBFpxM_YQ7QWSKfB_NaoD_vB2tzJey1XfGCN",
                    "video":null
                },
                {
                    "username":"hrithik",
                    "imageurl":"data:image/jpeg;base64,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",    
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
hr{
  margin:1%;
  border:0.5px solid;
}
.topsection{
  display:flex;
  flex-direction:row;
      padding: 3px;
  margin-bottom:1%;

}

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
    width:60%;

}






</style>