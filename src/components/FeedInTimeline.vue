<template>
    <div class="parentfeed">
        <div v-for="(order,index) in feeds" v-bind:key="index">
            <div class="singlepost">
                <div class="topsection">
                    <img v-bind:src="order.imageUrl" style="width:50px;border-radius:50%;" />
                <div style="padding: 2%;float:left;">
                    {{order.userName}}
                </div>
            
                <div class="textContent" v-if="order.postDTO.content.text!=null">
                    <div style="width:100%">
                        <p style="width:100%">{{order.postDTO.content.text}}</p>
                    </div>
                </div>
                <div class="content" v-if="order.postDTO.content.image!=null">
                    <img v-bind:src="order.postDTO.content.image" style="width:100%;height:280px;" /><br />
                </div>
                <div class="content" v-if="order.postDTO.content.video!=null">
                    <video style="width:100%;" autoplay>
                        <source v-bind:src="order.postDTO.content.video" type="video/mp4" />
                        <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />This video is not supported by the browser
                    </video>
                </div>
                <div class="reactionList">
                    <p>Reaction Lists</p>
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
                    <div v-on:click="postreaction3(index)">

                    </div>






                    <div class="Comment">
                        <div class="container">
                            <button v-on:click="commentsvisible(index)" type="button">
                                Comment
                            </button>

                            <div v-if="seen" >
                                <div v-for="(comment,index1) in comments" :key="index1" class="order">
                                                        
                        
                                    <div class="comment">
                                        {{comment.text}}
                                    </div>
                                    <button style="background-color: dodgerblue;font-size: 12px;"> reply </button>
                                                        
                                        
                                                    
                                    <div v-for="(childcomment,commentindex) in comment.childComment" :key="commentindex" class="item">
                                                
                                                                    
                                        <div class="commentchild">
                                            {{childcomment.text}} 
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
            seen:false,
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
        window.console.log("inside created of feedInTimeline")
      this.$store.dispatch("getFeedTimeline", this.$route.params.userId)
      

    },
    computed:{
      feeds(){
        window.console.log("inside feedtimeline",this.$store.state.timelinefeeds)
        return this.$store.state.timelinefeeds
      },
      comments(){
          window.console.log("inside comments in feed in timeline")
          window.console.log("comments",this.$store.state.comments)
          return this.$store.state.comments
      },
      
      
      

    },
    methods:{
    commentsvisible(index){
       window.console.log("inside get comments in feed")
        window.console.log(index)
        this.$store.state.index=index
      this.$store.dispatch('getCommentsForPost1')
       this.seen=true;

     },
        
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

     
      
    }
}
</script>

<style scoped>

.singlepost {
  width: 90%;
  margin: auto;
  background-color: white;
  margin-bottom: 2%;
  margin-top: 2%;
  /* padding-top:1%; */
}
.bottomsection {
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  margin-right: 2%;
  padding-bottom: 10px;
}
.parentfeed {
  background-color: whitesmoke;
  width: 100%;
}
.textContent {
  padding: 10px;
  text-align: left;
}
.content {
  border: 1px solid whitesmoke;
  margin-bottom: 15px;
}
.reactionList {
  margin: 10px;
  text-align: left;
  margin-bottom: 10px;
  border-bottom: 1px solid whitesmoke;
}
p {
  margin-bottom: 0px;
}
.commentchild{
    font: italic;
}















/* .singlepost{
    width:90%;
    margin:auto;
    background-color: #F7F0F0;
    margin-bottom: 2%;
    margin-top: 2%;
    
}
.bottomsection{
    margin-left: 3%;
    display: flex;
    justify-content: space-between;
    margin-right: 3%;
}
.parentfeed{
  width:100%;
} */

</style>