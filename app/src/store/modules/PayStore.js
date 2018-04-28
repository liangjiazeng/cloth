import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
	state:{
		pays:[]
	},
	getters:{
		pays:state=>state.pays
	},
	mutations:{
		alterPays(state,data){
			state.pays = data;
		}
	},
	actions:{
		findAllPays(context){
			axios.get('http://localhost:3000/pay/findAll').then(({data})=>{
				context.commit('alterPays',data);
			})
		},
		savePay(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://localhost:3000/pay/save',{user:JSON.stringify(from)}).then((result)=>{

					resolve(result);
				}).catch((error)=>{
					reject(error);
				})
			})
		}
	}
}