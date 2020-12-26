<template>
  <div class="blogger-containenr">
  <router-link to="/blogger/newblog"><button>Create New Blog</button></router-link>
   <h1>My Blogs page</h1>
   <input type="text" placeholder="search" v-model="search_text" width="400px"><button @click="getPost">Search</button>
      <table class="table">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Name</th>
          <th>Description</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id}}</td>
          <td>{{ post.title}}</td>
          <td>{{ post.name}}</td>
          <td style="min-width: 400px">{{ post.description}}</td>
          <td><router-link :to="{path:'/blogger/myblog?post_id=' + post.id }"><button>Show</button></router-link></td>
          <td><button @click="editPost(post.id)">Edit</button></td>
          <td><button @click="deletePost(post.id)">Delete</button></td>
        </tr>
      </table>

    <div v-if="modal" class="new-modal">
      <div class="new-close">
        <span @click="modal=false">X</span>
      </div>
      <div class="body">
        <span>Title</span>
        <input type="text" v-model="current_post.title" class="form-control mb-2">
        <span>Name</span>
        <input type="text" v-model="current_post.name" class="form-control mb-2">
        <span>Description</span>
        <input type="text" v-model="current_post.description" class="form-control mb-2">

        <button @click="savePost(current_post.id)">Save</button>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Blogger",
    data(){
      return{
        posts: {},
        current_post: {},
        search_text: '',
        post_data: {},
        modal: false
      }
    },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost(){
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.post_data['search_text']=this.search_text
      this.axios.post('http://127.0.0.1:8000/api/auth/myblogs', this.post_data, {
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
    editPost(post_id){
      this.modal = true;
      this.current_post = this.posts.find(post => post.id === post_id);

    },
    savePost(current_post_id){
          this.modal=false

      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.post(`http://127.0.0.1:8000/api/auth/editblog/${current_post_id}`, this.current_post ,{
        headers: {
          'Authorization': token
        }
      })
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          alert("error save" . err)
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
.blogger-containenr{
  margin: 60px;
}
.new-modal{
  background-color: darkgray;
  margin: 60px auto;
  padding: 20px;
  border: 1px solid black;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 500px;
  width: 400px;

}
.new-close{
  justify-content: flex-end;
  align-items: center;
  display: flex;
  padding: 10px;
}
.new-close>span{
  cursor: pointer;
}
</style>
