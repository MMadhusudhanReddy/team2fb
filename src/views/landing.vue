<template>
    <div>
        <Header/>
        <div class="createpost">
            <CreatePost/>
        </div>
        <div class="parentlanding">
            <div class="sidebar">
                <sidebar/>
            </div>
            <div class="feeds">
                <Feed/>
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
import CreatePost from '../components/CreatePost.vue'

export default {
    components:{
        Feed,
        Header,
        Ads,
        sidebar,
        CreatePost
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
    width: 23%;
    /* padding-left:1.5%;
    padding-right: 1.5%; */
    margin-right:1%;    
    padding-left: 38px;
    padding-right: 0px;


}
.ads{
    background-color: #BFDBF7;
    width: 25%;
    padding-left: 1%;
    padding-right: 1%;
    margin-left:1%; 

}
.createpost{
    background-color: #BFDBF7;
    width:50%;
    margin: auto;
    margin-bottom: 1%;
    margin-left: 24%;
    /* width:50%; */
}

</style>