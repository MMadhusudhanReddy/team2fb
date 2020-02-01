<template>
  <div class="BusinessSidebar">
    <div>
      <p>
        <!-- Progress: {{uploadValue.toFixed()+"%"}} -->
        <progress
          id="progress"
          :value="uploadValue"
          max="100"
        ></progress>
      </p>
    </div>
    <div class="Addimage">
      <div v-if="imageData!=null">
        <img class="preview" :src="picture" />
        <br />
      </div>
    </div>
    <button @click="onUpload">Upload</button>
    <input type="file" @change="previewImage" accept="image/*" />
    <br><br>
    <p>Categeory Name</p>
    <p>@username</p>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "BusinessSidebar",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          window.console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            this.$store.state.image=this.picture;
            window.console.log(this.picture)
            
          });
        }
      );
    }
  }
};
</script>
<style scoped>
.BusinessSidebar {
  float: left;
  position: fixed;
}
.Addimage {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right:20px;
  margin-top: 50px;
  box-shadow: 5px 5px 5px 5px grey;
}
img.preview {
    width: 250px;
    height:250px;
    border-radius:50%;
}
progress{
  display: none;
}
</style>