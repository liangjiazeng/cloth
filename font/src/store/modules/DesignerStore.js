import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
Vue.use(axios)
export default {
	state:{
		designers:[]
	},
	getters:{
		designers:state=>state.designers
	},
	mutations:{
		alterDesigners(state,data){
			state.designers = data;
		}
	},
	actions:{
		findAllDesigners(context){
			axios.get('http://39.107.228.71:3000/designer/findAll').then(({data})=>{
				context.commit('alterDesigners',data);
				console.log(data);
			})
		},
		DesignersLogin(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://39.107.228.71:3000/designer/login',{designer:JSON.stringify(from)}).then(function(result){
					resolve(result);
				}).catch(function(error){
					reject(error);
				})
			})
		},
		saveDesigners(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://39.107.228.71:3000/designer/save',{designer:JSON.stringify(from)}).then((result)=>{
					resolve(result);
				}).catch((error)=>{
					reject(error);
				})
			})
		}
	}
}