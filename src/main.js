// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

//处理移动端页面300毫秒的延迟
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router
})
