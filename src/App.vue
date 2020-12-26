<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);


import Header from "./components/Header";
export default {
  name: 'App',
  components: {Header,ValidationObserver, ValidationProvider}
}
</script>

<style>
#app {
  font-family: Roboto;
}
</style>
