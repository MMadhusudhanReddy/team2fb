<template>
    <div class="landing-main">
        <div class="header-landing">
        <Header/>
        </div>
        <div class="landing-content flex">
            <div class="sidebar">
                <sidebar/>
            </div>
            <div class="feeds flex-container createpost">
                <div class="postbox">
            <CreatePost />
        </div>
        <div>
                <Feed/>
            </div>
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


.landing-main
{
    background-color:whitesmoke;
}
.flex {
  display: flex;
}
.flex-container {
  display: flex;
  flex-direction: column;
}
.feeds {
  background-color: #bfdbf7;
  width: 50%;
  display: flex;
}
.sidebar {
  background-color: white;
  width: 25%;
  margin: 15px;
}
.ads {
  background-color:white;
  width: 25%;
  margin: 15px;
}
.createpost {
  background-color: white;
  width: 50%;
  margin: 15px;
  /* width:50%; */
}
.postbox
{
    padding: 15px;
    border-bottom: 15px solid whitesmoke;
}




























/* .parentlanding{
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
    
} */

</style>