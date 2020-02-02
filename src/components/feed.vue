<template>
  <div class="parentfeed">
    <div v-for="(order,index) in orders" v-bind:key="index">
      <div class="singlepost">
        <div v-if="order.image!=null">
          <img v-bind:src="order.image" />
        </div>
        <div v-if="order.video!=null">
          <img v-bind:src="order.video" />
        </div>
        <div v-if="order.text!=null">
          <img v-bind:src="order.text" />
        </div>
      </div>

      <div class="bottomsection">
        <div class="reaction">
          <div v-on:click="postreaction(index)" class="hands like"></div>
        </div>

        <div class="reaction">
          <div v-on:click="postreaction1(index)" class="hands dislike"></div>
        </div>

        <div class="reaction">
          <div v-on:click="postreaction2(index)" class="hands wow"></div>
        </div>

        <div class="reaction">
          <div v-on:click="postreaction3(index)" class="hands angry"></div>
        </div>
        

        <div class="Comment">
          <div class="container">
            <!-- <h2>Small Modal</h2> -->
            <!-- Button to Open the Modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >Comment</button>
            <!-- The Modal -->
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-sm" style="width:50%;">
                <div class="modal-content">
                  <!-- Modal body -->

                  <div v-for="(comment,index) in comments" :key="index" class="order">
                    <div class="parentcomment">
                      <div class="comment">parentcommentid: {{comment.parentid}}</div>
                      <div class="comment">parenttext: {{comment.parenttext}}</div>
                      <button style="background-color: dodgerblue;font-size: 12px;">reply</button>
                    </div>
                    <!-- <hr style="background: 1px solid black; padding:0%;margin:0%;"> -->
                    <div class="orderlist">
                      <div
                        v-for="(childcomment,commentindex) in comment.childcomments"
                        :key="commentindex"
                        class="item"
                      >
                        <div class="childcomment">
                          <div class="commentchild">childcommentid: {{childcomment.commentid}}</div>
                          <div class="commentchild">commenttext:{{childcomment.commenttext}}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <input type="text" placeholder="start typing.." id="text" style="width:70%;" />
                    <br />
                    <br />
                    <button
                      type="button"
                      class="btn btn-secondary"
                      style="width:20%;"
                      data-dismiss="modal"
                      @click="add"
                    >send</button>
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
  components: {
    // VueCoreVideoPlayer
  },
  data: function() {
    return {
      orders: [
        {
          text: null,
          image: null,
          video: "http://vjs.zencdn.net/v/oceans.mp4"
        },

        {
          text: "This is an image",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgOf1qyDUgUdfRBFpxM_YQ7QWSKfB_NaoD_vB2tzJey1XfGCN",
          video: null
        },
        {
          text: "This is a text",
          image: null,
          video: null
        }
      ],

      comments: [
        {
          parentid: 1,
          parenttext: "hello world",
          childcomments: [
            {
              commentid: 11,
              commenttext: "hello mini world"
            },
            {
              commentid: 12,
              commenttext: "this is fun"
            }
          ]
        },
        {
          parentid: 2,
          parenttext: "Welcome to fb!!!",
          childcomments: [
            {
              commentid: 21,
              commenttext: "childcomment 21"
            },
            {
              commentid: 22,
              commenttext: "childcomment 22"
            }
          ]
        }
      ]
    };
  },
  created() {
    window.console.log("inside feeds created");
    this.$store.dispatch("getFeeds", localStorage.getItem("userId"));
    // this.$store.dispatch("/getFeeds/"+)
  },
  computed: {
    feeds() {
      window.console.log("inside feed", this.$store.state.feed);
      return this.$store.state.feed;
    }
  },
  methods: {
    postreaction(index) {
      this.$store.state.postreaction = "like";
      window.console.log("reaction", this.$store.state.postreaction);
      window.console.log(index);
      this.$store.state.index = index;
      this.$store.dispatch("sendPostReaction1");
    },
    postreaction1(index) {
      this.$store.state.postreaction = "dislike";
      window.console.log("reaction", this.$store.state.postreaction);
      window.console.log(index);
      this.$store.state.index = index;
      this.$store.dispatch("sendPostReaction1");
    },
    postreaction2(index) {
      this.$store.state.postreaction = "wow";
      window.console.log("reaction", this.$store.state.postreaction);
      window.console.log(index);
      this.$store.state.index = index;
      this.$store.dispatch("sendPostReaction1");
    },
    postreaction3(index) {
      this.$store.state.postreaction = "angry";
      window.console.log("reaction", this.$store.state.postreaction);
      window.console.log(index);
      this.$store.state.index = index;
      this.$store.dispatch("sendPostReaction1");
    }
  }
};
</script>

<style scoped>
.singlepost {
  width: 90%;
  margin: auto;
  background-color: #f7f0f0;
  margin-bottom: 2%;
  margin-top: 2%;
  /* padding-top:1%; */
}
.bottomsection {
  margin-left: 3%;
  display: flex;
  justify-content: space-between;
  margin-right: 3%;
}
.parentfeed {
  width: 100%;
}

.myModal {
  margin-top: 20%;
  width: 60%;
  height: 200px;
}
.one {
  width: 200px;
  height: 40px;
  border: 1px solid black;
  margin-bottom: 20px;
}
.two {
  width: 200px;
  height: 40px;
  border: 1px solid black;
  float: right;
}
.comment {
  margin: 4%;
  border: 1px solid;
  width: 60%;
}
.commentchild {
  margin: 4%;
  border: 1px solid;
  float: right;
}

.reaction {
  display: flex;
}

/* Reaction CSS */
.hands {
  width: 25px;
  height: 25px;
  background-size: 100% auto !important;
  background-position: center !important;
  margin: 0 10px;
  display: inline-block;
  filter: grayscale(100%) brightness(0.8);
  transition: filter 0.8s ease-out;
  cursor: pointer;
}
.hands:hover {
  filter: grayscale(0) brightness(1);
}
.like {
  background: url(https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png)
    no-repeat;
  animation: like 2.4s infinite forwards;
  transform-origin: bottom left;
}
.dislike {
  background: url(http://pngimg.com/uploads/dislike/dislike_PNG2.png) no-repeat;
  animation: dislike 2.4s infinite forwards 1.2s;
  transform-origin: top right;
}

.wow {
  background: url(https://www.pinclipart.com/picdir/big/66-668825_facebook-wow-png-wow-emoji-facebook-png-clipart.png)
    no-repeat;
  animation: dislike 2.4s infinite forwards 1.2s;
  transform-origin: top right;
}

.angry {
  background: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/65/angry-face_1f620.png)
    no-repeat;
  animation: dislike 2.4s infinite forwards 1.2s;
  transform-origin: top right;
}
</style>