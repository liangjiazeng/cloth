<template>
  <div class="hello">
    <!-- 标题栏 -->
			<el-row>
			  <el-col :span="24">
			  	<div class="grid-content bg-purple-dark">
			  		<header>
			  			<div class="header" id="home">
							<div class="container">
								<div class="agile_header_grid"> 
									<div class="header-mdl agileits-logo"><!-- header-two --> 
										<h1><a href="index.html">增哥定制</a></h1> 
									</div>
									<div class="agile_social_banner">
										<ul class="agileits_social_list">
											<li v-if="to_regester">
												<i class="fa fa-facebook" aria-hidden="true"><router-link to="/login">登录</router-link></i>
											</li>
											<li v-if="to_regester">
												<i class="fa fa-twitter" aria-hidden="true"><router-link to="/login">注册</router-link></i>
												
											</li>
											<li v-if="user_isLogin">
												<span style="color:red;font-size:20px;cursor:pointer">你好！{{userName}} &nbsp;用户</span>
											</li>
											<li>
												<i  aria-hidden="true"><router-link :to="{name:'Gouwuche',params:{username:this.userName}}">购物车</router-link></i>
											</li>
											<li>
												<i  aria-hidden="true"><router-link :to="{name:'MyInfor',params: {name: userName}}">我的</router-link></i>
											</li>
										</ul>
									</div>  
									<div class="clearfix"> </div>
								</div>  
							</div>	
						</div>	
			  		</header>
			  	</div>
			  </el-col>
			</el-row>
	<!-- 导航栏 -->
			<el-row>
				 <el-col :span="24">
				  	<div class="grid-content bg-purple">
				  		<div class="line"></div>
						<el-menu
						  :default-active="activeIndex2"
						  class="el-menu-demo"
						  mode="horizontal"
						  @select="handleSelect"
						  background-color="#545c64"
						  text-color="#fff"
						  active-text-color="#ffd04b">
						  <el-menu-item index="1"><router-link :to="{name:'HelloWorld',params: {username: userName}}">首页</router-link></el-menu-item>
						  <el-menu-item index="2"><router-link :to="{name:'Man',params: {username: userName}}">男士专区</router-link></el-menu-item>
						  <el-menu-item index="3"><router-link :to="{name:'Woman',params: {username: userName}}">女士专区</router-link></el-menu-item>	
						  <el-menu-item index="4"><router-link :to="{name:'Designers',params: {username: userName}}">设计师专区</router-link></el-menu-item>
						  <el-menu-item index="5">
						  	<a >时尚资讯</a>
						  </el-menu-item>
						  <el-menu-item index="6">
						  	<a>明星搭配</a>
						  </el-menu-item>
						  <el-menu-item >
						  	<el-input placeholder="请输入内容" v-model="query" style="width:500px;" @keyup.enter.native="show">
						    <i slot="prefix" class="el-input__icon el-icon-search"></i>
						  </el-input>
						  </el-menu-item>
						</el-menu>
				  	</div>
				</el-col>
			  
			</el-row>
	<!-- 走马灯 轮播图-->
			<el-row>
			 	<el-col :span="24">
				 	<el-carousel :interval="4000" type="card" height="450px">
					    <el-carousel-item v-for="item in img" :key="item">
					      <img v-bind:src="item.src" alt="" @click="to_by(item.id,userName)">
					    </el-carousel-item>
					  </el-carousel>
				</el-col>
			</el-row>
			

	<!-- 新品专区 -->
			<div class="new_product">
				<hr style="width:100px;">
				<h1>新品专区</h1>
				<hr style="width:100px;">
			</div>
				
			<el-row>
				<div class="show" v-for="item in newcloth" :key="item">
					<el-col :span="6">
					  	<div class="demo">
						        <div class="container">
						            <div class="row">
						                <div class="col-md-4 col-sm-6">
						                    <div class="box">
						                        <img :src="item.src" alt="" @click="to_by(item.id,userName)"/>
						                        <div class="box-content">
						                            <div class="box-inner-content">
						                                <h3 class="title">Williamson</h3>
						                                <span class="post">Web Developer</span>
						                                <ul class="icon">
						                                    <li>
						                                    	<a class="fa fa-search" href="#" @click="to_by(item.id,userName)">定制</a></li>
						                                </ul>
						                            </div>
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </div>
						</div>
					</el-col>
				</div>			 
			</el-row>



			<!--女神推荐  -->
			<div class="woman_product">
				<hr style="width:100px;">
				<h1>女神推荐</h1>
				<hr style="width:100px;">
			</div>
			<el-row>
				<div class="show" v-for="item in nvshen" :key="item">
					<el-col :span="6">
					  	<div class="demo">
						        <div class="container">
						            <div class="row">
						                <div class="col-md-4 col-sm-6">
						                    <div class="box">
						                        <img :src="item.src" alt="" @click="to_by(item.id,userName)"/>
						                        <div class="box-content">
						                            <div class="box-inner-content">
						                                <h3 class="title">Williamson</h3>
						                                <span class="post">Web Developer</span>
						                                <ul class="icon">
						                                   <li><a class="fa fa-search" href="#" @click="to_by(item.id,userName)">定制</a></li>
						                                    
						                                </ul>
						                            </div>
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </div>
						</div>
					</el-col>
				</div>			 
			</el-row>

				<!-- 男神 -->
			<div class="man_product">
				<hr style="width:100px;">
				<h1>男神推荐</h1>
				<hr style="width:100px;">
			</div>
			<el-row>
				<div class="show" v-for="item in nanshen" :key="item">
					<el-col :span="6">
					  	<div class="demo">
						        <div class="container">
						            <div class="row">
						                <div class="col-md-4 col-sm-6">
						                    <div class="box">
						                        <img :src="item.src" alt=""  @click="to_by(item.id,userName)"/>
						                        <div class="box-content">
						                            <div class="box-inner-content">
						                                <h3 class="title">Williamson</h3>
						                                <span class="post">Web Developer</span>
						                                <ul class="icon">
						                                    <li><a class="fa fa-search" href="#" @click="to_by(item.id,userName)">定制</a></li>
						                                    
						                                </ul>
						                            </div>
						                        </div>
						                    </div>
						                </div>
						            </div>
						        </div>
						</div>
					</el-col>
				</div>			 
			</el-row>
			<div class="no_like">
				<h2>没有合适的？没关系</h2>
				<h5>我们这里有专业的设计师为你量身定做，直到你满意为止</h5>
			</div>
			<div class="tags">
				<p >只需要以下几步:</p>
				<img src="../../static/loadIco.png" alt="" style="width:100%;margin-top:20px;">
			</div>
			<div class="btn" style="margin-top:50px;">
				<el-button type="success" round>马上订起来</el-button>
			</div>
			<hr style="width:100%;background-color:rgb(204,204,204);margin-top:30px;">
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

		<el-dialog
	      title="提示"
	      :visible.sync="dialogVisible"
	      width="30%"
	      :before-close="handleClose">
	      <span>你还未登录，请立即登录</span>
	      <span slot="footer" class="dialog-footer">
	        <el-button @click="gotoby">取 消</el-button>
	        <el-button type="primary" @click="gotoby">确 定</el-button>
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
  name: 'HelloWorld',
   computed:{
      ...mapGetters(['man_clothes','woman_cloth'])
  },
  created(){
  	var that = this;
  	that.userName = this.$route.params.username;
  	this.isLogin();
  	this.findManCloth();
  	this.findWomanCloth();
  	this.findNewCloth();
	console.log("this.userName",this.userName);

  },
  data () {
    return {
    	dialogVisible:false,
    	userName:'',
    	user_isLogin:false,
    	to_regester:true,
    	query:'',
    	newcloth:[],
    	nvshen:[],
    	nanshen:[],
      	img:[],
      	activeIndex: '1',
        activeIndex2: '1'
    }
  },
  methods: {
	  	...mapActions([
	        'findWomanClothes',
	        'findManClothes'
	    ]),
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
	    // 判断有没有用户登录
	    isLogin(){
	    	var that = this;//缓存当前vue对象
	    	console.log("this.userName",this.userName);
	    	if(this.userName!=undefined){
	    		this.user_isLogin = true;
	    		this.to_regester = false;
	    	}
	    },
	    findManCloth(){
	    	var vm = this;
	    	axios.get('http://39.105.13.137:3000/clothes/findManCloth').then(({data})=>{
				for(var sb=0;sb<4;sb++){
					vm.nanshen[sb] = data[sb];
				}
				vm.nanshen = Array.from(vm.nanshen);
			})
	    },
	    findWomanCloth(){
	    	var vm = this;
	    	axios.get('http://39.105.13.137:3000/clothes/findWomanCloth').then(({data})=>{
				for(var sb=0;sb<4;sb++){
					vm.nvshen[sb] = data[sb];
				}
				vm.nvshen = Array.from(vm.nvshen);
			})
	    },
	    findNewCloth(){
	    	var vm = this;
	    	
	    	axios.get('http://39.105.13.137:3000/clothes/findAll').then(({data})=>{
	    		var n1;
				for(var sb=0;sb<8;sb++){
	    			n1=Math.floor(Math.random()*20+1);
					vm.newcloth[sb] = data[n1];
				}
				for(var sb=0;sb<4;sb++){
	    			n1=Math.floor(Math.random()*20+1);
					vm.img[sb] = data[n1];
				}
				vm.newcloth = Array.from(vm.newcloth);
				vm.img = Array.from(vm.img);
			})
	    },
	     to_by(cloth_id,username){	     	     
	        this.$router.push({name:'AllProduct',params:{username:username}});  
	     },
	     show(){
	      this.$router.push({name:'AllProduct',params:{username:this.userName}});
	    }
    }
}
</script>

<style scoped>
	@import '../../static/css/hello.css'
	
</style>
