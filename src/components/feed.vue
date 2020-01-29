<template>
    <div>
        <div v-for="(order,index) in orders" v-bind:key="index">
            {{index}}
            <div v-if="order.imageurl!=null">
                image
                <img v-bind:src="order.imageurl" >
            </div>
            <div v-else-if="order.text!=null">
                {{order.text}}
            </div>
            
            <div v-else>
                <video width="320" height="240" autoplay>
                    <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                    <source v-bind:src="order.videoutl" type="video/ogg">
                    Your browser does not support the video tag.
                </video>
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
                        "text" : "This is text" ,
                        "imageurl":null,
                        "videourl":"http://vjs.zencdn.net/v/oceans.mp4"
                },

                {
                    "text":null,
                    "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVgOf1qyDUgUdfRBFpxM_YQ7QWSKfB_NaoD_vB2tzJey1XfGCN",
                   "videourl":null
                },
                // {
                //     "text":null,
                //     "imageurl":null,
                //     "videourl":"http://vjs.zencdn.net/v/oceans.mp4"
                // }
            ]
            
        }
    }
}
</script>