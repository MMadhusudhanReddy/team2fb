<template>
  <div>
    <h1 style="width:48.5%;margin-top:2%;">REGISTER</h1>
    <div class="register">
      <form>
          <div>
        <div class="inputfield">
            <label>NAME:</label>
            <input type="text" placeholder="NAME" v-model="firstname"
            required/><br><br>
        </div>
        <div class="inputfield">
            <label>E-MAIL:</label>
            <input type="email" placeholder="E-mail" v-model="email" required/><br><br>
        </div>
        <div class="inputfield">
            <label>PASSWORD:</label>
            <input type="number" placeholder="PASSWORD" v-model="email" required/><br><br>
        </div>
        <router-link to="/Register"><button>CONTINUE</button></router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      confirmpassword:'',
      date:'',
    };
  },
  methods:{
    disable:function(){
      return document.getElementById('typed').options[1].disabled= true;
    }
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