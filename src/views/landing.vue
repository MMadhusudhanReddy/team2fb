<template>
    <div>
        <Header/>
        <h3>This is landing page </h3>
        <div class="parentlanding">
            <div class="sidebar">
                <sidebar/>
            </div>
            <div class="feeds">
                <feed/>
            </div>
            <div class="ads">
                <Ads/>
            </div>
        </div>
  </div>
</template>

<script>
import Feed from '../components/Feed.vue'
import Header from '../components/Header.vue'
import Ads from '../components/Ads.vue'
import sidebar from '../components/sidebar.vue'

export default {
    components:{
        Feed,
        Header,
        Ads,
        sidebar
    }
    
}
</script>

<style scoped>
.parentlanding{
    display: flex;
}

.feeds{
    background-color: #BFDBF7;
    width:50%;
    
    display: flex;
}
.sidebar{
    background-color: #BFDBF7;
    width: 20%;
    padding-left:1.5%;
    padding-right: 1.5%;
    margin-right:1%;

}
.ads{
    background-color: #BFDBF7;
    width: 23%;
    padding-left: 1%;
    padding-right: 1%;
    margin-left:1%; 

}

</style>