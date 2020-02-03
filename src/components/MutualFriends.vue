<template>
  <div class="Friends">
      <div class="mutualfriendsheading">Friends
        <div v-for="(items) in friends" :key="items">
            <div class="friendList">
                <div>
                    <img v-bind:src="items.imageUrl" class="image" />
                </div>
                <div class="data">
                    {{items.userName}}
                    <button class="dataButton">Following</button>
                </div>
            </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profiles: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa7q8XhBB5inHO3kZa7CMM3NLEnAiVmgxTChTdxorZeVPQRRPu",
          name: "SOHAIL"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa7q8XhBB5inHO3kZa7CMM3NLEnAiVmgxTChTdxorZeVPQRRPu",
          name: "NAVEEN"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa7q8XhBB5inHO3kZa7CMM3NLEnAiVmgxTChTdxorZeVPQRRPu",
          name: "PRAVEEN"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa7q8XhBB5inHO3kZa7CMM3NLEnAiVmgxTChTdxorZeVPQRRPu",
          name: "PRAVEEN"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa7q8XhBB5inHO3kZa7CMM3NLEnAiVmgxTChTdxorZeVPQRRPu",
          name: "NAVEEN"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa7q8XhBB5inHO3kZa7CMM3NLEnAiVmgxTChTdxorZeVPQRRPu",
          name: "SOHAIL"
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa7q8XhBB5inHO3kZa7CMM3NLEnAiVmgxTChTdxorZeVPQRRPu",
          name: "ANSH"
        }
      ]
    }
  },
  created(){
    this.$store.dispatch("getFriends",localStorage.getItem('userId'))
  },
  computed:{
      friends(){
          return this.$store.state.searchdetails
      }
  },
  methods:{
        search(index){
        window.console.log(index)
        this.$store.state.index=index
        this.$router.push('/friendtimeline/'+this.$store.state.searchdetails[this.$store.state.index].userId)
      },
}
}
</script>
<style scoped>
.image
{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  float:left;
  margin: auto auto;
}
.Friends {
  font-family: sans-serif;
  font-size: 20px;
  /* margin:auto; */
  width:100%;
}
table {
  border : 1px solid black;
  width: 400px;
  padding:10px;
}
td{
    text-align:center;
}
.mutualfriendsheading{
    /* text-align:center; */
    font-size: 20px;
    /* display:flex;
    justify-content:center;
    flex-direction:row; */
}
.friendList
{
  display:flex;
  flex-direction:row;
  border:1px solid lightgrey;
  justify-content:space-between;
  padding:5%;
  margin: auto auto;
  border-radius: 20px;
}
.data
{
  margin: auto auto;
}
.dataButton
{
  background-color: whitesmoke;
  border: 1px solid lightgrey;
  border-radius: 50px;
}
</style>