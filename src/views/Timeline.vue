<template>
    <div>
        <Header/>
        
        
        
        <div class="flexcomponent">
            <div class="sidebar">
                    <sidebar/>
            </div>
            <div class="feeds">
                    <FeedInTimeline/>
            </div>
            <div class="ads">
                <MutualFriends/>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
// import TimelineBio from '../components/TimelineBio.vue'
import FeedInTimeline from '../components/FeedInTimeline.vue'
import Header from '../components/Header.vue'
import MutualFriends from '../components/MutualFriends.vue'
export default {
    components:{
        // TimelineBio,
        FeedInTimeline,
        Header,
        sidebar,
        MutualFriends
    },
    created(){
      this.$store.dispatch("getFeedTimeline",localStorage.getItem('userId'))
      // this.$store.dispatch("/getFeeds/"+)
      

    },

    
}
</script>

<style scoped>


.landing-main {
  background-color: whitesmoke;
}
.feeds {
  background-color: white;
  width: 50%;
  display: flex;
}
.flexcomponent {
  display: flex;
  background-color: whitesmoke;
}
.flex {
  display: flex;
}
.flex-container {
  display: flex;
  flex-direction: column;
}
.sidebar {
  background-color: white;
  width: 25%;
  margin: 15px;
}
.ads {
  background-color: white;
  width: 25%;
  margin: 15px;
}






















/* .feeds{
    background-color: #BFDBF7;
    width:50%;
    
    display: flex;
}
.sidebar{
    background-color: #BFDBF7;
    width: 20%;
    margin-right:1%;    
    padding-left: 38px;
    padding-right: 0px;


}
.ads{
    background-color: #BFDBF7;
    width: 28%;
    padding-left: 1%;
    padding-right: 1%;
    margin-left:1%; 

}

.flexcomponent{
    display:flex;
} */
</style>