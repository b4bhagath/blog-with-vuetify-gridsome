import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
export default function (Vue) {
  Vue.use(Vuetify, {
    iconfont: 'md'
  })
  Vue.component('Layout', DefaultLayout)

}