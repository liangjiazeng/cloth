<template>
  <div id="app">
    <!-- 背景视频 -->
    <video autoplay muted loop>
      <source src='../../static/梦境群像光束特效.mp4'>
    </video>
   <p id="welcome">私人订制</p>
   <p id="weiyi">为你量身定做属于你的唯一</p>

    <!-- 登录 -->
    <transition  
      enter-active-class='animated bounceInLeft' 
      >
    <div class="login" v-show="login" style="color:white">
        <p style="color: white;
            text-align: center;
            margin-bottom:20px;
            color: #fff;
            font-size: 1.5em;
            margin-top:20px;
            text-transform: uppercase;
            letter-spacing: 20px;
            /*margin: 1.5em 0 1em;*/
            font-family: 'Roboto Slab', serif;">登录</p>
        <el-form :model="ruleForm1" status-icon  ref="ruleForm2" label-width="10px" class="demo-ruleForm">
          <el-form-item label="" prop="username" required id="login_username">
            <div class="left">
               <span style="color:red">*</span><span style="text-align:right">用户名</span>
            </div>
            <div class="right">
              <el-input type="text" v-model="ruleForm1.username" auto-complete="off" style="width:230px"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="password" required id="login_password">
            <div class="left">
               <span style="color:red">*</span><span style="text-align:right">密 &nbsp;&nbsp;码</span>
            </div>
            <div class="right">
              <el-input type="password" v-model="ruleForm1.password" auto-complete="off" style="width:230px"></el-input>
            </div>
            
          </el-form-item>
             <!-- 角色选择 -->
            <div class="rule">
              <el-radio v-model="ruleForm1.rule" label="普通用户">普通用户</el-radio>
              <el-radio v-model="ruleForm1.rule" label="设计师">设计师</el-radio>
            </div>
            <div class="btn">
                <el-form-item>
                  <el-button type="primary" @click="user_login" id="login_login">登录</el-button>
                    <el-button @click="regester=!regester,login=!login" id="login_regesiter">注册</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
    </transition>

    <!--登录错误提示信息 -->
    
    <div class="msg" style="color: #fff">
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny"
        >
        <span>{{Title}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
     
<!-- 注册 -->
<transition  
      enter-active-class='animated bounceInRight' 
      leave-active-class='animated bounceOutRight'>
     <div class="regester demonstration" v-show="regester" >
       <p style="color: white;
            text-align: center;
            color: #fff;
            font-size: 1.5em;
            margin-bottom:20px;
            text-transform: uppercase;
            letter-spacing: 20px;
            /*margin: 1.5em 0 1em;*/
            font-family: 'Roboto Slab', serif;">注册</p>

            <div class="rule">
              <el-radio v-model="ruleForm2.rule" label="普通用户" >普通用户</el-radio>
              <el-radio v-model="ruleForm2.rule" label="设计师" >设计师</el-radio>
            </div>

        <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="0px" class="demo-ruleForm">
          <el-form-item label="" prop="username" required id="regesiter_username">
            <div class="left">
              <span style="color:red">*</span><span>用户名&nbsp;</span>
            </div>
            <div class="right">
              <el-input type="text" v-model="ruleForm2.username" auto-complete="off" style="width:250px"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="pass" required id="regesiter_password">
            <div class="left">
              <span style="color:red">*</span><span>密 &nbsp;码&nbsp;</span>
            </div>
            <div class="right">
               <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" style="width:250px"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="" prop="checkPass" required id="regesiter_repassword">
            <div class="left">
              <span style="color:red">*</span><span>确认密码</span>
            </div>
            <div class="right">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" style="width:250px"></el-input>
            </div>
          </el-form-item>
           <el-form-item label="" prop="checkPass" required id="regesiter_tel">
            <div class="left">
               <span style="color:red">*</span><span>手机号</span>
            </div>
            <div class="right">
              <el-input type="password" placeholder="请输入手机号" v-model="ruleForm2.telphone" auto-complete="off" pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$" style="width:250px"></el-input>
            </div>
          </el-form-item> 
          <template>
            <div style="margin:20px 0;">
             <template>
                <el-radio v-model="ruleForm2.gender" label="男" border size="medium">男</el-radio>
                <el-radio v-model="ruleForm2.gender" label="女" border size="medium">女</el-radio>
              </template>
            </div>  
            </template>    
          <div class="block" style="margin-bottom:20px;">
            <span class="demonstration">生日</span>
            <el-date-picker
              v-model="ruleForm2.birth"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="btn">
            <el-form-item>
              <el-button type="primary" @click="user_regester" id="regesiter_submit">提交</el-button>
              <el-button @click="resetForm()" id="regesiter_reset">重置</el-button>
              <el-button @click='regester=!regester,login=!login' id="regesiter_quxiao">取消</el-button>
            </el-form-item>
          </div>
          
        </el-form>
    </div>
    </transition>
  </div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    ...mapGetters(['users'])
  },
  data () {
    return {
      dialogVisible: false,
      Title:'',
      msg:'',
      regester:false,
      login:true,
      ruleForm2:{
          rule:"普通用户",
          pass: '',
          checkPass: '',
          gender:'',
          username:'',
          birth:'',
          telphone:''
        },
      ruleForm1:{
          rule:"普通用户",
          username:'',
          password:''
      }

  }  
},
methods:{
    ...mapActions([
        'findAllUsers',
        'userlogin',
        'saveUser',
        'DesignersLogin',
        'saveDesigners'
      ]),
    user_login:function() {
          var name = this.ruleForm1.name;
          var user_rule = this.ruleForm1.rule;
          var password = this.ruleForm1.password;
          var vm = this;
          if(user_rule=="普通用户"){
              this.userlogin(this.ruleForm1).then(function(data){
                if(data.data[0]!=undefined){
                      vm.open2();
                      vm.$router.push({name:'HelloWorld',params:{username:vm.ruleForm1.username}})
                 }else{
                    vm.Title ="用户名密码不正确，请重新登录!"
                    vm.dialogVisible= true;
                 }               
              }).catch(function(error){
                   console.log("错误"+error);
                    vm.Title ="用户名密码不正确，请重新登录!"
                    vm.dialogVisible= true;
              });
          }else{
            //设计师登录
              this.DesignersLogin(this.ruleForm1).then(function(data){
                 if(data.data[0]!=undefined){
                    vm.open2();
                    vm.$router.push({name:'DesignerInfor',params:{username:vm.ruleForm1.username}})
                 }else{
                    this.$message({
                      message: '恭喜你登录成功',
                      type: 'success'
                    });
                 }
              }).catch(function(error){
                   console.log("错误"+error);
                    vm.Title ="用户名密码不正确，请重新登录!"
                    vm.dialogVisible= true;
              });
          }
      },
      open2() {
        this.$message({
          message: '恭喜你登录成功',
          type: 'success'
        });
      },
      resetForm() {
        this.$refs[ruleForm1,ruleForm2].resetFields();
      },
      user_regester:function(){
          var name = this.ruleForm2.username;
          var user_rule = this.ruleForm2.rule;
          var password= this.ruleForm2.pass;
          var repass = this.ruleForm2.checkPass;
          var gender= this.ruleForm2.gender;
          var birth= this.ruleForm2.birth;
              birth = birth.toLocaleDateString();
          var telphone= this.ruleForm2.telphone;
          var vm = this;
          if(password!=repass){
              vm.Title ="两次密码不正确,请重新输入!"
                    vm.dialogVisible= true;
          }else{
            var user ={
                name:name,
                password:password,
                gender:gender,
                birth:birth,
                telphone:telphone
            }
            if(user_rule == "普通用户"){
                this.saveUser(user).then(function(result){
                    vm.dialogVisible=true;
                    vm.Title = "注册成功";
                    vm.regester = false;
                    vm.login = true;
                }).catch(function(error){
                      vm.Title ="注册失败，请重新注册!"
                      vm.dialogVisible= true;
                });
                // 如果是设计师就注册到设计师的表中
            }else{
                this.saveDesigners(user).then(function(result){
                  console.log(result.data);
                  if(result.data.insertId){
                      vm.dialogVisible=true;
                      vm.Title = "注册成功";
                      vm.regester = false;
                      vm.login = true;
                  }else{
                      vm.Title ="注册失败，请重新注册!"
                      vm.dialogVisible= true;
                      console.log("插入失败");
                      console.log(error);
                  }   
                }).catch(function(error){
                      vm.Title ="注册失败，请重新注册!"
                      vm.dialogVisible= true;
                    console.log("插入失败");
                    console.log(error);
                });
            }
        }
      }
    }
  }
</script>

<style scoped>
  @import '../../static/css/login.css'

</style>
