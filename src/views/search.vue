<template>
    <div>
        <Header/>
        <div class="searchresults">
            <MutualFriends1/>
        </div>
    </div>
</template>


<script>

import Header from '../components/Header.vue'
import MutualFriends1 from '../components/MutualFriends1.vue'
export default {
    components:{
        Header,
        MutualFriends1
    },
    

    
}
</script>

<style>
.searchresults{
    width:30%;
    margin:auto;
}
</style>

