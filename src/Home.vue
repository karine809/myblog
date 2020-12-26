<template>
<div class="home-container">
    <div class="home" v-if="$store.state.user == null">
      <h1>My home page</h1>
    </div>

  <div class="admin"v-if="$store.state.user !== null && $store.state.user.user_type==='SuperAdmin'" >
    <h1>Welcome Super Admin page</h1>
  </div>

  <div class="blogger" v-if="$store.state.user !== null && $store.state.user.user_type==='blogger'">
    <h1> Welcome blogger's page</h1>
  </div>

</div>
</template>

<script>
export default {
  name: "Home",
    data(){
      return{}
      },
    methods: {

    }
}
</script>

<style scoped>
.home-container{
  margin: 60px;
}


</style>
