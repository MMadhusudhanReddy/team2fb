<template>

 <div class="landing-main">
    <Header />
    <div class="mainbox">
      <!-- <div class="sidebar">
        <sidebar />
      </div> -->
      <div class="Myprofile">
        <div id="profile-pic">
          <img :src="getuserdetails.imageUrl" alt="img" />
        </div>
        <div class="fields">
          <strong>Name</strong>
          <p>{{ getuserdetails.userName }}</p>
        </div>
        <div class="fields">
          <strong>Domains Interested</strong>
          <p>{{ getuserdetails.interests[0] }}</p>
        </div>
        <div class="fields">
          <strong>E-mail</strong>
          <p>{{getuserdetails.email}}</p>
        </div>
        <div class="fields">
          <strong>Gender</strong>
          <p>{{getuserdetails.gender}}</p>
        </div>
        <div class="fields">
          <strong>Mobile Number</strong>
          <p>{{getuserdetails.mobileNumber}}</p>
        </div>
        <div class="fields">
          <strong>Profile Type</strong>
          <p>{{getuserdetails.displayType}}</p>
        </div>
      </div>
    </div>
  </div>



















    <!-- <div class="landing-main">
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
    </div> -->
</template>
<script>
import Header from '../components/Header.vue'
// import sidebar from '../components/sidebar.vue'
export default {
    components:{
        Header,
        // sidebar
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
.landing-main
{
    background-color:whitesmoke;
    height: 100vh;
}
#profile-pic img {
  width: 200px;
  height: 200px;
  margin-bottom: 40px;
  border-radius: 50%;
  box-shadow: 2px 2px 6px 3px gray;
}
.fields {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-left: 35px;
}
.Myprofile {
  width: 40%;
  padding: 2%;
  font-family: sans-serif;
  margin-left: 10%;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: auto auto;
  
}
label {
  float: left;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: bold;
}
input,
select,
span {
  height: 30px;
  float: right;
  width: 250px;
  margin-right: 30px;
  border: none;
}
.editable {
  background-color: white;
}
.sidebar {
  background-color: white;
  width: 25%;
  margin: 15px;
}
.mainbox {
  display: flex;
}
























/* 
.landing-main
{
    background-color:whitesmoke;
}
.fields{
  height:50px;
}
.Myprofile{
  width: 40%;
  padding:2%;
  border: 2px solid black;
  font-family: sans-serif;
  margin-left:10%;
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
.sidebar {
  background-color: white;
  width: 25%;
  margin: 15px;
}
.mainbox{
    display: flex;
} */
</style>