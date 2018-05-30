// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import VueScrollTop from '@/components/general/vue-scroll-top'

Vue.component('vue-scroll-top', VueScrollTop)
Vue.use(VueScrollTo, { duration: 1000, container: 'body' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
