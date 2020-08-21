import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Vuex
import store from './components/store/store'

import Painel from './components/Painel'
Vue.component('Painel', Painel)

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
