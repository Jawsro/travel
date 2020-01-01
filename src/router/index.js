import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Host from '@/pages/host/Host'
import Ticket from '@/pages/ticket/ticket'
import Must from '@/pages/must/must'
import Seacher from '@/pages/seacher/seacher'
import Goweek from '@/pages/goweek/goweek'
import Register from '@/pages/register/register'
import Login from '@/pages/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }

    },{
      path: '/City',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/Host',
      name: 'Host',
      component: Host
    },{
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },{
      path: '/must',
      name: 'Must',
      component: Must
    },{
      path: '/seacher',
      name: 'Seacher',
      component: Seacher
    },{
      path: '/goweek/:id',
      name: 'Goweek',
      component: Goweek
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
