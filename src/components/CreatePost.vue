<template>
    <div class="writepost">
        <div class="postheading">
            Write Post
        </div>
        <div class="insidecreatepost">
            <input v-model="uploadtextcontent"   class="inputbox" type="text" placeholder="        Write Something here.....">
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

    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name:'Upload',
    data(){
        return{
            imageData: null,
            picture: null,
            uploadValue: 0,
            uploadtextcontent:null
        }
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
          this.$store.state.uploadtext=this.uploadtextcontent
          this.$store.dispatch('sendPostDetails')
        });
      }
      );
    }

  }
}
</script>

<style scoped>
.writepost{
    border-radius: 20px;

}
.postheading{
    /* border-radius: 20px; */
    background-color: #3b5998;
    color:white;

}
.inputbox{
    width:99%;
    /* border-radius: 20px; */
    height:50px;
    font-size: 20px;
    background-color: rgb(230, 225, 220);
}

</style>