<template>
<div class="BusinessPage">
    <div class="top">
       <input type="text"  placeholder="      search...." class="search">
    </div>
      <div class="side">
          <span>Create a page</span><br>
          <input type="text" paceholder="create a page" class="createpage">
          <br>
          <br>
          CATEGEORIES:
          <select>
              <option>CATEGEORY1</option>
              <option>CATEGEORY2</option>
              <option>CATEGEORY3</option>
          </select>
      </div>
    </div>
</template>
<script>
export default {
    name:'BusinessPage',
    data(){
        return{
        }
    }
}
</script>
<style scoped>
.top{
    height:200px;
}
.search{
    width:50%;
    height:50px;
    border-radius:10px;
    font-size:20px;
}
.side{
    float:left;
    font-size:20px;
    width:100%;
}
.createpage{
    width:50%;
    height:30px;
    border-radius:10px;
}
</style>