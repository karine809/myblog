<template>
  <div class="myblog-container" >
    <div class="d-flex justify-content-between">
      <h1>My blog</h1>
      <router-link to="/blogger/myblogs"> <button class="btn btn-primary">Back</button></router-link>
    </div>
    <p> <b>ID:</b>{{ post.id}}</p>
    <p> <b>Title:</b>{{ post.title}}</p>
    <p> <b>Name:</b>{{ post.name}}</p>
    <p><b>Description:</b>{{ post.description}}</p>
  </div>
</template>

<script>


export default {
name: "Myblog",
  data(){
    return{
      post: {},
      post_id:''
    }
  },
  mounted() {
      this.getMyPost()
  },
  methods: {
    getMyPost: function () {
      this.post_id =this.$route.query.post_id;
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.post(`http://127.0.0.1:8000/api/auth/myblog/${this.post_id}`, null, {
        headers: {
          'Authorization': token
        }
      })
        .then(res => {
          this.post = res.data
        })
        .catch(err => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>
.myblog-container{
  margin: 60px;
}
b{
  padding: 0 20px 0 0;
}
</style>
