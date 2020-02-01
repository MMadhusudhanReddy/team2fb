<template>
<div class="register">
  <div class="formclass">
    <h1 style="width:100%;margin-top:2%;">REGISTER</h1>
    <div class="register">
      <form>
          
        <div class="inputfield">
            <label>NAME:</label>
            <input type="text" placeholder="NAME" v-model="username" required><br><br>
        </div>
        <div class="inputfield">
            <label>E-MAIL:</label>
            <input type="email" placeholder="E-mail" v-model="email" required><br><br>
        </div>
        <div class="inputfield">
            <label>PASSWORD:</label>
            <input type="password" placeholder="PASSWORD" v-model="password" required><br><br>
        </div>
        <div style="width: 100%;text-align: center;display: flex;justify-content: center;">
          <input class="submit" type="submit" v-on:click.prevent="register" value="Register"> 
        </div>
        <!-- <router-link to="/Register"><button>CONTINUE</button></router-link> -->
        
      </form>
    </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      username:'',
      email:'',
      password:''

      
    };
  },
  methods:{
        register(){
          if(this.username!=null && this.email!=null &&this.password!=null)
          {
              window.console.log("inside register")
                axios.post('http://172.16.20.32:8080/auth/signup',{
                name:this.username,
                email :this.email,
                password:this.password
              })
              .then(response=>{
                window.console.log('response',response)
                this.$router.push('/fblogin')
              })
              
          }
          else
          {
            window.alert("One of the parameters is empty")

          }
          

        }
}
}
</script>
<style scoped>
.formclass{
  width:40%;
  margin:auto;
  margin-top:5%;
}
.inputfield{
  height:50px;
}
h1 {
  margin: 0 auto;
  background-color: #3B5998;
  width: 35.3%;
  margin-top: 2%;
  color: white;
}
.register {
    width: 100%;
    /* height: 40vh; */
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
.submit {
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