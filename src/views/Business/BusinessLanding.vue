<template>
    <div class="BusinessLanding">
        <Header />
        <BusinessBody />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import BusinessBody from '@/components/Business/BusinessBody.vue';
export default {
    name:'BusinessLanding',
    components:{
     Header,
     BusinessBody,
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
.BusinessLanding{
    background-color: aliceblue;
}
</style>