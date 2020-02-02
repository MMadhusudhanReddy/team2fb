<template>
<!-- SEND TO PARAS -->
<div class="fbloginclass">
  <h1>LOGIN</h1>
  <div class="login">
   <form>
     <label>
      E-mail:   
     </label>
    <input  type="text" placeholder="USERNAME/EMAIL" v-model="Username" required>
    <label>
     PASSWORD:
    </label>
     <input type="password" placeholder="PASSWORD" v-model="Password" required><br><br>
     <div class="buttonsclass">
        <button v-on:click.prevent="login">LOGIN</button>
        <button v-on:click="register">Register</button>
     </div>
     <!-- <a href="#">
       <router-link to="/Register">REGISTER</router-link></a> -->
   </form>
  </div>
</div>
</template>
<script>

import axios from "axios";

export default {
  data(){
    return{
      Username:'',
      Password:''
    }
  },
  methods:{
      //   login(){
      //     this.$store.dispatch('userfblogin',{
      //       email:this.Username,
      //       password:this.Password,
      //     })
      //     // eslint-disable-next-line no-unused-vars
      //     .then(response => {
      //       window.console.log('response in login page',  response)
      //     })
         
      // }


      login(){
        window.console.log("inside login page")
      // window.console.log("fblogin  ",credentials)
      axios.post('http://172.16.20.32:8080/auth/signin',{
        email :this.Username,
        password:this.Password,
      })
      .then(response=>{
        window.console.log('response',response)
        window.console.log("inside second response")
        this.$store.state.accesstoken="Bearer "+response.data.accessToken
        axios.post('http://172.16.20.32:8080/jwt/getUserDetails',
        {
          "provider": 1

        },{ headers:{"authorization":this.$store.state.accesstoken}})
        .then(response=>{
          window.console.log('second response',response)
          localStorage.setItem('userId',response.data.id)
          localStorage.setItem('accessToken',this.$store.state.accesstoken)
          localStorage.setItem('name',response.data.name)
          localStorage.setItem('email',response.data.email)




          //to aman

            axios.post('http://172.16.20.33:8080/search/save',
              {
                "targetId":null,
                "action":"login",
                "appId":"facebook",
                "userId":localStorage.getItem('userId'),  
                "targetEntity":null,
                "tag":null

              },)
              .then(response=>{
                window.console.log('aman response',response)
                // localStorage.setItem('userId',response.data.data.userId)
                // this.$router.push('/landing/'+localStorage.getItem('userId')+"")
                
                
              })

            .catch(error => {
              window.console.log(error)
            })









          if(response.data.role==null)
          {
            this.$router.push('/register')
          }
          else{
            this.$router.push('/landing/'+localStorage.getItem('userId'))

          }
          
        })


      })
      .catch(error => {
        window.console.log(error)
      })


      


    },
    register()
    {
      this.$router.push('/commonregister')
    }










}
}
</script>
<style scoped>
.fbloginclass{
  width:40%;
  margin:auto;
  margin-top:5%;

}
h1{
  margin:0 auto;
  background-color:#3b5998;
  width: 100%;
  color:white;
}
.login{
  width:100%;
  margin:0 auto;
  border:2px solid black;
  padding:5%;
  font-family:sans-serif;
}
input{
  width:200px;
  height:30px;
}
button{
  width:200px;
  border-radius:50px;
  height:30px;
  background-color:#3b5998;
  color:white;
  font-size:20px;
  margin:30px;
}
.buttonsclass{
    display: flex;

}
label{
  padding:30px;
}
</style>