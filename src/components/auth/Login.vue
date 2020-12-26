<template>
  <div class="login-container d-flex text-center col-lg-6 col-lg-offset-6">
    <div class="form-group w-50">
      <ValidationObserver>
        <form>
          <ValidationProvider name="email" rules="required|email" v-slot=" { errors}">
            <input class="form-control mb-2" type="email" placeholder="email" v-model="user_data.email">
            <span> {{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider name="password" rules="required|min:6" v-slot=" { errors}">
            <input class="form-control mb-2" type="password" placeholder="password" v-model="user_data.password">
            <span> {{ errors[0] }}</span><br>
          </ValidationProvider>

          <button class="btn btn-primary" @click="login">Login</button>
        </form>
      </ValidationObserver>

    </div>

  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
       user_data: {}
    }
  },
  methods:{
    login(){

      this.axios.post('http://127.0.0.1:8000/api/auth/login', this.user_data)
        .then(res =>{
          localStorage.setItem('access_token', res.data.access_token);

           this.storeUser();
           console.log(res)
        })
        .catch(err=>{
          console.log(err);
          alert(err )
        })
    }
  }

}
</script>

<style scoped>
.login-container{
  margin: 80px auto;
}


</style>
