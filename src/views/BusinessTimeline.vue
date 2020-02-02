<template>
    <div>
        <Header/>
            <TimelineBio/>
        <div class="flexcomponent">
            
            <div class="feeds">
                    <FeedInTimeline/>
            </div>
            
        </div>
    </div>
</template>

<script>

import TimelineBio from '../components/TimelineBio.vue'
import FeedInTimeline from '../components/FeedInTimeline.vue'
import Header from '../components/Header.vue'

export default {
    components:{
        TimelineBio,
        FeedInTimeline,
        Header,
    },
    created(){
      this.$store.dispatch("getFeedTimeline",localStorage.getItem('userId'))
      // this.$store.dispatch("/getFeeds/"+)
      

    },

    
}
</script>

<style scoped>
.feeds{
    background-color: #BFDBF7;
    width:50%;
    
    display: flex;
}


.flexcomponent{
    display:flex;
}
</style>