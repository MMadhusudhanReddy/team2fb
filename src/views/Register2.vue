<template>
  <div>
    <h1>REGISTER</h1>
    <div class="register">
      <form>
          <div>
        <div class="inputfield">
            <label>NAME:</label>
            <input type="text" placeholder="NAME" v-model="name"
            required/><br><br>
        </div>
        <div class="inputfield">
            <label>E-MAIL:</label>
            <input type="email" placeholder="E-mail" v-model="email" required/><br><br>
        </div>
        <div class="inputfield">
            <label>MOBILE NUMBER</label>
            <input type="number" placeholder="CONTACT" v-model="contactnumber" required/><br><br>
        </div>
        <div class="inputfield">
          <label >GENDER</label>
          <select v-model="gender">
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
          </select>
        </div>
        <div class="inputfield">
        <label>DOB:</label>
        <input type="date" v-model="date" required><br><br>
        </div>
        <div class="inputfield">
        <label>ROLE</label>
        <select v-bind="select" @change="disable($event)">
          <option selected value="user">USER</option>
          <option value="business" >BUSINESS </option>
        </select><br><br>
        </div>
        <div class="inputfield">
        <label>PROFILE TYPE</label>
        <select v-model="profiletype" id="typed">
          <option selected value="public">PUBLIC</option>
          <option v-if="seen" value="private">PRIVATE</option>
        </select><br><br>
        </div>
        <div class="inputfield">
        <label>INTERESTS</label>
        <select v-model="interest">
          <option value="sports" selected>SPORTS</option>
          <option value="bollywood">BOLLYWOOD</option>
          <option value="lifestyle">LIFE STYLE</option>
          <option value="technology">TECHNOLOGY</option>
          <option value="food">FOOD</option>
        </select>
        </div>
        <button v-on:click.prevent="register">REGISTER</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      name:'',
      lastname:'',
      email:'',
      password:'',
      confirmpassword:'',
      date:'',
      seen:true,
      select:'',
      contactnumber:null,
      selectedvalue:'',
      gender:'',
      interest:'',
      profiletype:''

    };
  },
  methods:{
    disable(event){
        this.seen=!this.seen
        window.console.log(event.target.value)
        this.selectedvalue=event.target.value

        window.console.log("inside disable function")
        // this.seen=false   
   },
   register(){
     window.console.log(this.selectedvalue)
        window.console.log("inside second register page")
      // window.console.log("fblogin  ",credentials)  
      //to paras
        axios.post('http://172.16.20.32:8080/role/updateRole',
        {
          "channel_channel_id" :1,
          "role" : this.selectedvalue

        },{ headers:{"authorization":localStorage.getItem('accessToken')}})
        .then(response=>{
          window.console.log('response',response)
          
          
        })

      .catch(error => {
        window.console.log(error)
      })

      //to vanik
       axios.post('http://10.177.68.178.:8082/user/editDetails',
        {
          "userName":this.name,
          "gender":this.gender.value,
          "email":this.email,
          "DOB":this.date,
          "mobileNumber":this.contactnumber,
          "interests":this.interest.value,
          "profileType":this.select.value,
          "displayType":this.profiletype
        },{ headers:{"Auth":localStorage.getItem('accessToken')}})
        .then(response=>{
          window.console.log('response',response)
          
          
        })

      .catch(error => {
        window.console.log(error)
      })

    },


  }
};
</script>
<style scoped>
.inputfield{
  height:50px;
}
h1 {
  margin: 0 auto;
  background-color: #3B5998;
  width: 680px;
  color: white;
}
.register {
  width: 38%;
  margin: 0 auto;
  border: 2px solid black;
  padding: 5%;
  font-family: sans-serif;
}
input ,select{
  height:30px;
  float:right;
  width:250px;
  margin-right:30px;
}
button {
  width: 200px;
  border-radius: 50px;
  height: 30px;
  background-color: #3B5998;
  color: white;
  font-size: 20px;
  margin: 30px;
}
label {
  float:left;
  font-size:15px;
  font-family: sans-serif;
}
</style>