<template>
  <div class="designer_infor">
      <el-row>
      <el-col :span="4">
          <div class="header">
          	<!-- 头像 -->
            <div class="touxiang"> 
                <div class="touxiang_img"><img src="../../static/personal_touxiang.jpg" alt="" width="60px" height="60px"></div>
                <div class="userNam">{{userName}}</div>    
            </div> 

            <!-- 导航栏 -->
            <div class="menu">
            	<el-menu
			      default-active="2"
			      class="el-menu-vertical-demo"
			      background-color="#191b2e"
			      text-color="#fff"
			      active-text-color="#1cd388">
			      <el-menu-item index="1">
			        <i class="el-icon-location"></i>
			        <span slot="title" @click="open_show_Personnal">用户管理模块</span>
			      </el-menu-item>
			      <el-menu-item index="2">
			        <i class="el-icon-menu"></i>
			        <span slot="title" @click="open_show_myDesige">衣服管理模块</span>
			      </el-menu-item>
			      <el-menu-item index="3">
			        <i class="el-icon-document"></i>
			        <span slot="title" @click="open_show_notice">设计师管理模块</span>
			      </el-menu-item>
			      <el-menu-item index="4">
			        <i class="el-icon-setting"></i>
			        <span slot="title" @click="open_show_ko">用户投诉管理模块</span>
			      </el-menu-item>
			    </el-menu>
            </div>
            
          </div>
        </el-col>
        <el-col :span="24" >
         	<el-row>
         		<div class="top">
         		</div>
         	</el-row>
         	<el-row>
         		<div class="content">
         		<!-- 用户信息管理-->
		        	<div class="personal" v-if="show_Personnal" >
		        		<h1>所有的用户</h1>
						<div class="cont">
							<el-table
						    :data="users"
						    border
						    style="width: 100%">
						  
						    <el-table-column
						      prop="name"
						      label="姓名"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="password"
						      label="密码"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="gender"
						      label="性别"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="birth"
						      label="生日"
						      width="300">
						    </el-table-column>
						    <el-table-column
						      prop="tel"
						      label="手机号"
						      width="120">
						    </el-table-column>
						    <el-table-column					
						      label="操作"
						      width="100">
						      <template slot-scope="scope">
						        <el-button @click="open_user_update(scope.row)" type="text" size="small">编辑</el-button>
						        <el-button @click="open_delete_user(scope.row)" type="text" size="small">删除</el-button>
						      </template>
						    </el-table-column>
						  </el-table>
						</div>
		        		
		        	</div>

		        	<!-- 服装管理 -->
		        	<div class="myDesige" v-if="show_myDesige" >
		        		<h1>所有的服装</h1>		        		 
		        		 <div class="biaoqian" style="margin-bottom:20px">
		        		 	<div>图片</div>
		        		 	<div>名称</div>
		        		 	<div>性别</div>
		        		 	<div>价钱</div>
		        		 	<div>编辑</div>
		        		 </div>
		        		 <div class="cont">
		        		 	<div v-for="(item,index) in clothes" >
						  	<div class="goods">						  		
				  				<div class="img">
				  					<img :src="item.src" alt="">
				  				</div>
				  				<div class="product_name">{{item.name}}</div>
				  				<div class="order_number">{{item.gender}}</div>
				  				<div class="order_money">{{item.price}}</div>
				          		<div class="order_money">单价:{{item.price}}</div>
				  				<div class="btn" style="margin-left:50px;"><el-button type="success" round id="btn_by" @click="open_update(item)">编辑</el-button></div>
				  				<div class="btn"><el-button type="danger" round id="btn_delete" @click="delete_mycloth(item.id)">删除</el-button></div>
							</div>
						</div>
		        		 </div>
		        		 
		        	</div>

		        	<!--设计师管理模块-->
		        	<div class="notice" v-if="show_notice">
		        		<h1>所有的设计师</h1>
						<div class="cont">
							<el-table
						    :data="designers"
						    border
						    style="width: 100%">
						  
						    <el-table-column
						      prop="name"
						      label="姓名"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="password"
						      label="密码"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="gender"
						      label="性别"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="birth"
						      label="生日"
						      width="300">
						    </el-table-column>
						    <el-table-column
						      prop="tel"
						      label="手机号"
						      width="120">
						    </el-table-column>
						    <el-table-column						      
						      label="操作"
						      width="100">
						      <template slot-scope="scope">
						        <el-button @click="open_designer_update(scope.row)" type="text" size="small">编辑</el-button>
						        <el-button type="text" @click="open_delete_designer(scope.row)" size="small">删除</el-button>
						      </template>
						    </el-table-column>
						  </el-table>
						</div>
		        		
		        	</div>

		        	<!--用户投诉模块 -->
					<div class="ko" v-if="show_ko">
						<h1>暂时没有弄这个模块</h1>
					</div>
	         	</div>
         	</el-row> 	
      	</el-col>
		
      	<!-- 弹出确认修改信息框 -->
      	<el-dialog
	        title="提示"
	        :visible.sync="update_dialogVisible"
	        width="30%"
	        >
	        	
		        	<li>名称:<el-input  v-model="update_cloth.name" style="width:200px;"></el-input></li>					  		
		        	<li>性别:<el-input  v-model="update_cloth.gender" style="width:200px;"></el-input></li>					  		
		        	<li>价格:<el-input  v-model="update_cloth.price" style="width:200px;"></el-input></li>					  		
				
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="update_dialogVisible = false">取 消</el-button>
	          <el-button type="primary" @click="to_update">确认修改</el-button>
	        </span>
	    </el-dialog>

		<!-- 弹出修改用户信息框 -->
      	<el-dialog
	        title="你确认要修改用户的信息吗"
	        :visible.sync="update_user_dialogVisible"
	        width="30%"
	        >
	        	<div class="update_user">
	        		<li>名称:<el-input  v-model="update_User.name" style="width:200px;"></el-input></li>					  		
		        	<li>密码:<el-input  v-model="update_User.password" style="width:200px;"></el-input></li>					  		
		        	<li>性别:<el-input  v-model="update_User.gender" style="width:200px;"></el-input></li>					  		
		        	<li>电话:<el-input  v-model="update_User.tel" style="width:200px;"></el-input></li>					  		
		        	<li>生日:<el-input :disabled="true" v-model="update_User.birth" style="width:200px;"></el-input></li>
	        	</div>		        						  	
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="update_user_dialogVisible = false">取 消</el-button>
	          <el-button type="primary" @click="to_update_user">确认修改</el-button>
	        </span>
	    </el-dialog>

	    <!-- 弹出确认删除用户框 -->
      	<el-dialog
	        title="提示"
	        :visible.sync="delete_user_dialogVisible"
	        width="30%"
	        >      
		  				<h1>你确定要删除吗</h1>		  						
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="delete_user_dialogVisible = false">取 消</el-button>
	          <el-button type="primary" @click="to_dalete_user">确认删除</el-button>
	        </span>
	    </el-dialog>
	    <!-- 弹出确认删除设计师框 -->
      	<el-dialog
	        title="提示"
	        :visible.sync="delete_designer_dialogVisible"
	        width="30%"
	        >      
		  				<h1>你确定要删除吗</h1>		  						
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="delete_designer_dialogVisible = false">取 消</el-button>
	          <el-button type="primary" @click="to_dalete_designer">确认删除</el-button>
	        </span>
	    </el-dialog>

	</el-row>
		<!-- 弹出修改设计师信息框 -->
      	<el-dialog
	        title="你确认要修改设计师的信息吗"
	        :visible.sync="update_designer_dialogVisible"
	        width="30%"
	        >
	        	<div class="update_user">
	        		<li>名称:<el-input  v-model="update_designer.name" style="width:200px;"></el-input></li>					  		
		        	<li>密码:<el-input  v-model="update_designer.password" style="width:200px;"></el-input></li>					  		
		        	<li>性别:<el-input  v-model="update_designer.gender" style="width:200px;"></el-input></li>					  		
		        	<li>电话:<el-input  v-model="update_designer.tel" style="width:200px;"></el-input></li>					  		
		        	<li>生日:<el-input :disabled="true" v-model="update_designer.birth" style="width:200px;"></el-input></li>
	        	</div>		        						  	
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="update_designer_dialogVisible = false">取 消</el-button>
	          <el-button type="primary" @click="to_update_desinger">确认修改</el-button>
	        </span>
	    </el-dialog>
    
  </div>
