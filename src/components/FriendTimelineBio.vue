<template>
    <div class="Timelinebio">
      <div class="left">
          <!-- <img :src="bio.imageUrl"  alt="image" height="150" width="150"> -->
          <img class="image" :src="image"  alt="image">
      </div>
      <div class="right">
           <!-- <p>NAME : {{bio.user}}</p> -->
          <!-- <p>DOB:{{DOB}}</p> -->
          <p> {{bio.userName}} </p>
      </div>
      <div  class="addfriend">
          <button class="btn" v-if="seen" v-on:click="addfriend"> Add Friend </button>
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
    height:150px;
    margin: auto;
    margin-bottom: 1%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid lightgrey;
}
.left{
    padding: 0px 10px;
    float: left;
    width: 30%;
}
img{
    border-radius:50%;
}
.right{
   float: left;
    width: 30%;
    font-weight: bold;
    font-size: 20px;
    margin: auto auto;
}

.addfriend{
    float: right; 
    display: flex;
    flex-direction: column-reverse;
    width: 30%;
    
}

.btn
{
    background-color: #3b5998;
    color: white;
    width: 70%;
    margin: auto auto;
    border-radius: 50px;;
}

p
{
    margin-bottom: 0;
}

.image
{
    width: 90%;
    height: 100%;

}



</style>