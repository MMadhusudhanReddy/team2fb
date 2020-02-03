<template>
  <div>
    <div class="parentregister">
    <h1>REGISTER</h1>
    <div class="register">
      <form>
          <div>
               <div >
                <p>Upload an image to Firebase:</p>
                <input type="file" @change="previewImage" accept="image/*" >
              </div>
              <div>
                <p>Progress: {{uploadValue.toFixed()+"%"}}
                <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
              </div>
              <div v-if="imageData!=null">
                  <img class="preview" :src="picture" style="width:200px;height:100px">
                  <br>
                <button @click="onUpload">Upload</button>
              </div>

          </div>
          <div class="inputfield">
              <label>MOBILE NUMBER</label>
              <input type="number" placeholder="CONTACT" v-model="contactnumber" required/><br><br>
          </div>
          <div class="inputfield">
            <label >GENDER</label>
            <select v-model="gender"  >
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
            <select v-model="selected" @change="disable($event)">
              <option selected value="personal">personal</option>
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

    </form>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase';
export default {
  name:'Upload',
  data() {
    return {
      name:'',
      lastname:'',
      email:'',
      password:'',
      confirmpassword:'',
      date:'',
      seen:true,
      selected:'personal',
      contactnumber:null,
      selectedvalue:'',
      gender:'male',
      interest:'sports',
      profiletype:'public',
      imageData: null,
      picture: null,
      uploadValue: 0,
      uploadtextcontent:null

    };
  },
  methods:{
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{window.console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          window.console.log('picture',this.picture)
          this.$store.state.uploadimageurl=this.picture
          localStorage.setItem('dp',this.picture)
          this.$store.dispatch('sendPostDetails')
        });
      }
      );
    },


    disable(event){
        this.seen=!this.seen
        // this.selected=event.target.value
        window.console.log(this.selected)
        window.console.log("gender",this.gender)
        this.selectedvalue=event.target.value

        window.console.log("inside disable function")
        // this.seen=false   
   },
   register(){
     window.console.log(this.selected)
     window.console.log("userName from local storage",localStorage.getItem('name'))
          window.console.log("gender",this.gender)
          window.console.log("email from local storage",localStorage.getItem('email'))
          window.console.log("DOB",this.date.toString())
          window.console.log("mobileNumber",this.contactnumber)
          window.console.log("interests",this.interest)
          window.console.log("profileType",this.selected)
          window.console.log("displayType",this.profiletype)
        window.console.log("inside second register page")
      // window.console.log("fblogin  ",credentials)  
      //to paras
        axios.post('http://172.16.20.32:8080/role/updateRole',
        {
          "channel_channel_id" :1,
          "role" : this.selected

        },{ headers:{"authorization":localStorage.getItem('accessToken')}})
        .then(response=>{
          window.console.log('response',response)
          
          
        })

      .catch(error => {
        window.console.log(error)
      })

      //to vanik
       axios.post('http://172.16.20.180:8082/user/editDetails',
        {
          "imageUrl":localStorage.getItem('dp'),
          "userName":localStorage.getItem('name'),
          "gender":this.gender,
          "email":localStorage.getItem('email'),
          "DOB":this.date.toString(),
          "mobileNumber":this.contactnumber,
          "interests":[this.interest],
          "profileType":this.selected,
          "displayType":this.profiletype,
          "friendIds":[""],
          "pendingFriendIds":[""]
        },{ headers:{"Auth":localStorage.getItem('accessToken')}})
        .then(response=>{
          window.console.log('response',response.data.data.userId)
          localStorage.setItem('userId',response.data.data.userId)
          this.$router.push('/landing/'+localStorage.getItem('userId')+"")
          
          
        })

      .catch(error => {
        window.console.log(error)
      })



      //to aman

      axios.post('http://172.16.20.33:8080/search/register',
        {
          "userId":localStorage.getItem('userId'),
          "action":"register",
          "appId":"facebook",
          "tag":[this.interest]

        },)
        .then(response=>{
          window.console.log('response from aman',response)
          
          
          
        })

      .catch(error => {
        window.console.log(error)
      })



      

    },


  }
};
</script>
<style scoped>
.parentregister{
  width:40%;
  margin:auto;
}

.inputfield{
  height:50px;
}
h1 {
  margin: 0 auto;
  background-color: #3B5998;
  width: 100%;
  color: white;
}
.register {
  width: 100%;
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