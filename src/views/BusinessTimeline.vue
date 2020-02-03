<template>
    <div>
        <Header/>
            <TimelineBio/>
        <div class="flexcomponent">
            
            <div class="feeds">
                    <FeedInBusinessTimeline/>
            </div>
            
        </div>
    </div>
</template>

<script>

import TimelineBio from '../components/TimelineBio.vue'
import FeedInBusinessTimeline from '../components/FeedInBusinessTimeline.vue'
import Header from '../components/Header.vue'

export default {
    components:{
        TimelineBio,
        FeedInBusinessTimeline,
        Header,
    },
    created(){
        window.console.log("inside created of business timeline page")
    //   this.$store.dispatch("getFeedTimeline",localStorage.getItem('userId'))
      // this.$store.dispatch("/getFeeds/"+)
      

    },

    
}
</script>

<style scoped>
.feeds{
    background-color: #BFDBF7;
    width:50%;
    margin:auto;
    
    display: flex;
}


.flexcomponent{
    display:flex;
}
</style>