import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
	state:{
		orders:[]
	},
	getters:{
		orders:state=>state.orders
	},
	mutations:{
		alterUsers(state,data){
			state.orders = data;
		}
	},
	actions:{
		findAllOrders(context){
			axios.get('http://39.107.228.71:3000/order/findAll').then(({data})=>{
				context.commit('alterUsers',data);
			})
		},
		saveOrders(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://39.107.228.71:3000/order/save',{orders:JSON.stringify(from)}).then((result)=>{
					resolve(result);
				}).catch((error)=>{
					reject(error);
				})
			})
		}
	}
}