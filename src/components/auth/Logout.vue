<template>
  <div>
      {{ logout() }}
  </div>
</template>

<script>
export default {
  name: "Logout",
    data(){
      return{}
      },
     methods: {
      logout(){
        const token = `Bearer ${localStorage.getItem('access_token')}`;
        this.axios.post('http://127.0.0.1:8000/api/auth/logout', null, {
          headers: {
            'Authorization': token
          }
        })
        .then(()=>{
          localStorage.removeItem('user');
          localStorage.removeItem('access_token');
          this.$store.commit('setUser', null);
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
