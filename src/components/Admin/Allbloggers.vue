<template>
  <div class="allbloggers-container">
    <h1> All Bloggers</h1>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th width="300px">Status</th>
      </tr>
      <tr  v-for="blogger in bloggers" :key="blogger.id">
        <td>{{ blogger.id}}</td>
        <td>{{ blogger.firstname}}</td>
        <td>{{ blogger.lastname}}</td>
        <td>{{ blogger.email}}</td>
        <td><button v-if="!blogger.user_locked" @click="lock(blogger)">Lock</button><button v-else @click="unlock(blogger)">UnLock</button></td>
      </tr>
    </table>


  </div>
</template>

<script>
export default {
  name: "Allbloggers",
    data(){
      return {
          bloggers: {}
        }
    },
  mounted() {
    this.getBloggers()
  },
  methods: {
    getBloggers(){
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.post('http://127.0.0.1:8000/api/auth/admin/allbloggers', null, {
        headers: {
          'Authorization': token
        }
      })
        .then(res => {
          this.bloggers=res.data
        })
        .catch(err => {
          alert("error bloggers". err)
        })
    },
    lock(blogger){
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.post(`http://127.0.0.1:8000/api/auth/lockuser/${blogger.id}`, this.bloggers,{
        headers: {
          'Authorization': token
        }
      })
        .then(res=>{
          console.log(res)
          blogger.user_locked = !blogger.user_locked
        })
        .catch(err=>{
          alert("error save" . err)
        })

    },
    unlock(blogger){
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.post(`http://127.0.0.1:8000/api/auth/unlockuser/${blogger.id}`, this.bloggers,{
        headers: {
          'Authorization': token
        }
      })
        .then(res=>{
          console.log(res)
          blogger.user_locked = !blogger.user_locked

        })
        .catch(err=>{
          alert("error save" . err)
        })
    }

  }
  }
</script>

<style scoped>
.allbloggers-container{
  margin: 60px;
}
</style>
