<template>
  <div class="Myinfor">
      <el-row>
        <el-col :span="24">
          <div class="header">
            <div class="left"> 
                <div class="touxiang"><img src="" alt=""></div>
                <div class="userNam">{{user[0].name}}</div>    
            </div> 
            <div class="right">
                <div class="my_car" >
                  <div class="icon" @click="to_gouwuche"><img src="../../static/gouwuche1.png" width="50px" height="50px" alt=""></div>
                  <div class="text" @click="to_gouwuche">我的购物车</div>
                </div>
                <div class="shouhou_service">
                  <div class="icon"><img src="../../static/gouwuche1.png" width="50px" height="50px" alt=""></div>
                    <div class="text">售后服务</div>
                </div>
                <div class="">
                  <div class="icon"><img src="../../static/gouwuche1.png" width="50px" height="50px" alt=""></div>
                    <router-link :to="{name:'HelloWorld',params:{username: userName}}"><div class="text">返回首页</div></router-link>
                </div>
            </div>
          </div>
        </el-col>
      </el-row>
    <el-row>
      <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span=20>
        <div class="grid-content bg-purple-light">
              <el-collapse v-model="userInfor" >
              	<li class="myinfor">
              		<el-collapse-item title="我的信息" name="1" >                   
	                   <li >姓 &nbsp;&nbsp;名<span><el-input  v-model="userInfor.name"   style="width:200px;"></el-input><el-button type="success" class="btn_updata" @click="open_update">修改</el-button></span>
	                   </li>
	                   <li>密 &nbsp;&nbsp;码<span><el-input  v-model="userInfor.password" style="width:200px;"></el-input><el-button type="success" class="btn_updata" @click="open_update">修改</el-button></span>
	                   </li>
	                   <li>性 &nbsp;&nbsp;别<span><el-input  v-model="userInfor.gender"  style="width:200px;"></el-input><el-button type="success" class="btn_updata" @click="open_update">修改</el-button></span>
	                   </li>
	                   <li>手机号<span><el-input  v-model="userInfor.tel" style="width:200px;"></el-input><el-button type="success" class="btn_updata" @click="open_update">修改</el-button></span>
	                   </li>
	                   
	                </el-collapse-item>

	                <!-- 弹出一个框 输入收获地址信息 -->
					 	<el-dialog
						  title="提示"
						  :visible.sync="openupdate"
						  width="30%"
						  :before-close="handleClose">
						  <h2>你确认修改吗</h2>
						  <span slot="footer" class="dialog-footer">
						    <el-button @click="openupdate = false">取 消</el-button>
						    <el-button type="primary" @click="to_update_user">确 定</el-button>
						  </span>
						</el-dialog>
              	</li>
              	<!-- 收获地址模块 -->
                <li >
                	 <el-collapse-item title="我的收货地址" name="2">
	                  <el-button id="btn_add_address" type="primary" @click="openAddShouhuo">添加收货地址</el-button>
	                <!-- 弹出一个框 输入收获地址信息 -->
	                
	                	<el-dialog
						  title="提示"
						  :visible.sync="open_shouhuo"
						  width="30%"
						  :before-close="handleClose">
						  <el-form :model="address" status-icon ref="address" label-width="100px" class="demo-ruleForm">
						  <el-form-item label="收件人" prop="shoujianren">
						    <el-input type="text" v-model="address.shoujianren" auto-complete="off"></el-input>
						  </el-form-item>
						  <el-form-item label="地址" prop="Address">
						    <el-input type="text" v-model="address.Address" auto-complete="off"></el-input>
						  </el-form-item>
						  <el-form-item label="手机号" prop="phone">
						    <el-input v-model.number="address.phone"></el-input>
						  </el-form-item>
						</el-form>
						  <span slot="footer" class="dialog-footer">
						    <el-button @click="open_shouhuo = false">取 消</el-button>
						    <el-button type="primary" @click="add_address">确 定</el-button>
						  </span>
						</el-dialog>
	                
					 	<!-- 弹出一个框 输入收获地址信息 -->
					 	<el-dialog
						  title="提示"
						  :visible.sync="delete_address"
						  width="30%"
						  :before-close="handleClose">
						  <h2>你确认删除此收货地址吗</h2>
						  <span slot="footer" class="dialog-footer">
						    <el-button @click="delete_address = false">取 消</el-button>
						    <el-button type="primary" @click="to_delete_address">确 定</el-button>
						  </span>
						</el-dialog>
						
						<!-- 收货地址列表 -->
						<div class="cont">
						<el-table
						    :data="allAddress"
						    highlight-current-row
							stripe
							max-height="400px"
						    style="width: 60%">
						  
						    <el-table-column
						      prop="name"
						      label="收货人姓名"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="address"
						      label="地址"
						      width="120">
						    </el-table-column>
						    <el-table-column
						      prop="tel"
						      label="收货电话"
						      width="120">
						    </el-table-column>
						    
						    <el-table-column
						      
						      label="操作"
						      width="100">
						      <template slot-scope="scope">
						        <el-button @click="" type="text" size="small">修改</el-button>
						        <el-button type="text" size="small" @click="opend_delete_address(scope.row)" >删除</el-button>
						      </template>
						    </el-table-column>
						  </el-table>
	                   </div>
	                </el-collapse-item>
                </li>
                <li>
                	 <el-collapse-item title="我喜欢的衣服" name="3">
	                  	<h2>你暂时还没有收藏喜欢的衣服</h2>
	                </el-collapse-item>
                </li>
                <li>
                	 <el-collapse-item title="我喜欢的设计师" name="4">
		                  你暂时还没有收藏的喜欢设计师
		                  
		               </el-collapse-item>
                </li>
               
              </el-collapse>
        </div>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
    </el-row>
			
			


			<!-- 底部 -->
			<el-row>
			  <el-col :span="24">
			  	<div class="grid-content bg-purple">	
			  		<div class="footer">
			  			<div>
			  				<span>关于我们</span>
					  		<span>消费者保障</span>
					  		<span>客服中心</span>
					  		<span>意见反馈</span>
					  		<span>售后服务</span>
			  			</div>
			  			<div>
			  				<span>关于我们</span>
					  		<span>消费者保障</span>
					  		<span>客服中心</span>
					  		<span>意见反馈</span>
					  		<span>售后服务</span>
			  			</div>
			  			<div>
			  				<span>关于我们</span>
					  		<span>消费者保障</span>
					  		<span>客服中心</span>
					  		<span>意见反馈</span>
					  		<span>售后服务</span>
			  			</div>
			  			
			  		</div>			  		
			  	</div>
			  </el-col>
			</el-row>
    
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
import store from '../store/index'
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
  name: 'MyInfor',
  computed:{
      ...mapGetters(['userInfor','man_type','woman_type','man_clothes'])
  },
  created(){
  	// console.log(this);
  	this.userName = this.$route.params.name;
  	console.log("this.userName",this.userName);
  	var vm = this;
      this.findSomeOne(vm.userName).then(function(data){
      		if(data.data.length==0){
	  			vm.user =[{
	  				name:"请登录"
	  			}]
      		}else{
      			vm.user = Array.from(data.data);
      			 console.log('user',vm.user);
      		}
      		vm.findAllMyAddress(); 
      }).catch(function(error){
      		console.log("error",error);
      });
  },
  data() {
    return {
    	open_shouhuo:false,
    	openupdate:false,
    	delete_address:false,
    	address:{},
      	sb:"ssss",
      	user:'',
      	userName:'',
      	allAddress:'',
      	delete_address_id:''
    }  
  },
  methods:{
  	...mapActions(['findSomeOne']),
  	to_gouwuche(){
  		this.$router.push({name:'Gouwuche',params:{user_id:"",username:this.userName}})
  	},
  	openAddShouhuo(){
  		this.open_shouhuo =true;
  	},
  	open_update(){
  		this.openupdate =true;
  	},
  	//添加用户收货地址
  	add_address(){
  		this.open_shouhuo =false;
  		this.address.user_id = this.user[0].id;
  		axios.post('http://39.105.13.137:3000/user_address/save',{userAddress:JSON.stringify(this.address)}).then((result)=>{
           this.$message({
              showClose: true,
              type: 'success',
              message: '添加收货成功!'
            });
           this.address ='';
           this.findAllMyAddress();
           // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        }).catch((error)=>{
          this.$message({
              showClose: true,
              type: 'warning',
              message: '添加收货失败!'
            });
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
  	},
  	//修改用户信息
  	to_update_user(){
  		this.openupdate =false;
  		axios.post('http://39.105.13.137:3000/user/update',{user:JSON.stringify(this.user[0])}).then((result)=>{
           this.$message({
              showClose: true,
              type: 'success',
              message: '修改成功!'
            });
           // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        }).catch((error)=>{
          this.$message({
              showClose: true,
              type: 'warning',
              message: '修改失败!'
            });
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
  	},
  	// 查找所有我的收货地址
  	findAllMyAddress(){
  		axios.post('http://39.105.13.137:3000/user_address/findAll',{user_id:JSON.stringify(this.user[0].id)}).then((result)=>{
           	
           this.allAddress =Array.from(result.data);
           console.log("this.allAddress",this.allAddress);
        }).catch((error)=>{
          
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
  	},
  	opend_delete_address(item){
  		console.log("item",item);
  		this.delete_address = true;
  		this.delete_address_id = item;
  	},
  	to_delete_address(){
  		this.delete_address = false;
  		axios.post('http://39.105.13.137:3000/user_address/batchDelete',{ids:JSON.stringify(this.delete_address_id.id)}).then((result)=>{
           	this.findAllMyAddress();
         
        }).catch((error)=>{
          
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
  	}
  }
  
}
</script>
  
<style scoped>
@import '../../static/css/myInfor.css'

</style>
