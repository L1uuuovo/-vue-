import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入css初始化
import './assets/css/base.css'
import './plugins/vant.js'
import mycharts from './plugins/echarts.js'

Vue.use(mycharts)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
