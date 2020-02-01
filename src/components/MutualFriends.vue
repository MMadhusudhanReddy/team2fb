<template>
  <div class="Friends">
      <div class="mutualfriendsheading">Friends
        <div v-for="(items) in friends" :key="items">
            <div style="display:flex;flex-direction:row;border:1px solid black;justify-content:space-between;padding:5%;">
                <div>
                    <img v-bind:src="items.imageUrl" class="image" />

                </div>
                <div>
                    {{items.userName}}

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
  height: 100px;
  width: 100px;
  border-radius: 50%;
  float:left;
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
</style>