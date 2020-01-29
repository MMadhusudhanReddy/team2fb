<template>
<!-- SEND TO PARAS -->
<div>
  <h1>LOGIN</h1>
  <div class="login">
   <form>
     <label>
    USER NAME:
     </label>
    <input type="text" placeholder="USERNAME/EMAIL" v-model="Username" required><br><br>
    <label>
     PASSWORD:
    </label>
     <input type="password" placeholder="PASSWORD" v-model="Password" required><br><br>
     <div class="buttonsclass">
        <button>LOGIN</button>
        <button>Register</button>
     </div>
     <!-- <a href="#">
       <router-link to="/Register">REGISTER</router-link></a> -->
   </form>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      Username:'',
      Password:''
    }
  }
}
</script>
<style scoped>
h1{
  margin:0 auto;
  background-color:#3b5998;
  width:40.5%;
  color:white;
}
.login{
  width:30%;
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