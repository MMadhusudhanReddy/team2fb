<template>
    <div class="parentfeed">
        <div v-for="(order,index) in businessfeeds" v-bind:key="index">
            <div class="singlepost">
                <!-- {{index}} -->
                <!-- {{order.content.text}} -->
                <div class="topsection">
                    <img v-bind:src="order.imageurl" style="width:50px;border-radius:50%;" >
                    <div style="padding: 2%;float:left;"> {{order.userName}} </div>
                </div>
                <div v-if="order.image!=null">
                    <img v-bind:src="order.image" style="width:100%;height:280px;"><br>
                </div>
                <div v-if="order.video!=null">
                    <video style="width:100%;" autoplay>
                        <source v-bind:src="order.video" type="video/mp4">
                        <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                        This video is not supported by the browser
                    </video> 
                </div>
                <div v-if="order.text!=null">
                  <div style="width:100%">
                    <p style="width:100%">{{order.text}}   </p>  
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



                    <div  class="Comment">
                        <div  class="container">
                            <button  v-on:click.prevent="getcomments(index)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                Comment
                            </button>
                            <div class="modal fade" id="myModal" >
                                <div class="modal-dialog modal-sm" style="width:50%;">
                                    <div class="modal-content">


                                        <div v-for="(comment,index1) in comments" :key="index1" class="order">
                                            
                                            <div  class="parentcomment">
                                                <!-- <div class="comment">
                                                    parentcommentid:  {{comment.parentid}}
                                                </div> -->
                                                <div class="comment">
                                                    parenttext: {{comment.text}}
                                                </div>
                                                <button style="background-color: dodgerblue;font-size: 12px;"> reply </button>
                                            </div>
                            
                                            <div class="orderlist">
                                                <div v-for="(childcomment,commentindex) in comment.childComment" :key="commentindex" class="item">
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




            comments1:[
                {
                    parentid:1,
                    text:"hello world",
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
                    text:"Welcome to fb!!!",
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
        window.console.log("inside created of business feedInTimeline")
      this.$store.dispatch("getBusinessFeedTimeline", this.$route.params.userId)
      

    },
    computed:{
      businessfeeds(){
        window.console.log("inside business feedtimeline",this.$store.state.businessfeeds)
        return this.$store.state.businessfeeds
      },
      comments(){
          window.console.log("inside comments in feed in timeline")
          window.console.log("comments",this.$store.state.comments)
          return this.$store.state.comments
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

      },

      getcomments(index){
        window.console.log("inside get comments in feed timeline")
        window.console.log(index)
        this.$store.state.index=index
        this.$store.dispatch('getCommentsForPost')

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