<template>
    <div>
        <div v-for="(ad,index) in ads" v-bind:key="index">
            <div class="ad">
                <img v-bind:src=ad.image style="width:100%;">
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data :function(){
        return {
            ads:[
                {
                    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgOf1qyDUgUdfRBFpxM_YQ7QWSKfB_NaoD_vB2tzJey1XfGCN",
                },
                {
                    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgOf1qyDUgUdfRBFpxM_YQ7QWSKfB_NaoD_vB2tzJey1XfGCN",
                },
                
                
            ]
            
        }
    }
}
</script>

<style scoped>
.ad{
    margin-bottom: 2%;
}


</style>




