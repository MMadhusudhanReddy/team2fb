<template>
    <div class="Timelinebio">
      <div class="left">
          <img :src="bio.imageUrl"  alt="image" height="150" width="150">
          <!-- <img :src="image"  alt="image" height="150" width="150"> -->
      </div>
      <div class="right">
          <!-- <p>NAME : {{bio.userName}}</p>
          <p>DOB:{{DOB}}</p> -->
          <p> {{bio.userName}} </p>
      </div>
      <div  class="addfriend">
          <div v-if="seen" v-on:click="addfriend"> Add Friend </div>
          <p v-else> Following </p>

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
        seen: true
        }
    },
    computed:{
      bio(){
        window.console.log("inside friend timeline bio",this.$store.state.timelinefeeds[0])
        return this.$store.state.timelinefeeds[0]
      }

    },
    methods:{
        addfriend(){
            this.$store.dispatch("addfriendrequest",this.$route.params.productId)
        }
    }
    
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
    font-size:20px;
}

.addfriend{
    margin:1%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    color:blue;
    /* height: 100%; */
    /* background-color: #42a2e6;
    color: #131212fa;
    /* width: fit-content; */
    /* padding: 1%; */
    /*float: right;
    border-radius: 50px; */
}
</style>