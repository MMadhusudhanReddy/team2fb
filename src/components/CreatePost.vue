<template>
<div class="writepost">
    <div class="postheading">Write Post</div>
    <div class="insidecreatepost">
      <input v-model="uploadtextcontent" class="inputbox" type="text" placeholder="Write Something here..." />
      <div v-if="imageData!=null" class="picture">
        <img class="preview" :src="picture" style="width:300px;height:150px" />
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01" @click="onUpload">Post</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputFile"  @change="previewImage" accept="image/*" />
          <label class="custom-file-label" for="inputFile">Choose file</label>
        </div>
      </div>
    </div>
  </div>









    <!-- <div class="writepost">
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

    </div> -->
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

.writepost {
  border-radius: 20px;
  font-family: inherit;
  text-align: left;
}
.postheading {
  /* border-radius: 20px; */
  background-color: #3b5998;
  color: white;
  padding: 5px;
  padding-left: 15px;
}
.inputbox {
  width: 95%;
  /* border-radius: 20px; */
  height: 50px;
  font-size: 20px;
  background-color: white;
  padding: 10px;
  border: none;
  margin: 15px;
  border-bottom: 1px solid lightgray;
}
.addfile {
  margin: 15px;
}
input:focus {
  outline: none;
}
.uploadbutton {
  border: none;
}
.picture {
  text-align: center;
  margin: 10px auto;
  width:300px;
  height:150px;
}
.input-group-prepend
{
  margin: 10px 15px;
  border: none;
}
.custom-file
{
  margin-top: 10px; 
  border: none;
  margin-right: 15px; 
}












/* 
.writepost{
    border-radius: 20px;

}
.postheading{
    background-color: #3b5998;
    color:white;

}
.inputbox{
    width:99%;
    height:50px;
    font-size: 20px;
    background-color: rgb(230, 225, 220);
} */

</style>