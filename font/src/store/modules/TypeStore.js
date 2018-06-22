import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
	state:{
		type:[],
		man_type:[],
		woman_type:[]
	},
	getters:{
		type:state=>state.type,
		man_type:state=>state.man_type,
		woman_type:state=>state.woman_type,
	},
	mutations:{
		alterType(state,data){
			state.type = data;
		},
		ALTERMANTYPE(state,data){
			console.log("alterManType",data);
			state.man_type = data;
		},
		alterWomanType(state,data){
			state.woman_type = data;
		},
	},
	actions:{
		findAllType(context){
			axios.get('http://39.107.228.71:3000/type/findAll').then(({data})=>{
				context.commit('alterType',data);
			})
		},
		findManType(context){
			axios.get('http://39.107.228.71:3000/type/findManType').then(({data})=>{
				// console.log("Store里面的man",data);
				// console.log("context",context);
				context.commit('ALTERMANTYPE',data);
			})
		},
		findWomanType(context){
			axios.get('http://39.107.228.71:3000/type/findWomanType').then(({data})=>{
				context.commit('alterWomanType',data);
			})
		},
		saveType(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://39.107.228.71:3000/type/save',{type:JSON.stringify(from)}).then((result)=>{
					resolve(result);
				}).catch((error)=>{
					reject(error);
				})
			})
		}
	}
}