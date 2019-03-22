import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
export default function (Vue) {
  Vue.use(Vuetify, {
    iconfont: 'md'
  })
  Vue.use(require('vue-moment'));
  Vue.component('Layout', DefaultLayout)

}