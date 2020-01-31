<template>
    <div>
        <!-- <router-link to="/landing" tag="button" class="btn btn-secondary" style="font-style:italic;margin:1%">My Profile</router-link> -->
        <div class="sidebar">
            <u>My Profile</u>
        </div>
        <div v-on:click="timeline" class="sidebar">
            <u>Timeline </u>
        </div>
        <div v-on:click="friends" class="sidebar">
           <u> Friends </u>
        </div>
        <div v-on:click="about" class="sidebar">
           <u> About </u>
        </div>
        <!-- <div class="sidebarbuttons">
            <b-button>My Profile</b-button>
            <i class="fas fa-user" style="font-size:30px;color:white;margin-left:3%;"></i>
        </div> <br>
        <div class="sidebarbuttons">
            <b-button>Timeline</b-button>
        </div> <br>
        <div class="sidebarbuttons">
            <b-button>Friends</b-button>
        </div> -->

    </div>
</template>

<script>
export default {
    methods:{
        about(){
            this.$router.push("/myprofile/"+localStorage.getItem('userId')+"")
        },
        friends(){
            this.$router.push("/friends")
        },
        timeline(){
            this.$router.push("/timeline")
        }
    }
}
</script>

<style scoped>
.sidebarbuttons{
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
    /* text-align: center; */
    display: flex;
    justify-content: center;
    margin-top: 10%;
}

</style>