import Blogger from "./Blogger";
import Newblog from "./Newblog";
import Myblog from "./Myblog";

export default [
  {
    path: '/blogger/myblogs',
    name: 'Blogger',
    component: Blogger
  },
  {
    path: '/blogger/newblog',
    name: 'Newblog',
    component: Newblog
  },
  {
    path: '/blogger/myblog',
    name: 'Myblog',
    component: Myblog
  }
]
