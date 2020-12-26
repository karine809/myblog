<template>
<div class="header-container">

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class=" nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item" >
          <router-link to="/signup" class=" nav-link">SignUp</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user !==null && $store.state.user.user_type==='SuperAdmin'">
          <router-link to="/admin/allbloggers" class=" nav-link">All Bloggers</router-link>
        </li>
        <li class="nav-item" v-if = "$store.state.user !== null && $store.state.user.user_type==='SuperAdmin'">
          <router-link to="/admin/allblogs" class=" nav-link">All Blogs</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.user !== null && $store.state.user.user_type==='blogger'" >
          <router-link to="/blogger/myblogs" class=" nav-link">My Blogs</router-link>

        </li>
        <li class="nav-item" v-if="$store.state.user">
          <router-link to="/logout" class=" nav-link">LogOut</router-link>
        </li>

      </ul>
    </div>
  </nav>

</div>
</template>

<script>
export default {
  name: "Header"
}

</script>

<style scoped>
a.router-link-exact-active{
  color: aliceblue !important;
}
</style>
