<template>
<div class="newblog-container">
<h1> Create New Blog</h1>
  <input class="form-control mb-2 " type="text" placeholder="title" v-model="posts.title">
  <input class="form-control mb-2 " type="text" placeholder="name" v-model="posts.name">
  <input class="form-control mb-2" type="text" placeholder="description" v-model="posts.description">
  <input class="form-control mb-2" type="file" id="img" name="img"  v-on:change="onImageChange" accept="image/*" >
  <button class="btn btn-primary" @click="addPosts">Add</button>

</div>
</template>

<script>
export default {
name: "Newblog",
  data(){
  return{
    posts: {},
    blog_image: null
  }
  },

  methods: {
    addPosts() {
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.posts['photo']=this.blog_image;
      this.axios.post('http://127.0.0.1:8000/api/auth/newblog', this.posts, {
        headers: {
          'Authorization': token
        }
      })
        .then(res => {
          console.log(this.posts)
          this.$router.push('/blogger/myblogs')
        })
        .catch(err => {
          alert(err)
        })
    },
    onImageChange(e){
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      this.blog_image =files[0];
    }
  }
}
</script>

<style scoped>
.newblog-container{
  margin: 70px;
}

</style>
