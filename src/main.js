// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'//引入vuex
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from "fastclick"//解决移动端点击延迟的问题
import "babel-polyfill"//解决所有浏览器支持promise的问题
import "./assets/style/reset.css"
import "./assets/style/border.css"//解决1px边框的问题
import "./assets/style/iconfont.css"
import 'swiper/dist/css/swiper.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Toast } from 'vant'

Vue.use(Toast)
Vue.use(Vant)
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)//使用vuex
////////
//防止用户隐身模式下，代码报错
let defaultcity="北京"
try{
  if(localStorage.city){
    defaultcity=localStorage.city
  }
}catch (e){}
///////
var store=new Vuex.Store({
  state:{
    city:defaultcity//默认城市
  },
  mutations:{
    //修改数据
    changeCity(state,city){
      state.city=city
    ///////
    //防止用户隐身模式下，代码报错
      try{
        localStorage.city=city
      }catch (e){}
    /////// 
    },
  },
  //共享全局数据
  getters:{
    getCity:function (state) {
      return state.city
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if(!sessionStorage.getItem('phone') && !localStorage.getItem('phone')){
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }else{
    	 next();
    }
  }else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
