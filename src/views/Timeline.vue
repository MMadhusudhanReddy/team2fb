<template>
    <div>
        <Header/>
        <div>
            <TimelineBio/>
        </div>
        <div class="feeds">
                <feed/>
        </div>
    </div>
</template>

<script>
import TimelineBio from '../components/TimelineBio.vue'
import Feed from '../components/Feed.vue'
import Header from '../components/Header.vue'
export default {
    components:{
        TimelineBio,
        Feed,
        Header
    }

    
}
</script>

<style scoped>
.feeds{
    background-color: #BFDBF7;
    width:50%;
    margin: auto;
    
    display: flex;
}
</style>