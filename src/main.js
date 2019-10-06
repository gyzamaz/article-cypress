import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import VuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor'
import FormGroup from '@/components/FormGroup'
import swal from 'sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'
import '@/assets/styles/app.scss'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

Vue.config.productionTip = false

Vue.prototype.$api = axios

Vue.prototype.$notify = {
  error: (e) => swal({ type: 'error', text: (e.response && e.response.data) || e.message || e }),
  success: (e) => swal({ type: 'success', text: e }),
  confirm: (e) => swal({ type: 'info', showCancelButton: true, text: e })
}

Vue.use(Vuelidate)
Vue.use(VuelidateErrorExtractor, {
  messages: {
    required: '{attribute} is required',
    url: '{attribute} must be a valid url'
  },
  attributes: {
    title: 'Title',
    author: 'Author',
    rating: 'Rating',
    image: 'Cover image',
    body: 'Article body'
  }
})

Vue.component('FormWrapper', templates.FormWrapper)
Vue.component('FormGroup', FormGroup)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (window.Cypress) {
  window.$app = app
}
