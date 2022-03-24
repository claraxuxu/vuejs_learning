import Vue from 'vue'
import App from './App.vue'
import Clara from './header.vue'

Vue.component('loves', Clara)

new Vue({
  el: '#app',
  render: h => h(App)
})
