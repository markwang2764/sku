import Vue from 'vue'
import Vuex from 'vuex'
import sku from './modules/sku.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sku
  }
})
