<template>
    <div>
        <Header/>
        <div class="searchresults">
            <MutualFriends/>
        </div>
    </div>
</template>


<script>

import Header from '../components/Header.vue'
import MutualFriends from '../components/MutualFriends.vue'
export default {
    components:{
        Header,
        MutualFriends
    },
    

    
}
</script>

<style>
.searchresults{
    width:30%;
    margin:auto;
}
</style>

