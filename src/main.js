// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/style/reset.css"
import "./assets/style/border.css"//解决1px边框的问题
import "./assets/style/iconfont.css"
import fastClick from "fastclick"//解决移动端点击延迟的问题


Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
