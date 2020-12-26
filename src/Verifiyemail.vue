<template>
  <div class="verifiyemail-container">
        {{emailVerification()}}
      <h1 v-if="email_validate===1">Token verifed successfully</h1>
      <h1 v-if="email_validate===0"> Invalid token</h1>
  </div>
</template>

<script>
export default {
  name: "Verifiyemail",
  data(){
    return{
      token_data:{
        token:null
      },
      email_validate: null
    }
  },
  methods: {
    emailVerification(){
      this.token_data.token=this.$route.query.token;

      this.axios.post('http://127.0.0.1:8000/api/auth/verifiyemail', this.token_data)
        .then(res =>{
          this.email_validate = 1
        })
        .catch(err=>{
          this.email_validate = 0
        })
    }
  }
  }
</script>

<style scoped>
.verifiyemail-container{
  margin: 100px;
  position: absolute;
}
</style>
