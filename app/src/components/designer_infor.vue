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
			        <span slot="title" @click="open_show_Personnal">个人信息</span>
			      </el-menu-item>
			      <el-menu-item index="2">
			        <i class="el-icon-menu"></i>
			        <span slot="title" @click="open_show_myDesige">我的设计</span>
			      </el-menu-item>
			      <el-menu-item index="3">
			        <i class="el-icon-document"></i>
			        <span slot="title" @click="open_show_notice">订单通知</span>
			      </el-menu-item>
			      <el-menu-item index="4">
			        <i class="el-icon-setting"></i>
			        <span slot="title" @click="open_show_ko">用户投诉与建议</span>
			      </el-menu-item>
			    </el-menu>
            </div>
          </div>
        </el-col>
        <el-col :span="24" >
         	<el-row>
         		<div class="top">
         			<!-- 跑马灯 -->
         			<marquee id="paomadeng" width=100% scrollamount=2 > 
         				
         					<router-link :to="{name:'HelloWorld'}">
         						<div class="text">
         							<a style="color:red">
         								想看看别人的设计吗!点我试试？
         							</a>
         							
         						</div>
         					</router-link>
         				
         				
         			</marquee>
         		</div>
         	</el-row>
         	<el-row>
         		<div class="content">
         		<!-- 用户信息管理模块 -->
		        	<div class="personal" v-if="show_Personnal" >
		        		<li>
		        			<div class="left">
			        			<span>姓名</span>
			        		</div>
							<div class="right">
								<span><el-input  v-model="user.name"   style="width:200px;"></el-input>
		        						<el-button type="text" size="small" style="color:red" @click="update">修改</el-button>
		        				</span>
							</div>
		               </li>
		               <li>
		        			<div class="left">
			        			<span>密码</span>
			        		</div>
							<div class="right">
								<span><el-input  v-model="user.password"   style="width:200px;"></el-input>
		        						<el-button type="text" size="small" style="color:red" @click="update">修改</el-button>
		        				</span>
							</div>
		               </li>
		               <li>
		        			<div class="left">
			        			<span>性别</span>
			        		</div>
							<div class="right">
								<span><el-input  v-model="user.gender"   style="width:200px;"></el-input>
		        						<el-button type="text" size="small" style="color:red" @click="update">修改</el-button>
		        				</span>
							</div>
		               </li>
		               <li>
		        			<div class="left">
			        			<span>手机号</span>
			        		</div>
							<div class="right">
								<span><el-input  v-model="user.tel"   style="width:200px;"></el-input>
		        						<el-button type="text" size="small" style="color:red" @click="update">修改</el-button>
		        				</span>
							</div>
		               </li>
		               <li>
		        			<div class="left">
			        			<span>自我评价</span>
			        		</div>
							<div class="right">
								<span>
									<textarea name="" id="" cols="30" rows="4" v-model="user.describes"></textarea>
									
		        						<el-button type="text" size="small" style="color:red" @click="update">修改</el-button>
		        				</span>
							</div>
		               </li>

		        	</div>

		        	<!-- 服装管理 -->
		        	<div class="myDesige" v-if="show_myDesige" >
		        		<div class="btn_add">
		        			<el-button type="primary" round @click="open_add">添加设计</el-button>
		        		</div>
		        		 
		        		 <div class="biaoqian">
		        		 	<div>图片</div>
		        		 	<div>名称</div>
		        		 	<div>性别</div>
		        		 	<div>价钱</div>
		        		 	<div>编辑</div>
		        		 </div>
		        		 <div class="cont">
		        		 	<div v-for="(item,index) in myClothes" >
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

		        	<!-- 设计师管理通知 -->
		        	<div class="notice" v-if="show_notice">
		        			<div v-for="(item,index) in sb">
							  	<div class="goods">
							  		
					  				<div class="img">
					  					<img :src="img[index]" alt="">
					  				</div>
					  				<div class="product_name">{{cloth_name[index]}}</div>
					  				<div class="order_number">数量:{{item.number}}</div>
					  				<div class="order_money">颜色:<span>
					            <el-color-picker v-model="item.color"></el-color-picker>
					              </span>
					          </div>
					          <div class="order_money">单价:{{item.price}}</div>
					  				<div class="order_money">总价格:{{item.price*item.number}}</div>
					  				<div class="btn" style="margin-left:250px;"><el-button type="success" round id="btn_by" @click="fahuo=true">发货</el-button></div>
					  				<div class="btn"><el-button type="danger" round id="btn_delete" @click="open_quxiaodingdan(item.id)">消除订单</el-button></div>
								</div>
							</div>
		        	</div>

		        	<!--未定义功能 -->
					<div class="ko" v-if="show_ko">
						<h1>暂时没有弄这个模块</h1>
					</div>
	         	</div>
         	</el-row> 	
      	</el-col>
		<!-- 添加设计的弹框 -->
		<el-dialog title="新增衣服" :visible.sync="add_dialogFormVisible">
			<form action="http://localhost:3000/clothes/save" method="POST" id="to_add" enctype='multipart/form-data'>
					<div class="item">
						<div class="left">名称：</div>
						<div class="right"><input name="name" type="text"></div>
					</div>
					<div class="item">
						<div class="left">性别：</div>
						<div class="right">
							<label><input name="gender" type="radio" value="男" checked="checked" />男 </label> 
							<label><input name="gender" type="radio" value="女" />女 </label> 
						</div>
					</div>
					<div class="item">
						<el-select name="type_id" v-model="add_clothfrom.type_id" placeholder="请选择类型">
					    	<li v-for="item in type">
					    		<el-option :value="item.id">{{item.name+item.gender}}</el-option>
					    	</li>	      
					    </el-select>
					</div>
					<div class="item">
						<div class="left">价格：</div>
						<div class="right"><input name="price" type="text"></div>
					</div>
					<div class="item">
						<h3>添加图片</h3>
					  <input id="image" type='file' name='myFile' size='15'/>
					</div>
					<input type="hidden" name="designer_id" :value="user.id" >
			</form>		  
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="toAdd">确 定</el-button>
		  </div>
		</el-dialog>
      	<!-- 弹出确认修改信息框 -->
      	<el-dialog
	        title="提示"
	        :visible.sync="update_dialogVisible"
	        width="30%"
	        :before-close="handleClose">
	        	
		        	<li>名称:<el-input  v-model="update_cloth.name" style="width:200px;"></el-input></li>					  		
		        	<li>性别:<el-input  v-model="update_cloth.gender" style="width:200px;"></el-input></li>					  		
		        	<li>价格:<el-input  v-model="update_cloth.price" style="width:200px;"></el-input></li>					  		
				
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="update_dialogVisible = false">取 消</el-button>
	          <el-button type="primary" @click="to_update">确认修改</el-button>
	        </span>
	    </el-dialog>
	    <!-- 发货提示框 -->
		<el-dialog
	        title="提示"
	        :visible.sync="fahuo"
	        width="30%"
	        :before-close="handleClose">
	        	<h2>发货成功</h2>				  		
				
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="fahuo = false">取 消</el-button>
	          <el-button type="primary" @click="fahuo = false">确认</el-button>
	        </span>
	    </el-dialog>
	    <!-- 确认修改提示框 -->
		<el-dialog
	        title="提示"
	        :visible.sync="update_user"
	        width="30%"
	        :before-close="handleClose">
	        	<h2>确认修改</h2>				  		
				
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="fahuo = false">取 消</el-button>
	          <el-button type="primary" @click="OK_update">确认修改</el-button>
	        </span>
	    </el-dialog>
	     <!-- 消除订单提示框 -->
		<el-dialog
	        title="提示"
	        :visible.sync="quxiaodingdan"
	        width="30%"
	        :before-close="handleClose">
	        	<h4>取消理由 </h4>
	        	<textarea name="" id="" cols="30" rows="4"></textarea>				  		
				
	        <span slot="footer" class="dialog-footer">
	          <el-button @click="quxiaodingdan = false">取 消</el-button>
	          <el-button type="primary" @click="to_quxiaodingdan">确认取消</el-button>
	        </span>
	    </el-dialog>
	</el-row>
		
    
  </div>
