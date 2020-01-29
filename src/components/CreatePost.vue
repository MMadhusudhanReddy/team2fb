<template>
  <div class="posting">
    <p class="heading">CREATE POST</p><hr>
    <input type="text" class="box" placeholder="   WRITE SOMETHING HERE    "/><br>
    <ul>
    <!-- <li><input type="file" @change="onFileSelected"></li> -->
    <button @click="onupload">Upload</button>
    <li><button>Add video</button></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // selectedfile : null
    };
  },
  // methods:{
  //     onFileSelected: function(event){
  //       window.console.log(event)
  //       this.selectedfile =event.target.files[0]
  //     },
  //     onupload:function(){
  //       axios.
  //     }
  // }
};
</script>
<style scoped>
.posting{
    width:60%;
    margin-left:100px;
    height:300px;
    box-shadow: 3px 5px 2px 5px  #888888;
}
.box{
  margin-top:30px;
  height: 50px;
  width:70%;
  border-radius: 50px;
  border: 2px solid black;
  background-color: blanchedalmond;
}
.right {
  float: right;
}
ul li {
  display: block;
  float:right;
}
button {
  border-radius: 10px;
  margin:4px;
}
.heading{
  background-color: antiquewhite;
  width:100%;
  height:50px;
}
</style>