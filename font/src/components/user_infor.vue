<template>
  <div class="Myinfor" style="background:#ccc">
      <el-row>
        <el-col :span="24">
          <div class="header">
            <div class="left"> 
                <div class="header-mdl agileits-logo"><!-- header-two --> 
                    <h1><a href="">增哥定制</a></h1> 
                  </div>
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
    	<div class="content">
          <el-col :span="6" style="background:#191b2e;height:800px">
            <!-- 用户信息 -->
                    <ul class="myinfor">                                     
                         <li>姓 &nbsp;&nbsp;名<span><el-input  v-model="userInfor.name"   style="width:200px;"></el-input></span>
                         </li>
                         <li>密 &nbsp;&nbsp;码<span><el-input  v-model="userInfor.password" style="width:200px;"></el-input></span>
                         </li>
                         <li>性 &nbsp;&nbsp;别<span><el-input  v-model="userInfor.gender"  style="width:200px;"></el-input></span>
                         </li>
                         <li>手机号<span><el-input  v-model="userInfor.tel" style="width:200px;"></el-input></span>
                         </li>
                         <li>
                           <el-button type="success" class="btn_updata" @click="open_update">修改</el-button>
                         </li>    

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
                    </ul>
          </el-col>
      
	      	<el-col :span="18">
		        <div class="grid-content bg-purple-light">
		              <el-collapse v-model="userInfor" >

                   
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
          								    :data="allAddress" highlight-current-row stripe max-height="400px" >
          								  
          								    <el-table-column
          								      prop="name"
          								      label="收货人姓名"
          								      width="150">
          								    </el-table-column>
          								    <el-table-column
          								      prop="address"
          								      label="地址"
          								      width="150">
          								    </el-table-column>
          								    <el-table-column
          								      prop="tel"
          								      label="收货电话"
          								      width="150">
          								    </el-table-column>
    
          								    <el-table-column
          								      label="操作"
          								      width="200">
          								      <template slot-scope="scope">
          								        <el-button @click="" type="text" size="small" @click="opend_update_address(scope.row)">修改</el-button>
          								        <el-button type="text" size="small" @click="opend_delete_address(scope.row)" >删除</el-button>
          								      </template>
          								    </el-table-column>
          								  </el-table>
  			                 </div>
  			                </el-collapse-item>

                          <el-dialog
                            title="请输入想要修改的信息"
                            :visible.sync="update_address"
                            width="30%"
                            >
                            <el-input  v-model="update_Address.name"   style="width:200px;"></el-input>
                            <el-input  v-model="update_Address.address"   style="width:200px;"></el-input>
                            <el-input  v-model="update_Address.tel"   style="width:200px;"></el-input>
                            <span slot="footer" class="dialog-footer">
                              <el-button @click="update_address = false">取 消</el-button>
                              <el-button type="primary" @click="to_update_address">确 定</el-button>
                            </span>
                          </el-dialog>

		                </li>

                    <!-- 收藏的衣服 -->
		                <li>
                       <el-collapse-item title="我收藏的衣服" name="3">             
                          <div class="myDesige" style="margin-top:20px;">  
                            <div class="biaoqian1">
                              <div>图片</div>
                              <div>名称</div>
                              <div>性别</div>
                              <div>价钱</div>
                              <div>编辑</div>
                            </div>
                            <div class="cont">
                              <div v-for="item in likeClothes" >
                                  <div class="goods">                 
                                      <div class="img">
                                        <img :src="item.src" alt="">
                                      </div>
                                      <div class="product_name">{{item.name}}</div>
                                      <div class="order_number">{{item.gender}}</div>
                                      <div class="order_money">单价:{{item.price}}</div>
                                      <div class="btn">
                                        <el-button type="danger" round id="btn_delete" @click="deleteLikeCloth(item.id)">删除</el-button>
                                      </div>
                                  </div>
                              </div>
                            </div>   
                          </div>                     
                       </el-collapse-item>  	 
		                </li>

                    <!-- 喜欢的设计师 -->
		                <li>
		                	 <el-collapse-item title="我喜欢的设计师" name="4">
				                    <div class="biaoqian" style="margin-top:20px;">
                              <div>照片</div>
                              <div>设计师名字</div>
                              <div>性别</div>
                              <div>联系方式</div>
                              <div>描述</div>
                              <div>操作</div>
                            </div>
                            <div class="cont">
                              <div v-for="item in likeDesigners" >
                                  <div class="goods">                 
                                      <div class="img" style="margin-top: 15px;">
                                        <img :src="item.img" alt="">
                                      </div>
                                      <div class="product_name">{{item.name}}</div>
                                      <div class="order_number">{{item.gender}}</div>
                                      <div class="order_money">{{item.tel}}</div>
                                      <div class="order_money">{{item.describes}}</div>
                                      <div class="btn">
                                        <el-button type="danger" round id="btn_delete" @click="deleteLikeDesigner(item.id)">删除</el-button>
                                      </div>
                                  </div>
                              </div>
                            </div>       
				               </el-collapse-item>
		                </li>
		               
		              </el-collapse>
		        </div>
	      	</el-col>
      </div>
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

            vm.update_phone = vm.user[0].tel;
      			 console.log('user',vm.user);
             vm.findAllMyAddress(); 
             vm.showMyLikeCloth();
             vm.showMyLikeDesigner();
      		}
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
      	delete_address_id:'',
        likeClothes:[],
        likeDesigners:[],
        update_address:false,
        update_address_id:'',
        update_Address:"",
        update_phone:''
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
      if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.address.phone))){
          this.$message({
              showClose: true,
              type: 'warning',
              message: "请重新输入11位正确手机号!"
            });
          
      }else{
          if(this.address.shoujianren==undefined || this.address.phone==undefined ||this.address.Address==undefined){
                this.$message({
                    showClose: true,
                    type: 'warning',
                    message: '添加收货失败,请输入正确收货地址信息'
                  });
            }else{
              axios.post('http://localhost:3000/user_address/save',{userAddress:JSON.stringify(this.address)}).then((result)=>{
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
            }
      }
      
  		
  	},
  	//修改用户信息
  	to_update_user(){
  		this.openupdate =false;
      var vm = this;
      if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.user[0].tel))){
        this.user[0].tel = this.update_phone;
          this.$message({
            showClose: true,
            type: 'warning',
            message: '请重新输入11位正确手机号!'
          });

      }else{
        axios.post('http://localhost:3000/user/update',{user:JSON.stringify(this.user[0])}).then((result)=>{
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
      }
  		
  	},
  	// 查找所有我的收货地址
  	findAllMyAddress(){
  		axios.post('http://localhost:3000/user_address/findAll',{user_id:JSON.stringify(this.user[0].id)}).then((result)=>{
           	
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
    opend_update_address(item){
      this.update_Address = item;
      this.update_address = true;
      this.update_address_id = item.id;
    },
  	to_delete_address(){
  		this.delete_address = false;
  		axios.post('http://localhost:3000/user_address/batchDelete',{ids:JSON.stringify(this.delete_address_id.id)}).then((result)=>{
           	this.findAllMyAddress();
         
        }).catch((error)=>{
          
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
  	},
    to_update_address(){
      this.update_address = false;
      axios.post('http://localhost:3000/user_address/update',{id:JSON.stringify(this.update_Address.id),name:JSON.stringify(this.update_Address.name),address:JSON.stringify(this.update_Address.address),tel:JSON.stringify(this.update_Address.tel)}).then((result)=>{
            this.$message({
              showClose: true,
              type: 'success',
              message: '修改成功!'
            });
         this.findAllMyAddress();
        }).catch((error)=>{
          
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
    },
    showMyLikeCloth(){
      var vm = this;
      axios.post('http://localhost:3000/user/findAllMyLike',{id:JSON.stringify(this.user[0].id)}).then((result)=>{
         var list=Array.from(result.data);
         var LikeList = [];
         list.forEach(function(item,index){
              axios.post('http://localhost:3000/clothes/findId',{cloth_id:JSON.stringify(item.cloth_id)}).then((result)=>{
                console.log("result.data[0];",result.data[0]);
                var sb =result.data[0];
                 LikeList.push(sb);
              }).catch((error)=>{
                
              })
         });
        vm.likeClothes = LikeList;
      
        console.log("vm.likeClothes",vm.likeClothes);
        }).catch((error)=>{
        
        })
    },
    showMyLikeDesigner(){
      var vm = this;
      axios.post('http://localhost:3000/user/findAllMyLikeDesigners',{id:JSON.stringify(this.user[0].id)}).then((result)=>{
         var list=Array.from(result.data);
         var LikeList = [];
         list.forEach(function(item,index){
              axios.post('http://localhost:3000/designer/findById',{id:JSON.stringify(item.designer_id)}).then((result)=>{
                console.log("result.data[0];",result.data[0]);
                var sb =result.data[0];
                 LikeList.push(sb);
              }).catch((error)=>{
                
              })
         });
        vm.likeDesigners = LikeList;
      
        console.log("vm.likeDesigners",vm.likeDesigners);
        }).catch((error)=>{
        
        })
    },
    deleteLikeDesigner(id){
      axios.post('http://localhost:3000/user/deleteLikeDesigners',{designer_id:JSON.stringify(id),userName:this.userName}).then((result)=>{
             this.showMyLikeDesigner();
             this.$message({
              showClose: true,
              type: 'success',
              message: '删除成功!'
            });
        }).catch((error)=>{
          this.$message({
              showClose: true,
              type: 'warning',
              message: error
            });
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
    },
    deleteLikeCloth(id){
      axios.post('http://localhost:3000/user/deleteLikeClothes',{cloth_id:JSON.stringify(id),userName:this.userName}).then((result)=>{
             this.showMyLikeCloth();
             this.$message({
              showClose: true,
              type: 'success',
              message: '删除成功!'
            });
        }).catch((error)=>{
          this.$message({
              showClose: true,
              type: 'warning',
              message: error
            });
          // this.$router.push({name:'MyInfor',params:{username:this.userName}});
        })
    }
  }
  
}
</script>
  
<style scoped>
@import '../../static/css/user_infor.css'

</style>
