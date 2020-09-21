import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-5ead8.firebaseio.com/'
axios.defaults.headers.common['Autorization'] = 'lolol'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  }
})