</template>

<script>

import {mapState,mapGetters,mapActions} from 'vuex';
import store from '../store/index'
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default {
  name: 'Designer_infor',
  computed:{
      ...mapGetters(['userInfor','clothes','type','users','designers'])
  },
  created(){
  	var vm = this;
      this.findAllClothes();
      this.findAllDesigners();
      this.findAllUsers();
  },
  data () {
    return {
    	imgsrc:'',
    	add_dialogFormVisible:false,
    	add_clothfrom:{},
    	myClothes:[],
    	update_dialogVisible:false,
    	update_user_dialogVisible:false,
    	delete_user_dialogVisible:false,
    	update_designer_dialogVisible:false,
    	delete_designer_dialogVisible:false,
    	userName:'',
      	sb:"ssss",
      	show_Personnal:true,
      	show_myDesige:false,
      	show_notice:false,
      	show_ko:false,
      	user:'',
      	tableData:{},
      	update_cloth:'',
      	update_User:'',
      	delete_user:'',
      	update_designer:'',
      	delete_designer:''
    }  
  },
  methods:{
  	...mapActions(['findSomeOne','findAllType','findAllClothes','findAllDesigners','findAllUsers']),
  	//---------------------------------------------点击对应模块展示与隐藏-------------------------
  	// 点击展开个人信息模块
  	open_show_Personnal(){
  		this.show_Personnal=true;
      	this.show_myDesige=false;
      	this.show_notice=false;
      	this.show_ko=false;
  	},
  	// 展开“我的设计”模块
  	open_show_myDesige(){
  		this.show_Personnal=false;
      	this.show_myDesige=true;
      	this.show_notice=false;
      	this.show_ko=false;
  	},
  	// 展开我的通知模块
  	open_show_notice(){
  		this.show_Personnal=false;
      	this.show_myDesige=false;
      	this.show_notice=true;
      	this.show_ko=false;
  	},
  	// 展开用户评价模块
  	open_show_ko(){
  		this.show_Personnal=false;
      	this.show_myDesige=false;
      	this.show_notice=false;
      	this.show_ko=true;
  	},
  	// 弹出确认修改信息的弹框信息
  	update(){
  		this.update_dialogVisible =true;
  	},
  	//-----------------------------------------对设计师的操作-------------------------------------
  	//展开修改设计师信息的窗口
	open_designer_update(item){
		console.log("item",item);
		this.update_designer_dialogVisible = true;
		this.update_designer = item;
	},
	open_delete_designer(item){
		this.delete_designer_dialogVisible =true;
		this.delete_designer =item;
	},
	to_dalete_designer(){
		var vm = this;
		this.delete_designer_dialogVisible =false;
		axios.post('http://39.105.13.137:3000/designer/batchDelete',{ids:JSON.stringify(this.delete_designer.id)}).then((result)=>{
			this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
  			vm.$message({
              showClose: true,
              type: 'success',
              message: '删除成功!'
            });
            
		}).catch((error)=>{
			this.$message.error('删除失败!');			
            this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		})
	},
  	//修改设计师信息
  	to_update_desinger(){
  		this.update_designer_dialogVisible =false;
  		axios.post('http://39.105.13.137:3000/designer/update',{from:JSON.stringify(this.update_designer)}).then((result)=>{
			console.log(result);
			this.$message({
              showClose: true,
              type: 'success',
              message: '修改成功!'
            });
            this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		}).catch((error)=>{
			this.$message.error('修改失败!');			
			
            this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		})
  	},
  	//-------------------------------------------------服装的管理--------------------------------------
  	// 删除设计
  	delete_mycloth(id){
  		axios.post('http://39.105.13.137:3000/clothes/batchDelete',{ids:JSON.stringify(id)}).then((result)=>{
	  		vm.$message({
	              showClose: true,
	              type: 'success',
	              message: '删除成功!'
	            });
			this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		}).catch((error)=>{
			this.$message.error('删除失败!');			
			this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		})
  	},
  	// 打开新增衣服弹框
  	open_add(){
  		this.add_dialogFormVisible =true;

  	},
  	// 添加衣服的方法
  	toAdd(){
  		this.add_dialogFormVisible =false;
  		this.add_clothfrom.designer_id=this.user.id;		
  		if(this.add_clothfrom.gender =="男"){
  			this.add_clothfrom.src ="../../static/男装/"+this.imgsrc;
  		}else{
  			this.add_clothfrom.src ="../../static/女装/"+this.imgsrc;
  		}
  		console.log("this.add_clothfrom",this.add_clothfrom);
  		axios.post('http://39.105.13.137:3000/clothes/save',{add_clothfrom:JSON.stringify(this.add_clothfrom)}).then((result)=>{
  			vm.$message({
              showClose: true,
              type: 'success',
              message: '删除成功!'
            });
			this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		}).catch((error)=>{
			this.$message.error('删除失败!');			
			this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		})
  	},
  	// 获取图片名
  	showPicture(){
  		var imgFile =$('#image').val().split('\\');
  		imgFile =imgFile[imgFile.length-1];
  		this.imgsrc =imgFile;
	},
	// 展开修改衣服窗口
	open_update(item){
		this.update_dialogVisible =true;
		this.update_cloth =item;
  	},
	// 去修改
	to_update(){
		this.update_dialogVisible =false;
		axios.post('http://39.105.13.137:3000/clothes/update',{update_cloth:JSON.stringify(this.update_cloth)}).then((result)=>{
  			vm.$message({
              showClose: true,
              type: 'success',
              message: '修改成功!'
            });
            this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		}).catch((error)=>{
			this.$message.error('修改失败!');
			this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		})
	},
	//----------------------------------------------对用户的管理-------------------------------------
	//展开修改用户信息的窗口
	open_user_update(item){
		console.log("item",item);
		this.update_user_dialogVisible = true;
		this.update_User = item;
	},
	to_update_user(){
		this.update_user_dialogVisible = false;
		var vm = this;
		axios.post('http://39.105.13.137:3000/user/update',{update_User:JSON.stringify(this.update_User)}).then((result)=>{
  			vm.$message({
              showClose: true,
              type: 'success',
              message: '修改成功!'
            });
        	vm.$router.push({path:'/admin'});
		}).catch((error)=>{
			this.$message.error('修改失败!');
			
            vm.$router.push({path:'/admin'})
		})
	},
	open_delete_user(item){
		this.delete_user_dialogVisible =true;
		this.delete_user =item;
	},
	to_dalete_user(){
		var vm = this;
		this.delete_user_dialogVisible =false;
		axios.post('http://39.105.13.137:3000/user/batchDelete',{ids:JSON.stringify(this.delete_user.id)}).then((result)=>{
			this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
  			vm.$message({
              showClose: true,
              type: 'success',
              message: '删除成功!'
            });
            
		}).catch((error)=>{
			this.$message.error('删除失败!');			
            this.findAllClothes();
		      this.findAllDesigners();
		      this.findAllUsers();
		})
	}
	//---------------------------------------------



}
  
}

</script>
  
<style scoped>
	@import '../../static/css/admin.css'

</style>
