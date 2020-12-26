<template>
  <div class="register-container d-flex text-center col-lg-6 col-lg-offset-6">
    <div class="form-group w-50 ">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider name="firstname" rules="required" v-slot="{ errors }">
            <input class="form-control mb-2" type="text" placeholder="fiestname" v-model="user_data.firstname">
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider name="lastname" rules="required" v-slot="{ errors }">
            <input class="form-control mb-2" type="text" placeholder="lastname" v-model="user_data.lastname">
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <input class="form-control mb-2" type="email" placeholder="email" v-model="user_data.email">
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider name="password" rules="required|min:6" vid="pass" v-slot="{ errors }">
            <input class="form-control mb-2" type="password" placeholder="password" v-model="user_data.password">
            <span>{{ errors[0] }}</span>
          </ValidationProvider>

         <ValidationProvider name="confirm_password" rules="required|confirmed:pass" v-slot="{ errors }">
           <input class="form-control mb-2" type="password" placeholder="confirm_password" v-model="user_data.confirm_password">
           <span>{{ errors[0] }}</span><br>
         </ValidationProvider>

          <button class="btn btn-primary" @click="signUp">SignUp</button>
        </form>
      </ValidationObserver>

    </div>

  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      user_data: {}
    }
  },
  methods: {
    onSubmit () {
      console.log ('Form has been submitted!');
    },
    signUp() {
      console.log(this.user_data)
      this.axios.post( 'http://127.0.0.1:8000/api/auth/signup', this.user_data)
        .then(res => {
          this.$router.push('/login');

        })
        .catch(err=>{
          alert("error register" . err);
          // console.log(err.response.data)
        })

    }
  }
}
</script>

<style scoped>
.register-container{
  margin: 80px auto;
}

</style>
