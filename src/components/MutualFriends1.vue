<template>
  <div class="Friends">
      <div class="mutualfriendsheading">Friends
        <div v-for="(items,index) in friends" :key="index">
            <div v-on:click="search(index)"  style="display:flex;flex-direction:row;border:1px solid black;justify-content:space-between;padding:5%;">
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
import axios from "axios";
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
//   created(){
//     this.$store.dispatch("getFriends",this.$route.params.userId)

//   },
  computed:{
      friends(){
          return this.$store.state.searchdetails
      }

  },
  methods:{
    search(index){
        window.console.log("search details",this.$store.state.searchdetails)
        window.console.log('index',index)
        window.console.log('user id in search method',this.$store.state.searchdetails[index].userId)
        window.console.log('user id from local storage ',localStorage.getItem('userId'))
        this.$store.state.index=index



        //to aman for post reaction

        axios.post('http://172.16.20.33:8080/search/save',
              {
                "targetId":this.$store.state.searchdetails[index].userId,
                "action":"pageview",
                "appId":"facebook",
                "userId":localStorage.getItem('userId'),
                "targetEntity":"profile",
                "tag":"others"

              },)
              .then(response=>{
                window.console.log('aman response',response)
                // localStorage.setItem('userId',response.data.data.userId)
                // this.$router.push('/landing/'+localStorage.getItem('userId')+"")
                
                
              })

            .catch(error => {
              window.console.log(error)
            })







        if(this.$store.state.searchdetails[index].userId===localStorage.getItem('userId'))
        {
            this.$router.push('/timeline/'+localStorage.getItem('userId')+'')

        }
        else
        {

            localStorage.setItem('friendId',this.$store.state.searchdetails[this.$store.state.index].userId)

            this.$router.push('/friendtimeline/'+this.$store.state.searchdetails[this.$store.state.index].userId+'')

        }
        

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