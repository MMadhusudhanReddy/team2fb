<template>
    <div class="parentfriends">
        <Header/>
        <div class="friends">
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
    }
}

</script>

<style>
.friends{
    margin: auto;
    width:25%;
}
.parentfriends{
    width:100%;
}
</style>
