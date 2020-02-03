<template>
    <div>
        <div class="Timelinebio">
            <div class="left">
            <img :src="dp"  alt="image" height="150" width="150">
            </div>
            <div class="right">
            <p> {{name}}</p>
            </div>
        </div>
        <div v-on:click="timeline" class="sidediv">
            <button class="sidebutton">Timeline</button>
        </div>
        

        <div v-on:click="friends" class="sidediv">
           <button class="sidebutton"> Friends </button>
        </div>
        <div v-on:click="about" class="sidediv">
           <button class="sidebutton"> About </button>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            name:localStorage.getItem('name'),
            dp:localStorage.getItem('dp')
        }
    },
    created(){
        window.console.log("inside created of sidebar ")

    },
    computed:{
      bio(){
        window.console.log("inside timeline bio",this.$store.state.timelinefeeds[0])
        return this.$store.state.timelinefeeds[0]
      }
    },
    methods:{
        about(){
            this.$router.push("/myprofile/"+localStorage.getItem('userId')+"")
        },
        friends(){
            this.$router.push("/friends/"+localStorage.getItem('userId')+"")
        },
        timeline(){
            this.$router.push("/timeline/"+localStorage.getItem('userId')+"")
        }
    }
}
</script>

<style scoped>


.sidebutton{
    width: 250px;
    color: #3b5998;
    flex-direction: row;
    justify-content:center;
    padding: 10px;
    margin: 25px;
    margin-top: 10px;
    margin-left: 0px;
    text-decoration: none;
    border: none;
    border-bottom: 1px solid lightgray;
    font-size: 25px;
}
.sidebar{
    color: black;
    padding: 20px;
    border-radius: 30px;
    color: darkcyan;
    font-size:20px;
    height: 90vh;
    /* text-align: center; */
    justify-content: center;
}
.Timelinebio
{
    width: 250px;
    color: #3b5998;
    flex-direction: row;
    justify-content:center;
    padding: 10px;
    margin: 25px;
    margin-left: 0px;
    text-decoration: none;
    border: none;
    border-bottom: 1px solid lightgray;
    font-size: 25px;
}
.left{
    text-align: center;
}
img{
    border-radius:50%;
}
.right{
    margin-top:20px; 
    font-weight:bold;
    font-size: 16px;
}
p{
    font-size: 25px;
}
















/* .sidebarbuttons{
    background-color: #3b5998;
    height:40px;
    color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content:center;
    border-radius:10px;
    margin: 2%; 

}

.sidebar{
    color: black;
    margin: 5%;
    padding: 2%;
    border-radius: 30px;
    color: darkcyan;
    font-size:20px;
    width: 58%;
    height: 17px;
    display: flex;
    justify-content: center;
    margin-top: 10%;
    margin-bottom:10%;
} */

</style>