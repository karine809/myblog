<template>
<div class="allblogs-container">
  <h1> All Blogs</h1>
  <table class="table">
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Name</th>
      <th>Description</th>
      <th></th>
    </tr>
    <tr v-for="post in posts" :key="post.id">
      <td>{{ post.id}}</td>
      <td>{{ post.title}}</td>
      <td>{{ post.name}}</td>
      <td style="min-width: 400px">{{ post.description}}</td>
      <td><button @click="deletePost(post.id)">Delete</button></td>
    </tr>
  </table>

</div>
</template>

<script>
export default {
  name: "AllBlogs",
    data(){
        return{
          posts: {}
        }
      },
      mounted() {
        this.getAllPosts()
      },
  methods: {
    getAllPosts(){
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.post('http://127.0.0.1:8000/api/auth/admin/allblogs', null, {
        headers: {
          'Authorization': token
        }
      })
        .then(res => {
          this.posts=res.data
        })
        .catch(err => {
          alert("error posts". err)
        })
    },
    deletePost(post_id){
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.get(`http://127.0.0.1:8000/api/auth/deleteblog/${post_id}`, {
        headers: {
          'Authorization': token
        }
      })
        .then(res => {
          this.posts = this.posts.filter(post => post.id !== post_id)
        })
        .catch(err => {
          alert("error delete" . err)
        })
    }

  }
}
</script>

<style scoped>
.allblogs-container{
  margin: 60px;
}
</style>
