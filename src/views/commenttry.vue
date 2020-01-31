<template>
  <div class="Comment">
    <div class="container">
  <!-- <h2>Small Modal</h2> -->
  <!-- Button to Open the Modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Comment
  </button>
  <!-- The Modal -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <!-- Modal body -->
        <div class="modal-body" v-for="(items,index) in list" v-bind:key="index">
           <div class="one">{{items.comment}}</div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <input type="text" placeholder="start typing.." id="text"><br><br>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="add">send</button>
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
      list:[
        {
          comment:'',
        },
        {
          comment:'',
        },
        {
          comment:'',
        },
        {
          comment:'',
        },
      ]
    }
  },
}
</script>
<style scoped>
.myModal{
  margin-top:20%;
  width:500px;
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
</style>