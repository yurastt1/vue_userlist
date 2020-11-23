import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss' 

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
