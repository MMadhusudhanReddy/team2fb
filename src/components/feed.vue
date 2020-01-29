<template>
    <div class="parentfeed">
        <div v-for="(order,index) in orders" v-bind:key="index">
            <div class="singlepost">
                <!-- {{index}} -->
                <div v-if="order.image!=null">
                    <img v-bind:src="order.image" style="width:100%;height:280px;"><br>
                </div>
                <div v-if="order.video!=null">
                    <video style="width:100%;" autoplay>
                        <source v-bind:src="order.video" type="video/mp4">
                        <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                        This video is not supported by the browser
                    </video> 
                </div>
                <div v-if="order.text!=null">
                    {{order.text}}     
                </div>
                <div class="bottomsection">
                    <div>
                        <i class="far fa-thumbs-up"></i>
                        Like
                    </div>
                    <div>
                        <i class="far fa-thumbs-down"></i>
                        Dislike
                    </div>
                    <div>
                        Comment
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
// import VueCoreVideoPlayer from 'vue-core-video-player';
export default {
    components:{
        // VueCoreVideoPlayer
    },
    data :function(){
        return {
            orders:[
                {
                        "text" : null ,
                        "image" : null,
                        "video":"http://vjs.zencdn.net/v/oceans.mp4"
                },

                {
                    "text":"This is an image",
                    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgOf1qyDUgUdfRBFpxM_YQ7QWSKfB_NaoD_vB2tzJey1XfGCN",
                    "video":null
                },
                {
                    "text":"This is a text",
                    "image":null,
                    "video":null
                },
                
            ]
            
        }
    }
}
</script>

<style scoped>
.singlepost{
    width:90%;
    margin:auto;
    background-color: #F7F0F0;
    margin-bottom: 2%;
    margin-top: 2%;
    /* padding-top:1%; */
}
.bottomsection{
    margin-left: 3%;
    display: flex;
    justify-content: space-between;
    margin-right: 3%;
}

</style>