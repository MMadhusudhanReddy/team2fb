<template>
    <div class="Timelinebio">
      <div class="left">
          <img :src="dp"  alt="image" height="150" width="150">
      </div>
      <div class="right">
          <!-- <p>NAME : {{localStorage.getItem('name') }}</p> -->
          <p>NAME : {{name}}</p>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        image :'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2SYQzKh19n2C5VP1AkWYgk17RtmiilqMr_MEBSN9T85k3S77i',
        NAME :'KAMAL',
        DOB:'10/03/1998',
        name:localStorage.getItem('name'),
        dp:localStorage.getItem('dp')
        }
    },
    computed:{
      bio(){
        window.console.log("inside timeline bio",this.$store.state.timelinefeeds[0])
        return this.$store.state.timelinefeeds[0]
      }

    },
    
}
</script>
<style scoped>
.Timelinebio{
    box-shadow: 4px 3px 2px 3px  black;
    height:150px;
    width:100%;
    margin-bottom: 1%;
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
    font-size: 16px;
}
</style>