import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
	state:{
		users:[],
		userInfor:[]
	},
	getters:{
		users:state=>state.users,
		userInfor:state=>state.userInfor
	},
	mutations:{
		alterUsers(state,data){
			state.users = data;
		},
		alterUsersInfor(state,data){
			state.userInfor = data;
		}
	},
	actions:{
		findAllUsers(context){
			axios.get('http://39.105.13.137:3000/user/findAll').then(({data})=>{
				context.commit('alterUsers',data);
			})
		},
		findSomeOne(context,username){
			return new Promise(function(resolve,reject){
				axios.post('http://39.105.13.137:3000/user/findByName',{name:username}).then((data)=>{
					context.commit('alterUsersInfor',data.data[0]);
					resolve(data);
				}).catch((error)=>{
					reject(error);
					// console.log(error);
				})
			})
		},
		saveUser(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://39.105.13.137:3000/user/save',{user:JSON.stringify(from)}).then((result)=>{
					resolve(result);
				}).catch((error)=>{
					reject(error);
				})
			})
		},
		userlogin(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://39.105.13.137:3000/user/login',{user:JSON.stringify(from)}).then((result)=>{
					console.log("STORE",result);
					resolve(result);
				}).catch((error)=>{
					reject(error);
				})
			})
		}
	}
}