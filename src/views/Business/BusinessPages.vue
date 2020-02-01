<template>
    <div class="BusinessLanding">
        <Header />
        <BusinessSidebar />
        
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import BusinessSidebar from '@/components/Business/BusinessSidebar.vue';
export default {
    name:'BusinessLanding',
    components:{
     Header,
     BusinessSidebar,
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