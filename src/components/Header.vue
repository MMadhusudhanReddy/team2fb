<template>
    <div class="header">
        <div class="headercomponents">
            <i class="fab fa-facebook-square" style="font-size: 50px;color:white;margin-left:3%;"></i>
            <div class="home">
                Home
            </div>
            <div class="search">
                <input type="text" style="height:50%;margin:auto;border-radius:10px;width:100%;text-align:center;font-size:15px;" placeholder="search">
            </div>
            <!-- <div class="profile">
                <i class="fas fa-user" style="font-size:30px;color:white;margin-left:3%;"></i>
            </div> -->
            <div class="notification">
                <i class="far fa-bell" style="font-size:30px;color:white;"></i>
            </div>
            <div class="signout">
                <i class="fas fa-sign-out-alt" style="font-size:30px;color:white;"></i>
            </div>

        </div>
        
            
    </div>
</template>

<style scoped>
.header{
    background-color: #3b5998;
    width: 100%;
    height: 50px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1%;
}
.search-bar {
  margin-top: 11px;
  margin-left: 32px;
  width: 25%;
}
.headercomponents{
    display: flex;
    margin-left:1%;
    width:100%;
    justify-content: space-between;
}
.home{
    color: white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left:3%;
    margin-right: 3%;
}
.search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
}
.profile{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 3%;
}
.notification{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3%;
    margin-right: 3%;
}
.signout{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 3%;
}
</style>