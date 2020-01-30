<template>
  <div>
    <h1>REGISTER</h1>
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
            <label>MOBILE NUMBER</label>
            <input type="number" placeholder="CONTACT" v-model="email" required/><br><br>
        </div>
        <div class="inputfield">
          <label>GENDER</label>
          <select>
            <option>MALE</option>
            <option>FEMALE</option>
          </select>
        </div>
        <div class="inputfield">
        <label>DOB:</label>
        <input type="date" v-model="date" required><br><br>
        </div>
        <div class="inputfield">
        <label>ROLE</label>
        <select @change="disable($event)">
          <option selected value="user">USER</option>
          <option value="business" >BUSINESS </option>
        </select><br><br>
        </div>
        <div class="inputfield">
        <label>PROFILE TYPE</label>
        <select id="typed">
          <option selected value="public">PUBLIC</option>
          <option v-if="seen" value="private">PRIVATE</option>
        </select><br><br>
        </div>
        <div class="inputfield">
        <label>INTERESTS</label>
        <select>
          <option selected>SPORTS</option>
          <option>BOLLYWOOD</option>
          <option>LIFE STYLE</option>
          <option>TECHNOLOGY</option>
          <option>FOOD</option>
        </select>
        </div>
        <button>REGISTER</button>
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
      seen:true
    };
  },
  methods:{
    disable(){
        this.seen=!this.seen
        window.console.log("inside disable function")
        // this.seen=false

        
      
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