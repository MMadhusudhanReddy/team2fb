<template>
  <div>
    <div v-for="(ad,index) in ads" v-bind:key="index">
      <div @click="redirectAd(ad.targetUrl)" class="ad">
        <img v-bind:src="ad.imageUrl" style="width:100%;" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      
    };
  },
  created() {
      this.$store.dispatch('getAds')
  },
  computed:{
      ads(){
          return this.$store.state.ads

      }
  },
  methods:{
      redirectAd(targetUrl){
          window.open(targetUrl,'_blank')
      }
  }
};
</script>

<style scoped>
.ad {
  margin-bottom: 2%;
}
</style>

