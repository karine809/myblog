import Vue from 'vue'
import Router from 'vue-router'

import authRouts from "../components/auth/auth-routs"
import NotFound from "../components/404/NotFound";
import adminRouts from "../components/Admin/admin-routs"
import bloggerRouts from  "../components/Blogger/blogger-routs"
import auth from "../middlewares/auth";
import guest from "../middlewares/guest";
import Home from "../Home";
import Verifiyemail from "../Verifiyemail";
import Myblog from "../components/Blogger/Myblog";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/verifiyemail',
      name: 'Verifiyemail',
      component: Verifiyemail
    },
    {
      path: '/',
      // redirect: '/home',
      name: 'Home',
      component: Home
    },
    ...authRouts,
    ...adminRouts,
    ...bloggerRouts,
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }

  ]
})
