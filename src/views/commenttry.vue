<template>
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
</template>
<script>
export default {
  data(){
    return{
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
}
</script>
<style scoped>
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