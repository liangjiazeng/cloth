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
                v-model="query" style="width:500px;"  @keyup.enter.native="show">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
              </el-menu-item>
              
            </el-menu>
            </div>
        </el-col>
        
      </el-row>
    <hr style="width:100%;background-color:#9D9D9D;">
    
    <!-- 类型列表 -->
  
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark" @click="FindWomanCloth_xizhuang">
          <div class="content">
            <img src="../../static/女_西装_type.png" alt="" >
            <figure>
              <figcaption>西装</figcaption>
            </figure>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark" @click="FindWomanCloth_chenshan">
          <div class="content">
            <img src="../../static/女_衬衫_type.png" alt="" >
              <figure>
                <figcaption>衬衫</figcaption>
              </figure>
          </div>    
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark" @click="FindWomanCloth_qunzi">
          <div class="content">
            <img src="../../static/女_裙子_type.png" alt="">
              <figure>
                <figcaption>裙子</figcaption>
              </figure>
          </div>   
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark" @click="FindWomanCloth_waitao">
          <div class="content">
            <img src="../../static/女_外套_type.png" alt="" >
            <figure>
              <figcaption>外套</figcaption>
            </figure>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark" @click="FindWomanCloth_maoyi">
          <div class="content">
              <img src="../../static/女_毛衣_type.png" alt="">
              <figure>
                <figcaption>毛衣</figcaption>
              </figure>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark" @click="FindWomanCloth_kuzi">
          <div class="content">
            <img src="../../static/女_裤子_type.png" alt="" >
              <figure>
                <figcaption>裤子</figcaption>
              </figure>
          </div>    
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-dark" @click="FindWomanCloth_qipao">
          <div class="content">
            <img src="../../static/女_旗袍_type.png" alt="" >
              <figure>
                <figcaption>旗袍</figcaption>
              </figure>
          </div>    
        </div>
      </el-col>
    </el-row>
  <div class="type">
      <ul>
        <li >分类：</li>
        <li v-for="item in woman_type" :key="item" style="cursor:pointer"><a @click="toFin(item.id)">{{item.name}}</a></li>
      </ul>
  </div>
    <hr style="width:100%;background-color:rgba(246,239,239,0.2);">
  <div class="pinpai">
      <ul>
        <li>设计师：</li>
        <li v-for="item in designers" @click="find_Womancloth_ByDesigner(item.id)">{{item.name}}</li>
      </ul>
  </div>
    <hr style="width:100%;background-color:#FFFAF0;">
  <div class="money">
      <ul>
        <li>价格区间：</li>
        <li v-for="item in money"><a href="">{{item}}</a></li>
      </ul>
  </div>
    <hr style="width:100%;background-color:#FFFAF0;type:t">



<!-- 产品列表 -->
  <div class="banner">
    <!-- cart's-Product-Display -->
    <div class="wthreeproductdisplay">
      <div class="container">
        <div class="top-grid" v-for="item in woman_cloth" :key="item">
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





  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
import store from '../store/index'
export default {
  name: 'Woman',
  computed:{
      ...mapGetters(['type','woman_type','woman_cloth','designers'])
  },
  created(){
    this.userName = this.$route.params.username;
    this.Find_Womancloth();
    this.findWomanType();
    this.findAllDesigners();
  },
  data () {
    return {
      userName:"",
      money:['0-100','101-200','201-300','301-400','401-500']
    }  
  },
  methods:{
    ...mapActions([
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
        'findAllDesigners',
        'findWomanClothesByDesigner',
        'selectQuery'
    ]),
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
    toFin(id){
      console.log(id);
      switch(id){
        case 7: 
            console.log("7");
            this.findWomanClothes_xizhuang();
            break;
        case 8: 
            console.log("8");
            this.findWomanCloth_qunzi();
            break;
        case 9: 
            console.log("9");
            this.findWomanCloth_waitao();
            break;
        case 10: 
            console.log("10");
            this.findWomanCloth_maoyi();
            break;
        case 11: 
            console.log("11");
            this.findWomanCloth_kuzi();
            break;
        case 12:
          console.log("12");
          this.findWomanCloth_chenshan();
          break;
        case 13: 
          console.log("13");
          this.findWomanCloth_qipao();
          break;
      }
        
    },
    FindWomanCloth_chenshan:function(){
         this.findWomanCloth_chenshan()
    },
    
    FindWomanCloth_qunzi:function(){
         this.findWomanCloth_qunzi();
    },
   
    FindWomanCloth_waitao:function(){
         this.findWomanCloth_waitao();
    },
    FindWomanCloth_maoyi:function(){
       this.findWomanCloth_maoyi();
    },
    FindWomanCloth_qipao:function(){
       this.findWomanCloth_qipao();
    },
    FindWomanCloth_kuzi:function(){
       this.findWomanCloth_kuzi();
    },
    find_Womancloth_ByDesigner(designer_id){
        this.findWomanClothesByDesigner(designer_id);
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
@import '../../static/css/woman_product.css'

</style>
