import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortDown,faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/store.js'
library.add(faSortDown,faSortUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.filter('currency',(value)=>{
	return '$'+value.toLocaleString();
})

const router= new VueRouter({
	routes,
	mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
