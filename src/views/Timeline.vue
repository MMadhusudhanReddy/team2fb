<template>
    <div>
        <Header/>
        
        
        <div>
            <TimelineBio/>
        </div>
        <div class="flexcomponent">
            <div class="sidebar">
                    <sidebar/>
            </div>
            <div class="feeds">
                    <feed/>
            </div>
            <div class="ads">
                <MutualFriends/>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '../components/sidebar.vue'
import TimelineBio from '../components/TimelineBio.vue'
import Feed from '../components/Feed.vue'
import Header from '../components/Header.vue'
import MutualFriends from '../components/MutualFriends.vue'
export default {
    components:{
        TimelineBio,
        Feed,
        Header,
        sidebar,
        MutualFriends
    }

    
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
    width: 23%;
    padding-left: 1%;
    padding-right: 1%;
    margin-left:1%; 

}

.flexcomponent{
    display:flex;
}
</style>