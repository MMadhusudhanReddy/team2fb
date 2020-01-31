<template>
  <div class="Friends">
      <div class="mutualfriendsheading">Friends</div>
    <div v-for="items in profiles" :key="items">
      <table>
        <tr>
          <td>
            <img v-bind:src="items.image" class="image" />
          </td>
          <td>&nbsp;&nbsp;&nbsp;
              {{items.name}}
          </td>
        </tr>
      </table>
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
    };
  }
};
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
  width:30%;
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