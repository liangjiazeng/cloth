import Vuex from 'vuex'
import Vue from 'vue'
import UserStore from './modules/UserStore'
import ClothesStore from './modules/ClothesStore'
import DesignerStore from './modules/DesignerStore'
import OrderStore from './modules/OrderStore'
import PayStore from './modules/PayStore'
import TypeStore from './modules/TypeStore'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		UserStore,
		ClothesStore,
		DesignerStore,
		OrderStore,
		PayStore,
		TypeStore
	}
})