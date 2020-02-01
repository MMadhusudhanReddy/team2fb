<template>
    <div>
        <Header/>
        
        
        <div>
            <FriendTimelineBio/>
        </div>
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
    background-color: #BFDBF7;
    width: 20%;
    /* padding-left:1.5%;
    padding-right: 1.5%; */
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
}
</style>