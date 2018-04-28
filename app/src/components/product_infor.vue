<template>
  <div class="product">
    <!-- 导航栏 -->
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
                  v-model="query" style="width:500px;">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                </el-menu-item>
                
              </el-menu>
              </div>
          </el-col>
          
        </el-row>
    </div>
      
    <hr style="width:100%;background-color:#9D9D9D;">

  <!-- 商品信息 -->
<div class="content">

  <h1>增哥定制，为你量身定做，包你满意</h1>

    <div class="container">

      <h2>{{product.name}}</h2>
        <!-- 商品图片 -->
      <div class="product">
        <div class="product-image">
          <img v-bind:src="product.src" alt="Ferrari">
        </div>


        <!-- 商品的定制细节 -->
        <div class="product-info">
          <p><span>设计师</span>{{designername}}</p>
          <p><span>男/女</span>{{product.gender}}</p>
            
        <p><span>布料</span>
            <select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"flat"}'>
              <option value="1">纯棉</option>
              <option value="2">麻</option>
              <option value="3">腈纶</option>
              <option value="4">牛仔布</option>
            </select>
          </p>
          <p><span>尺寸</span>
            <select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"flat"}'>
              <option value="1">S</option>
              <option value="2">M</option>
              <option value="3">L</option>
              <option value="4">XL</option>
            </select>
          </p>
          <p><span>颜色</span>
            <el-color-picker v-model="order.color"></el-color-picker>
          </p>
          <p><span>数量</span><el-input-number v-model="order.number" controls-position="right" @change="handleChange" :min="1" :max="10" size="small"></el-input-number></p>
          <p><span>价格</span>${{product.price}}</p>



          <div class="cart" @click="to_by"><div id="btn_submit">订起来</div></div>
        </div>
        <div class="clear"></div>
      </div>

      <div class="accordion">
        <section class="ac-container">
          <div>
            <input id="ac-1" name="accordion-1" type="checkbox" />
            <label for="ac-1">我想要的风格</label>
              <article class="ac-medium">
                <el-input
                  type="textarea"
                  min-height="100px"
                  :autosize="{ minRows: 6, maxRows:8}"
                  placeholder="请输入内容"
                  v-model="style">
                </el-input>
              </article>
          </div>
          <div>
            <input id="ac-2" name="accordion-1" type="checkbox" /> 
          </div>
          <div>
            <input id="ac-3" name="accordion-1" type="checkbox" />
            <label for="ac-3">我想要的设计细节</label>
              <article class="ac-medium">
                <el-input
                  type="textarea"
                  min-height="100px"
                  :autosize="{ minRows: 6, maxRows: 8}"
                  placeholder="请输入内容"
                  v-model="details">
                </el-input>
              </article>
          </div>
          <div>
            <input id="ac-4" name="accordion-1" type="checkbox" />
            <label for="ac-4">设计理念</label>
            <article class="ac-medium">
              <el-input
                  type="textarea"
                  min-height="100px"
                  :autosize="{ minRows: 6, maxRows: 8}"
                  placeholder="请输入内容"
                  v-model="xijie">
                </el-input>
            </article>
          </div>
        </section>
      </div>

    </div>
    
  </div>
  
  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>你确定要添加到购物车吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="shopping">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import axios from 'axios'
  export default {
  name: 'Product',
  created(){
    this.userName = this.$route.params.username;
    this.clothId = this.$route.params.cloth_id;
    console.log("this.userName",this.userName);
    console.log("clothId",this.clothId);
    this.findCloth();
    this.finduserId();
  },
  data() {
    return {
      dialogVisible:false,
      userName:'',
      clothId:'',
      product:'',
      designername:'',
      order:{
        number:'',
        style:'',
        details:'',
        price:'',
        user_id:'',
        cloth_id:"",
        address:'',
        date:'',
        color:'#fff'
      }
    }  
  },
  methods:{
  async findCloth(){
      var vm = this;
      axios.post('http://localhost:3000/clothes/findById',{id:JSON.stringify(this.clothId)}).then((result)=>{
          console.log("result",result);
          vm.product =result.data[0];
          vm.findDesigner();
        }).catch((error)=>{
          console.log(error);
      })
    },
    findDesigner(){
        axios.post('http://localhost:3000/designer/findById',{id:JSON.stringify(this.product.designer_id)}).then((data)=>{
          console.log('Array.from(data.data)[0].name',Array.from(data.data)[0].name);
          this.designername = Array.from(data.data)[0].name;
          console.log('Array.from(data.data)[0].name',Array.from(data.data)[0].name);

        }).catch((error)=>{
          
          // console.log(error);
      })
    },
    finduserId(){
      axios.post('http://localhost:3000/user/findByName',{name:JSON.stringify(this.userName)}).then((data)=>{
          console.log('data.data',data.data);
          this.order.user_id = Array.from(data.data)[0].id;
          console.log('this.order.user_id',this.order.user_id);

        }).catch((error)=>{
          
          // console.log(error);
      })
    },
    to_by(){
      this.finduserId();
      this.dialogVisible=true;
    },
    shopping(){
      this.dialogVisible=false;
      this.order.cloth_id = this.clothId;
      this.order.price = this.product.price;
      var vm = this;
      axios.post('http://localhost:3000/order/save',{order:JSON.stringify(this.order)}).then((result)=>{
          this.$router.push({name:'Gouwuche',params:{user_id:vm.order.user_id,username:this.userName}});
        }).catch((error)=>{
          console.log(error);
        })
    }
  }
}

</script>

<style scoped>
  @import '../../static/css/product_infor.css'
</style>
