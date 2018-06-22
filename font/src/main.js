// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'
import Animate from './animate.css'
import store from './store'
import Form from '../static/js/jquery-form.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(Animate);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
