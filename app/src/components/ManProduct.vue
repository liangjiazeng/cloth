s<template>
  <div class="man">
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
              <el-menu-item index="4">设计师专区</el-menu-item>
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
    
<!-- 小图标 -->
    <el-row>
      <el-col :span="4" >
        <div class="grid-content bg-purple-dark" @click="findXizhuang_Mancloth">
          <div class="content">
            <img src="../../static/男_西装_type.png" alt="" >
            <figure>
              <figcaption>西装</figcaption>
            </figure>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark" @click="findChenshan_Mancloth">
          <div class="content">
            <img src="../../static/男_衬衫_type.png" alt="">
              <figure>
                <figcaption>衬衫</figcaption>
              </figure>
          </div>   
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark" @click="findWaitao_Mancloth">
          <div class="content">
            <img src="../../static/男_外套_type.png" alt="" >
            <figure>
              <figcaption>外套</figcaption>
            </figure>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark" @click="findMaoyi_Mancloth">
          <div class="content">
              <img src="../../static/男_毛衣_type.png" alt="">
              <figure>
                <figcaption>毛衣</figcaption>
              </figure>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark" @click="findTxu_Mancloth">
          <div class="content">
            <img src="../../static/男_T恤_type.png" alt="" >
              <figure>
                <figcaption>T恤</figcaption>
              </figure>
          </div>    
        </div>
      </el-col>
    </el-row>

    <!-- 分类 -->
  <div class="type">
      <ul>
        <li>分类：</li>
        <li v-for="item in man_type" @click="find_Mancloth_Bystyle(item.id)">{{item.name}}</li>
      </ul>
  </div>
    <hr style="width:100%;background-color:rgba(246,239,239,0.2);">
  <div class="pinpai">
      <ul>
        <li>设计师：</li>
        <li v-for="item in designers" @click="find_Mancloth_ByDesigner(item.id)">{{item.name}}</li>
      </ul>
  </div>
    <hr style="width:100%;background-color:#FFFAF0;">
  <div class="money">
      <ul>
        <li>价格区间：</li>
        <li v-for="item in money">{{item}}</li>
      </ul>
  </div>
    <hr style="width:100%;background-color:#FFFAF0;type:t">

     <!-- 商品列表 -->
  <!-- 产品列表 -->
  <div class="banner">
    <!-- cart's-Product-Display -->
    <div class="wthreeproductdisplay">
      <div class="container">
        <div class="top-grid" v-for="item in man_clothes" :key="item">
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
                <div type="" class="button w3l-cart" data-id="cart-1" @click="to_by(item.id,userName)">立即定制</div>
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
  name: 'Man',
  computed:{
      ...mapGetters(['type','man_type','woman_type','man_clothes','designers'])
  },
  created(){
      // this.findAllType();
      this.findManType();
      this.find_Mancloth();
      this.findAllDesigners();
      this.userName = this.$route.params.username;
      console.log("this.userName",this.userName);
     
  },
  data () {
    return {
      dialogVisible:false,
      userName:"",
      pinpai:['西装','西装','西装','西装','西装'],
      money:['0-100','0-100','0-100','0-100','0-100'],
      Man_clothes:""
    }  
  },
  methods:{
    ...mapActions([
        'findAllType',
        'findManType',
        'findManClothes',
        'findManClothes_duanxiu',
        'findManClothes_xizhuang',
        'findManClothes_chenshan',
        'findManClothes_waitao',
        'findManClothes_maoyi',
        'findManClothes_Txu',
        'findAllDesigners',
        'findManClothesByDesigner',
        'selectQuery'
    ]),
    find_Mancloth:function(){
        this.findManClothes().then(function(datas){
           this.Man_clothes = datas;
        }).catch(function(error){
            console.log("错误",error);
        });
    },
    findXizhuang_Mancloth:function(){
        this.findManClothes_xizhuang().then(function(datas){
             console.log("西装男",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    findChenshan_Mancloth:function(){
         this.findManClothes_chenshan().then(function(datas){
             console.log("衬衫男",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    findMaoyi_Mancloth:function(){
         this.findManClothes_maoyi().then(function(datas){
             console.log("毛衣男",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    findWaitao_Mancloth:function(){
         this.findManClothes_waitao().then(function(datas){
             console.log("外套男",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    findTxu_Mancloth:function(){
       this.findManClothes_Txu().then(function(datas){
             console.log("T恤男",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    findDuanxiu_Mancloth:function(){
       this.findManClothes_duanxiu().then(function(datas){
             console.log("短袖男",datas);

        }).catch(function(error){
            console.log("错误",error);
        });
    },
    find_Mancloth_Bystyle(type_id){
      console.log('type_id',type_id);
      switch(type_id){
          case 1:
                this.findDuanxiu_Mancloth();break;
          case 2:
                this.findXizhuang_Mancloth();break;
          case 3:
                this.findChenshan_Mancloth();break;
          case 4:
                this.findWaitao_Mancloth();break;
          case 5:
                this.findMaoyi_Mancloth();break;
          case 6:
                this.findTxu_Mancloth();break;
      }
    },
    find_Mancloth_ByDesigner(designer_id){
        this.findManClothesByDesigner(designer_id);
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
      console.log("this.query",this.query)
      this.selectQuery(this.query);
    }
  }
}
</script>
  
<style scoped>
@import '../../static/css/man_product.css'

</style>
