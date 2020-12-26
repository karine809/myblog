import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
    // meta: {middleware: ['guest'] }
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register
    // meta: {middleware: ['guest'] }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]
