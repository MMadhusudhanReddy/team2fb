<template>
    <div class="header">
        <div class="headercomponents">
            <i class="fab fa-facebook-square" style="font-size: 50px;color:white;margin-left:3%;"></i>
            <div v-on:click="home" class="home">
                Home
            </div>
            <div class="search" >
                
                <input v-on:keyup.enter="search"
          v-model="searchText" type="text" style="height:50%;margin:auto;border-radius:10px;width:100%;text-align:center;font-size:15px;outline:none;" placeholder="search">
            </div>
            <!-- <div class="profile">
                <i class="fas fa-user" style="font-size:30px;color:white;margin-left:3%;"></i>
            </div> -->
            <div class="notification">
                <i class="far fa-bell" style="font-size:30px;color:white;"></i>
            </div>
            <div v-on:click="logout" class="signout">
                <i class="fas fa-sign-out-alt" style="font-size:30px;color:white;"></i>
            </div>

        </div>
        
            
    </div>
</template>
<script>
import axios from 'axios'
export default {

    data() {
    return {
      searchText: ""
    };
  },

 methods: {
    home(){
        this.$router.push('/landing/'+localStorage.getItem('userId')+"")

     },
    search() {
        this.$store.dispatch("getSearchResults", this.searchText);
        this.$router.push('/search')


    //   if (this.$route.path.match("searchresults")) {
    //     this.$store.dispatch("getResults", this.searchText);
    //     this.$router.push("/searchresults");
    //   } else {
    //     if (e.keyCode === 13) {
    //       this.$store.dispatch("getResults", this.searchText);
    //       this.$router.push("/searchresults");
    //     }
    //   }
      // window.console.log('route',this.$route);
      // this.$store.dispatch('getResults',this.searchText);
      // this.$router.push('/searchresults');
    },
    logout(){
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        axios.post('http://172.16.20.33:8080/search/save',
        {
          "targetId":null,
          "action":"login",
          "appId:":"facebook",
          "userId":localStorage.getItem('userId'),  
          "targetEntity":"null",
          "tag":"null"

        },)
        .then(response=>{
          window.console.log('response',response.data.data.userId)
          // localStorage.setItem('userId',response.data.data.userId)
          // this.$router.push('/landing/'+localStorage.getItem('userId')+"")
          
          
        })

      .catch(error => {
        window.console.log(error)
      })
        this.$router.push('/fblogin')

    }
 }
}
 </script>

<style scoped>
.header{
    background-color: #3b5998;
    width: 100%;
    height: 50px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1%;
}
.search-bar {
  margin-top: 11px;
  margin-left: 32px;
  width: 25%;
}
.headercomponents{
    display: flex;
    margin-left:1%;
    width:100%;
    justify-content: space-between;
}
.home{
    color: white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left:3%;
    margin-right: 3%;
}
.search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
}
.profile{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 3%;
}
.notification{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3%;
    margin-right: 3%;
}
.signout{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 3%;
}
</style>