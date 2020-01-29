<template>
    <div class="Myprofile">
        <img :src="profileimage" alt="img" height="100" width="100">
        <br><br><br>
        <br>
        <div class="fields">
            <label>NAME</label>
            <input type="text" placholder="name" v-model="name" class="editable">
        </div>
        <div class="fields">
            <label>DOB</label>
            <input type="Date" v-model="date" class="editable">
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
            <span>{{Email}}</span>
        </div>
        <div class="fields">
            <label>GENDER</label>
            <span>{{gender}}</span>
        </div>
        <div class="fields">
            <label>MOBILE NUMBER</label>
            <input type="number" placeholder="number" class="editable">
        </div>
        <div class="fields">
            <label>PROFILE TYPE</label>
            <span>{{profiletype}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          name:'',
          Email:'kamalrajmayakuntla@gmail.com',
          gender:'Male',
          profiletype:'public',
          profileimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2SYQzKh19n2C5VP1AkWYgk17RtmiilqMr_MEBSN9T85k3S77i',
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
  margin: 0 auto;
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
</style>