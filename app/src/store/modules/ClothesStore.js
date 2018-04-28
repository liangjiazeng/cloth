import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
	state:{
		clothes:[],
		man_clothes:[],
		woman_cloth:[]
	},
	getters:{
		clothes:state=>state.clothes,
		man_clothes:state=>state.man_clothes,
		woman_cloth:state=>state.woman_cloth,
	},
	mutations:{
		alterClothes(state,data){
			state.clothes = data;
		},
		alterManClothes(state,data){
			state.man_clothes = data;
		},
		alterWomanClothes(state,data){
			state.woman_cloth = data;
		}
	},
	actions:{
		findAllClothes(context){
			axios.get('http://39.105.13.137:3000/clothes/findAll').then(({data})=>{	
				context.commit('alterClothes',data);
			})
		},
		findManClothesByDesigner(context,designer_id){
			axios.post('http://39.105.13.137:3000/clothes/findManClothesByDesigner',{designer_id:JSON.stringify(designer_id)}).then((result)=>{
					console.log("result",result.data);
					context.commit('alterManClothes',result.data);
				}).catch((error)=>{
					console.log("错误",error);
				})
		},
		findWomanClothesByDesigner(context,designer_id){
			axios.post('http://39.105.13.137:3000/clothes/findWomanClothesByDesigner',{designer_id:JSON.stringify(designer_id)}).then((result)=>{
					context.commit('alterWomanClothes',result.data);
				}).catch((error)=>{
					console.log("错误",error);
				})
		},
		findManClothes(context){
			axios.get('http://39.105.13.137:3000/clothes/findManCloth').then(({data})=>{
				
				context.commit('alterManClothes',data);
			})
		},
		findWomanClothes(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth').then(({data})=>{
				
				context.commit('alterWomanClothes',data);
			})
		},
		findManClothes_duanxiu(context){
			axios.get('http://39.105.13.137:3000/clothes/findManCloth_duanxiu').then(({data})=>{
				context.commit('alterManClothes',data);
			})
		},
		findManClothes_xizhuang(context){
			axios.get('http://39.105.13.137:3000/clothes/findManCloth_xizhuang').then(({data})=>{
				context.commit('alterManClothes',data);
			})
		},
		findManClothes_chenshan(context){
			axios.get('http://39.105.13.137:3000/clothes/findManCloth_chenshan').then(({data})=>{
				context.commit('alterManClothes',data);
			})
		},
		findManClothes_waitao(context){
			axios.get('http://39.105.13.137:3000/clothes/findManCloth_waitao').then(({data})=>{
				context.commit('alterManClothes',data);
			})
		},
		findManClothes_maoyi(context){
			axios.get('http://39.105.13.137:3000/clothes/findManCloth_maoyi').then(({data})=>{
				context.commit('alterManClothes',data);
			})
		},
		findManClothes_Txu(context){
			axios.get('http://39.105.13.137:3000/clothes/findManCloth_Txu').then(({data})=>{
				context.commit('alterManClothes',data);
			})
		},
		findWomanClothes_xizhuang(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth_xizhuang').then(({data})=>{
				context.commit('alterWomanClothes',data);
			})
		},
		findWomanCloth_chenshan(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth_chenshan').then(({data})=>{
				context.commit('alterWomanClothes',data);
			})
		},
		findWomanCloth_qunzi(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth_qunzi').then(({data})=>{
				context.commit('alterWomanClothes',data);
			})
		},
		findWomanCloth_waitao(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth_waitao').then(({data})=>{
				context.commit('alterWomanClothes',data);
			})
		},
		findWomanCloth_maoyi(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth_maoyi').then(({data})=>{
				context.commit('alterWomanClothes',data);
			})
		},
		findWomanCloth_qipao(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth_qipao').then(({data})=>{
				context.commit('alterWomanClothes',data);
			})
		},
		findWomanCloth_kuzi(context){
			axios.get('http://39.105.13.137:3000/clothes/findWomanCloth_kuzi').then(({data})=>{
				context.commit('alterWomanClothes',data);
			})
		},
		// -----------------------------------------------------------------------------------------------
		findClothbytypeName_Gneder(context,name,gender){
			axios.post('http://39.105.13.137:3000/clothes/findClothbytypeName_Gneder',{name:JSON.stringify(name.name),gender:JSON.stringify(name.gender)}).then((result)=>{
					console.log(result);
					context.commit('alterClothes',result.data);
				}).catch((error)=>{
					
				})
		},
		//-----------------------------------------------------------------------------------------------
		saveClothes(context,from){
			return new Promise(function(resolve,reject){
				axios.post('http://39.105.13.137:3000/clothes/save',{clothes:JSON.stringify(from)}).then((result)=>{
					resolve(result);
				}).catch((error)=>{
					reject(error);
				})
			})
		},
		selectQuery(context,keys){
			axios.post('http://39.105.13.137:3000/clothes/query',{keys:JSON.stringify(keys)}).then((result)=>{
				console.log("result",result.data);
				context.commit('alterClothes',result.data);
				context.commit('alterManClothes',result.data);
				context.commit('alterWomanClothes',result.data);
				
					
				}).catch((error)=>{
					
				})
		},
		selectQuery_Man(context,keys){
			axios.post('http://39.105.13.137:3000/clothes/query_man',{keys:JSON.stringify(keys)}).then((result)=>{
				console.log("result",result.data);	
				context.commit('alterManClothes',result.data);		
				}).catch((error)=>{
					
				})
		},
		selectQuery_Woman(context,keys){
			axios.post('http://39.105.13.137:3000/clothes/query_woman',{keys:JSON.stringify(keys)}).then((result)=>{
				console.log("result",result.data);		
				context.commit('alterWomanClothes',result.data);	
				}).catch((error)=>{
					
				})
		}

}
}