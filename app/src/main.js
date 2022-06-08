import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins/ModalWindow'
import contextMenu from './plugins/ContextMenu'
import vuetify from './plugins/vuetify'




Vue.config.productionTip = false
Vue.use(modal)
Vue.use(contextMenu)
Vue.use(VueCompositionAPI)


new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
