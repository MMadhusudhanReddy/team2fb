<template>
    <div class="Timelinebio">
      <div class="left">
          <img :src="image"  alt="image" height="150" width="150">
      </div>
      <div class="right">
          <p>NAME : {{NAME}}</p>
          <p>DOB:{{DOB}}</p>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        image :'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2SYQzKh19n2C5VP1AkWYgk17RtmiilqMr_MEBSN9T85k3S77i',
        NAME :'KAMAL',
        DOB:'10/03/1998'
        }
    },
    methods:{
    }
}
</script>
<style scoped>
.Timelinebio{
    box-shadow: 4px 3px 2px 3px  black;
    height:150px;
    width:100%;
    position:absolute;
    top:0;
    left:0;
}
.left{
    float:left;
    width:20%;
}
img{
    border-radius:50%;
}
.right{
    float:left;
    width:60%;
    font-weight:bold;
    font-size:20px;
}
</style>