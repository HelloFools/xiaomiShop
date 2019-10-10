import Vue from 'vue'
import Vuex from 'vuex'
import shop from './moudle/shop'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{ shop }
})