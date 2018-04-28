s<template>
  <div class="designers">
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
                v-model="query" style="width:500px;">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
              </el-menu-item>
              
            </el-menu>
            </div>
        </el-col>
        
      </el-row>
    <hr style="width:100%;background-color:#9D9D9D;">
    
    <hr style="width:100%;background-color:#FFFAF0;type:t">

     <!-- 设计师列表 -->
  <div class="container">
      <div id="cbp-pgcontainer" class="cbp-pgcontainer">
        <ul class="cbp-pggrid">
          <li v-for="item in designers">
            <div class="cbp-pgcontent" >
              <div class="cbp-pgitem">
                <div class="cbp-pgitem-flip">
                  <img :src=item.img ><a href=""></a>
                </div>
              </div>
              <ul class="cbp-pgoptions">
                <li style="width:60px;">{{item.name}}</li>
                <li style="width:60px;">{{item.gender}}</li>
                <li style="width:200px;">联系方式:{{item.tel}}</li>
              </ul>
            </div>
            <div class="discribe">
              <el-collapse accordion>
                <el-collapse-item title="描述">
                  <div style="color:red;font-size:26px;">{{item.describes}}</div>
                </el-collapse-item>    
                </el-collapse>
            </div>
            <div class="cbp-pginfo">
              <span style="width:50%;background-color:#fa11b0;text-align:center;cursor:pointer" @click="to_by(item.id)">看他的作品</span>
              <span style="width:40%;color:#fa11b0;text-align:center;cursor:pointer" >喜欢TA</span>
            </div>
          </li>
          
        </ul><!-- /cbp-pggrid -->
      </div><!-- /cbp-pgcontainer -->
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex';
import store from '../store/index'
export default {
  name: 'Designers',
  computed:{
      ...mapGetters(['designers'])
  },
  created(){
      var that = this;
      that.userName = this.$route.params.username;
      // this.findAllType();
      this.findAllDesigners();
      
  },
  data () {
    return {
      pinpai:['西装','西装','西装','西装','西装'],
      money:['0-100','0-100','0-100','0-100','0-100'],
      userName:'',
      Man_clothes:""
    }  
  },
  methods:{
    ...mapActions([
        'findAllDesigners'
    ]),
    to_by(designer_id){
        axios.post('http://localhost:3000/clothes/findByDesignerId',{designer_id:JSON.stringify(designer_id)}).then((result)=>{
          resolve(result);
        }).catch((error)=>{
          reject(error);
        })
    }
  }
}
</script>
  
<style scoped>
@import '../../static/css/designers_show.css'

</style>