</template>
<script src="../../static/js/jquery-form.js"></script>
<script>

import {mapState,mapGetters,mapActions} from 'vuex';
import store from '../store/index'
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default {
  name: 'Designer_infor',
  computed:{
      ...mapGetters(['userInfor','man_type','type','man_clothes'])
  },
  created(){
  	this.userName = this.$route.params.username;
      this.findUser();
      this.findMyDesige();
      this.findAllType();
  },
  data () {
    return {
    	imgsrc:'',
    	add_dialogFormVisible:false,
    	fahuo:false,
    	add_clothfrom:{},
    	myClothes:[],
    	update_dialogVisible:false,
    	quxiaodingdan:false,
    	userName:'',
      	sb:"ssss",
      	show_Personnal:true,
      	update_user:false,
      	show_myDesige:false,
      	show_notice:false,
      	show_ko:false,
      	user:'',
      	tableData:{},
      	img:[],
      	cloth_name:[],
      	update_cloth:'',
      	quxiaodingdan_id:''
    }  
  },
  methods:{
  	...mapActions(['findSomeOne','findAllType']),
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
  	// 展开发货提示框
  	open_fahuo(){
  		this.fahuo =true;
  	},
  	//展开取消订单框
  	open_quxiaodingdan(id){
  		this.quxiaodingdan =true;
  		this.quxiaodingdan_id=id;
  	},
  	to_quxiaodingdan(){
  		this.quxiaodingdan =false;
  		axios.post('http://localhost:3000/order/batchDelete',{ids:JSON.stringify(this.quxiaodingdan_id)}).then((result)=>{
			vm.$message({
              showClose: true,
              type: 'success',
              message: '消除订单成功!'
            });
			this.userName = this.$route.params.username;
      this.findUser();
      this.findMyDesige();
      this.findAllType();
		}).catch((error)=>{
			this.$message.error('删除失败!');			
			this.userName = this.$route.params.username;
      this.findUser();
      this.findMyDesige();
      this.findAllType();
		})
  	},
  	// 获取用户信息
  	findUser(){
		axios.post('http://localhost:3000/designer/findByName',{designerName:JSON.stringify(this.userName)}).then((result)=>{
			this.user =result.data[0];
			console.log("this.user.id",this.user.id);
      		this.findall_gouwuche();

		}).catch((error)=>{
			
		})
  	},
  	findall_gouwuche(){
        var vm = this;
        // console.log("this.user_id",this.user_id);
        axios.post('http://localhost:3000/order/findByDesignerId',{designer_id:JSON.stringify(this.user.id)}).then(({data})=>{
        	console.log("data",data);
          vm.sb = Array.from(data);
          vm.sb.forEach(function(item,index){
            var _index = index;
              vm.findCloth(item.cloth_id,vm.sb[_index]);
          })
        })
      },
      findCloth(id,arr){
        var vm = this;
        axios.post('http://localhost:3000/clothes/findId',{cloth_id:JSON.stringify(id)}).then((result)=>{
          var res = Array.from(result.data);
              vm.cloth_name.push(res[0].name);
               vm.img.push(res[0].src);
        }).catch((error)=>{
          
        })
      },
  	// 弹出确认修改信息的弹框信息
  	update(){
  		this.update_user =true;
  	},
  	//修改个人信息
  	OK_update(){
  		this.update_user =false;
  		axios.post('http://localhost:3000/designer/update',{from:JSON.stringify(this.user)}).then((result)=>{
			console.log(result);
			this.$message({
              showClose: true,
              type: 'success',
              message: '修改成功!'
            });
            this.$router.push({name:'DesignerInfor',params:{username:this.userName}})
		}).catch((error)=>{
			this.$message({
              showClose: true,
              type: 'warning',
              message: "修改失败啦"
            });
            this.$router.push({name:'DesignerInfor',params:{username:this.userName}})
		})
  	},
  	// 展示我的设计
  	findMyDesige(){
  		axios.post('http://localhost:3000/clothes/findByDesignerName',{designerName:JSON.stringify(this.userName)}).then((result)=>{
  		
			this.myClothes =Array.from(result.data);
			
		}).catch((error)=>{
			
		})
  	},
  	// 删除设计
  	delete_mycloth(id){
  		var vm =this;
  		axios.post('http://localhost:3000/clothes/batchDelete',{ids:JSON.stringify(id)}).then((result)=>{
	  		vm.$message({
	              showClose: true,
	              type: 'success',
	              message: '删除成功!'
	            });
	  		vm.findMyDesige();
      		vm.findAllType();
			
		}).catch((error)=>{
			vm.$message({
              showClose: true,
              type: 'warning',
              message: '删除失败!'
            });
            vm.findMyDesige();
      		vm.findAllType();
		})
  	},
  	// 打开新增衣服弹框
  	open_add(){
  		this.add_dialogFormVisible =true;

  	},
  	// 添加衣服的方法
  	toAdd(){
  		var vm = this;
  		console.log("sdasdddsdsdsadasadsadsassdas");
  		// $('#to_add').submit();
  		$('#to_add').ajaxSubmit({
            type: 'post', // 提交方式 get/post
            url: 'http://localhost:3000/clothes/save', // 需要提交的 url
            success: function(data) { // data 保存提交后返回的数据，一般为 json 数据
                // 此处可对 data 作相关处理
       			vm.add_dialogFormVisible =false;
       			vm.findMyDesige();
      			vm.findAllType();
            }
            
        });
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
		axios.post('http://localhost:3000/clothes/update',{update_cloth:JSON.stringify(this.update_cloth)}).then((result)=>{
  			vm.$message({
              showClose: true,
              type: 'success',
              message: '修改成功!'
            });
		}).catch((error)=>{
			
		})
	}



}
  
}

</script>
  
<style scoped>
	@import '../../static/css/designer_infor.css'

</style>
