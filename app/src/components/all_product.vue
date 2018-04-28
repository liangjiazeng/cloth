ss<template>
  <div class="woman">
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
                <el-input
                placeholder="请输入内容"
                v-model="query" style="width:500px;" @keyup.enter.native="show">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
              </el-menu-item>
              
            </el-menu>
            </div>
        </el-col>
        
      </el-row>
    <hr style="width:100%;background-color:#9D9D9D;">
    
    <!-- 类型列表 -->
    
   
  <div class="type">
      <ul>
        <li >分类：</li>
        <li v-for="item in type" :key="item" style="cursor:pointer"><a @click="toFin(item.name,item.gender)">{{item.name+item.gender}}</a></li>
      </ul>
  </div>
    <hr style="width:100%;background-color:rgba(246,239,239,0.2);">
  <div class="pinpai">
      <ul>
        <li>设计师：</li>
        <li v-for="item in designers"><a href="">{{item.name}}</a></li>
      </ul>
  </div>
    <hr style="width:100%;background-color:#FFFAF0;">
  <div class="money">
      <ul>
        <li>价格区间：</li>
        <li v-for="item in money"><a href="">{{item}}</a></li>
      </ul>
  </div>
    <hr style="width:100%;background-color:#FFFAF0;">



<!-- 产品列表 -->
  <div class="banner">
    <!-- cart's-Product-Display -->
    <div class="wthreeproductdisplay">
      <div class="container">
        <div class="top-grid" v-for="item in clothes" :key="item">
          <div class="cart-grid" id="cart-1">
            <div class="img">
              <img :src="item.src" alt="img">
            </div>
            <ul class="info">
              <li>{{item.name}}</li>
              <li class="right-text">{{item.price}}</li>
            </ul>
            <div class="snipcart-details ">
              <form action="#" method="post">
                <input type="hidden" name="cmd" value="_cart">
                <input type="hidden" name="add" value="1">
                <input type="hidden" name="w3l_item" value="Striped Top ">
                <input type="hidden" name="amount" value="25.00">
                <input type="hidden" name="item_name" value="Product #001" />
                <div type="" class="button w3l-cart" data-id="cart-1" @click="to_by(item.id)">立即定制</div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>    
  </div>


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
export default {
  name: 'Woman',
  computed:{
      ...mapGetters(['type','woman_type','woman_cloth','designers','clothes'])
  },
  created(){
    this.FindAllClothes();
    this.Find_Womancloth();
    this.findAllType();
    this.findAllDesigners();
    this.userName = this.$route.params.username;
    console.log("all_product里面的this.userName",this.userName);
  },
  data () {
    return {
      userName:"",
      money:['0-100','101-200','201-300','301-400','401-500']
    }  
  },
  methods:{
    ...mapActions([
        'findAllClothes',
        'findAllType',
        'findWomanType',
        'findWomanClothes',
        'findWomanClothes_xizhuang',
        'findWomanCloth_chenshan',
        'findWomanCloth_qunzi',
        'findWomanCloth_waitao',
        'findWomanCloth_maoyi',
        'findWomanCloth_qipao',
        'findWomanCloth_kuzi',
        'findManClothes_duanxiu',
        'findManClothes_xizhuang',
        'findManClothes_chenshan',
        'findManClothes_waitao',
        'findManClothes_maoyi',
        'findManClothes_Txu',
        'findAllDesigners',
        'selectQuery',
        'findClothbytypeName_Gneder'
    ]),
    FindAllClothes(){
      this.findAllClothes();
    },
    Find_Womancloth:function(){
        this.findWomanClothes().then(function(datas){
          console.log("Woman_衣服",datas)
        }).catch(function(error){
            console.log("错误",error);
        });
    },
    FindWomanCloth_xizhuang:function(){
        this.findWomanClothes_xizhuang().then(function(datas){
             console.log("西装女",datas);
        }).catch(function(error){
            console.log("错误",error);
        });
    },
    toFin:function(name,gender){
      var obj ={
          name:name,
          gender:gender
      }
      this.findClothbytypeName_Gneder(obj,gender);
    },
    FindWomanCloth_chenshan:function(){
         this.findWomanCloth_chenshan().then(function(datas){
             console.log("衬衫女",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    
    FindWomanCloth_qunzi:function(){
         this.findWomanCloth_qunzi().then(function(datas){
             console.log("裙子",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
   
    FindWomanCloth_waitao:function(){
         this.findWomanCloth_waitao().then(function(datas){
             console.log("外套女",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    FindWomanCloth_maoyi:function(){
       this.findWomanCloth_maoyi().then(function(datas){
             console.log("毛衣女",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    FindWomanCloth_qipao:function(){
       this.findWomanCloth_qipao().then(function(datas){
             console.log("旗袍女",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    FindWomanCloth_kuzi:function(){
       this.findWomanCloth_kuzi().then(function(datas){
             console.log("裤子女",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    to_by(cloth_id,username){
      console.log("username",username);
      if(username!=undefined){
        this.$router.push({name:'Product',params:{cloth_id:cloth_id,username:username}});
      }else{
        this.dialogVisible = true;
      }
      
    },
    gotoby(){
        this.dialogVisible = false;
        this.$router.push({name:'Login'});

    },
    show(){
      this.selectQuery(this.query);
    }
  }
}
</script>
  
<style scoped>
@import '../../static/css/all_product.css'

</style>
