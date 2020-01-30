<template>
    <div>
        <Header/>
        <div class="mainbox">

            <div class="sidebar">
                    <sidebar/>
            </div>
            <div class="Myprofile">
            
                <img :src="getuserdetails.imageUrl" alt="img" height="100" width="100">
                <br><br><br>
                <br>
                <div class="fields">
                    <label>NAME</label>
                    <input type="text" placholder="name" v-model="getuserdetails.userName" class="editable">
                </div>
                <div class="fields">
                    <label>DOB</label>
                    <!-- <input type="Date" v-model="date" class="editable"> -->
                </div>
                <div class="fields">
                    <label>DOMAINS INTERSETED</label>
                    <select class="editable">
                        <option>SPORTS</option>
                        <option>BOLLYWOOD</option>
                        <option>LIFE STYLE</option>
                        <option>TECHNOLOGY</option>
                        <option>FOOD</option>
                    </select>
                </div>
                <div class="fields">
                    <label>E-mail</label>
                    <span>{{getuserdetails.email}}</span>
                </div>
                <div class="fields">
                    <label>GENDER</label>
                    <span>{{getuserdetails.gender}}</span>
                </div>
                <div class="fields">
                    <label>MOBILE NUMBER</label>
                    <input type="number" placeholder="number" v-model="getuserdetails.mobileNumber" class="editable">
                </div>
                <div class="fields">
                    <label>PROFILE TYPE</label>
                    <span>{{getuserdetails.displayType}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import sidebar from '../components/sidebar.vue'
export default {
    components:{
        Header,
        sidebar
    },
    data(){
        return{
          name:'',
          Email:'kamalrajmayakuntla@gmail.com',
          gender:'Male',
          profiletype:'public',
          profileimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2SYQzKh19n2C5VP1AkWYgk17RtmiilqMr_MEBSN9T85k3S77i',
        }
    },
    created(){
        this.$store.dispatch('getAboutDetails',{
      userId:this.$route.params.userId 
    })

    },
    computed:{
        getuserdetails(){
            window.console.log("inside my profile and getting user data",this.$store.state.userdetails)
            return this.$store.state.userdetails
        }
    }
}
</script>
<style scoped>
.fields{
  height:50px;
}
.Myprofile{
  width: 38%;
  
  border: 2px solid black;
  padding: 5%;
  font-family: sans-serif;
}
label {
  float:left;
  font-size:15px;
  font-family: sans-serif;
  font-weight:bold;
}
input ,select,span{
  height:30px;
  float:right;
  width:250px;
  margin-right:30px;
  border:none;
}
img{
    border-radius:50%;
}
.editable{
    background-color: #FFFFE6;
}
.sidebar{
    background-color: #BFDBF7;
    width: 20%;
    /* padding-left:1.5%;
    padding-right: 1.5%; */
    margin-right:1%;    
    padding-left: 38px;
    padding-right: 0px;


}
.mainbox{
    display: flex;
}
</style>