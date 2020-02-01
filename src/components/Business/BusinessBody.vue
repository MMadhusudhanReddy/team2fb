<template>
<div class="BusinessBody">
    <!-- <div class="top">
       <input type="text"  placeholder="      search...." class="search">
    </div> -->
       <h2>Create a Page</h2>
       <p>Connect your business,your cause to the worldwide community of people on Facebook. choose a Page category.</p>
      <div class="side">
          <!-- <span class="page">Create a page</span><br> -->
        <label>PAGE NAME</label>
          <input type="text" placeholder="         create a page" class="createpage">
          <br><br>
          <label>CATEGEORIES:</label>
          <select>
              <option selected>SPORTS</option>
              <option>BOLLYWOOD</option>
              <option>LIFE STYLE</option>
              <option>TECHNOLOGY</option>
              <option>FOOD</option>
          </select>
          <br>
          <br>
          <router-link to="/BusinessPages"><button>CREATE</button></router-link>
      </div>
    </div>
</template>
<script>
export default {
    name:'BusinessBody',
    data(){
        return{
        }
    }
}
</script>
<style scoped>
h1{
    margin-left:30px;
}
.BusinessBody{
    /* font-size: 30px; */
    font-family: sans-serif;
}
.side{
    float:left;
    font-size:20px;
    height:400px;
    border:2px solid black;
    box-shadow:6px 8px 10px 2px black;
    width:60%;
    margin-top:80px;
    margin-left:300px;
}
select{
    width:30%;
    height: 50px;
}
.createpage{
    width:70%;
    height:60px;
    border-radius:10px;
    margin:50px;
}
button{
    background-color: #3B5998;
    width:200px;
    height:40px;
    border-radius:20px;
    color:white;
    font-size:20px;
}
/* .page{
background: #3B5998;
} */
</style>