<template>
    <div>
        <Header/>
        <div class="parentbox">

            <div class="sidebar">
                    <sidebar/>
            </div>
        
            <div class="middlesection">
                <div class="childmiddlesection" >
                    <FriendTimelineBio/>
                </div>
                <div class="childmiddlesection">
                    <FeedInTimeline/>
                </div>
            </div>
            
            
            <div class="ads">
                <MutualFriends/>
            </div>
        </div>
       
    </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
import FriendTimelineBio from '../components/FriendTimelineBio.vue'
import FeedInTimeline from '../components/FeedInTimeline.vue'
import Header from '../components/Header.vue'
import MutualFriends from '../components/MutualFriends.vue'
export default {
    components:{
        FriendTimelineBio,
        FeedInTimeline,
        Header,
        sidebar,
        MutualFriends
    },
    created(){
      this.$store.dispatch("getFeedTimeline",this.$route.params.productId)

      
      

    },

    
}
</script>

<style scoped>

.feeds{
    background-color: #BFDBF7;
    width:50%;
    
    display: flex;
}
.sidebar{
  background-color: white;
  width: 25%;
  margin: 15px;






    /* background-color: #BFDBF7;
    width: 20%;
    margin-right:1%;    
    padding-left: 38px;
    padding-right: 0px; */


}
.ads{
    background-color: white;
    width: 28%;
    padding-left: 1%;
    padding-right: 1%;
    margin-left:1%; 

}

.flexcomponent{
    display:flex;
}

.middlesection{
    display: flex;
    flex-direction: column;
    width: 50%;

}
.parentbox{
    display: flex;
    flex-direction: row;
}
childmiddlesection{
    width: 100%;
}
</style>