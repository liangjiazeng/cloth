<template>
  <div class="gouwuche">
    <!-- 标题栏 -->
    <div class="header_menu">
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
              </el-menu>
              </div>
          </el-col>
          
        </el-row>
    </div>
   
	<div class="header">
		<h1>我的购物车</h1>
	</div>
    <!-- 列表 -->
    	<div v-for="(item,index) in sb">
		  	<div class="goods">
		  		
  				<div class="img">
  					<img :src="img[index]" alt="">{{item.src}}
  				</div>
  				<div class="product_name">{{cloth_name[index]}}</div>
  				<div class="order_number">数量:{{item.number}}</div>
  				<div class="order_money">颜色:<span>
            <el-color-picker v-model="item.color"></el-color-picker>
              </span>
          </div>
          <div class="order_money">单价:{{item.price}}</div>
          <div class="order_money">总价格:{{item.price*item.number}}</div>
          <div class="order_money" style="width:100px;">{{item.status}}</div>
  				<div class="order_money" style="width:400px;">{{item.Address}}</div>
  				<div class="btn" style="margin-left:50px;" v-if="item.ifshow"><el-button type="success" round id="btn_by" @click="toBye(item.id)">购买</el-button></div>
  				<div class="btn"><el-button type="danger" round id="btn_delete" @click="toDelete(item.id)">删除</el-button></div>
			</div>
		</div>
	   <div class="bbq" style="height:50px;width:100%"></div>
     <!-- 确认购买的弹框提示 -->
     <el-dialog
      title="提示"
      :visible.sync="goumai_dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-select name="type_id" v-model="address_id" placeholder="请选择收货地址">
                <li v-for="item in allAddress">
                  <el-option :value="item.id">{{item.name+"      "+item.address+" "+item.tel}}</el-option>
                </li>       
              </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="goumai_dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toJiesuan">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 支付宝，微信支付二维码-->
    <el-dialog
      title="请扫二维码支付"
      :visible.sync="A_dialogVisible"
      width="55%"
      :before-close="handleClose">
      <span><img src="../../static/微信支付.png" width="340px" height="420px" alt=""></span>
      <span><img src="../../static/支付宝.jpg" width="340px" height="420px" alt=""></span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" plain @click="toAccess" id="yijngfukuan">已经付款</el-button>
      </span>

    </el-dialog>
    <!-- 确定删除？ -->
    <el-dialog
        title="提示"
        :visible.sync="delete_dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>你确定要删除吗</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="delete_dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="real_delete(delete_id);">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog
        title="提示"
        :visible.sync="huanying"
        width="30%"
        :before-close="handleClose">
        <span>欢迎来到购物车页面</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="huanying = false">取 消</el-button>
          <el-button type="primary" @click="huanying = false">确 定</el-button>
        </span>
      </el-dialog>
	<div class="bottom">
		
	   
		<div id="sum_money">合计:{{sum_price}}元</div>
		<div id="btn"><el-button type="danger" id="toBy" @click="toJiesuan">结算</el-button></div>
	</div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
import store from '../store/index'
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
export default {
  name: 'Gouwuche',
   computed:{
      ...mapGetters(['man_clothes','woman_cloth'])
  },
  created(){
    this.userName = this.$route.params.username;
    this.findUserByName();
    this.sb =Array.from(this.sb); 
  },
  data () {
    return {
      delete_id:'',
      delete_dialogVisible:false,
      goumai_dialogVisible:false,
      A_dialogVisible:false,
      userName:'',
      user_id:'',
    	sb:[],
      img:[],
      cloth_name:[],
      sum_price:0,
      fukunOrder_id:'',
      allAddress:[],
      address_id:'',
      addess:[],
      huanying:false
    }
  },
  methods:{
      toJiesuan(){
          this.goumai_dialogVisible = false;
          this.A_dialogVisible = true;  
          console.log("this.address_id",this.address_id);
          if(this.allAddress&&this.address_id==undefined){
            this.findUserByName();
          }     
      },
      findUserByName(){
        var vmm = this;
        axios.post('http://39.107.228.71:3000/user/findByName',{name:JSON.stringify(this.userName)}).then(({data})=>{
          var sb = Array.from(data);
            this.user_id = sb[0].id;
            vmm.findall_gouwuche();
            vmm.findAllMyAddress();
          })
      },
	   findall_gouwuche(){
      this.huanying =true;
        var vm = this;
        // console.log("this.user_id",this.user_id);
        axios.post('http://39.107.228.71:3000/order/findAll',{user_id:JSON.stringify(this.user_id)}).then(({data})=>{
          vm.sb = Array.from(data);
          // var result = this.sb;
          vm.sum_price = 0;
          vm.sb.forEach(function(item,index){
            var _index = index;
            vm.findCloth(item.cloth_id,vm.sb[_index]);
            if(item.status=='未付款'){
              vm.sum_price+=Number(item.price)*Number(item.number);
              item.ifshow =true;
            }else{
              item.ifshow =false;
            }
          })

          vm.sb.forEach(function(item,index){
            if(item.address_id!=null){
                axios.post('http://39.107.228.71:3000/user_address/findById',{address_id:JSON.stringify(item.address_id),user_id:JSON.stringify(vm.user_id)}).then((data)=>{
                  console.log('result',data.data[0]); 
                  var Address = data.data[0].name+" "+data.data[0].address+" "+data.data[0].tel;
                  item.Address=Address;
                }).catch((error)=>{
                  
                })
            }else{
               item.Address="";
            }
          })
        })
      },
      findCloth(id,arr){
        var vm = this;
        axios.post('http://39.107.228.71:3000/clothes/findId',{cloth_id:JSON.stringify(id)}).then((result)=>{
          var res = Array.from(result.data);
              vm.cloth_name.push(res[0].name);
              vm.img.push(res[0].src);      
        }).catch((error)=>{
          
        })
      },
      toBye(id){
        this.goumai_dialogVisible = true;
        this.fukunOrder_id =id;
      },
      toDelete(id){
        this.delete_dialogVisible = true;
        this.delete_id = id;
      },
      real_delete(id){
        this.delete_dialogVisible = false;
        var vm = this;
        axios.post('http://39.107.228.71:3000/order/batchDelete',{ids:JSON.stringify(id)}).then((result)=>{
           vm.$message({
              showClose: true,
              type: 'success',
              message: '删除成功!'
            });
          this.findall_gouwuche();
        }).catch((error)=>{
          vm.$message({
              showClose: true,
              type: 'warning',
              message: '删除失败!'
            });
        })
      },
      toAccess(){
        this.A_dialogVisible = false;
        var vm = this;
        axios.post('http://39.107.228.71:3000/order/fukuan',{id:JSON.stringify(this.fukunOrder_id),address_id:JSON.stringify(this.address_id)}).then((result)=>{
           vm.$message({
              showClose: true,
              type: 'success',
              message: '付款成功!'
            });
          this.findall_gouwuche();
        }).catch((error)=>{
          vm.$message({
              showClose: true,
              type: 'warning',
              message: '付款失败!'
            });
        })
      },
      findAllMyAddress(){
        axios.post('http://39.107.228.71:3000/user_address/findAll',{user_id:JSON.stringify(this.user_id)}).then((result)=>{
              
             this.allAddress =Array.from(result.data);
             console.log("this.allAddress",this.allAddress);
          }).catch((error)=>{
            
            // this.$router.push({name:'MyInfor',params:{username:this.userName}});
          })
      }
    }
}
</script>

<style scoped>
	@import '../../static/css/gouwuche.css'	
</style>
