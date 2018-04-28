import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Man from '@/components/ManProduct'
import Woman from '@/components/woman_product'
import MyInfor from '@/components/myInfor'
import user_infor from '@/components/user_infor'
import Product from '@/components/product_infor'
import DesignerInfor from '@/components/designer_infor'
import Designers from '@/components/Designers_show'
import Gouwuche from '@/components/gouwuche'
import AllProduct from '@/components/all_Product'
import Admin from '@/components/adminManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/login',
    	name:'Login',
    	component:Login
    },
    {
      path:'/man',
      name:'Man',
      component:Man
    },
    {
      path:'/woman',
      name:'Woman',
      component:Woman
    },
    {
      path:'/my',
      name:'MyInfor',
      component:user_infor
    },
    {
      path:'/product_infor',
      name:'Product',
      component:Product
    },
    {
      path:'/designer_infor',
      name:'DesignerInfor',
      component:DesignerInfor
    },
    {
      path:'/designers',
      name:'Designers',
      component:Designers
    },
    {
      path:'/gouwuche',
      name:'Gouwuche',
      component:Gouwuche
    },
    {
      path:'/all',
      name:'AllProduct',
      component:AllProduct
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
    }
  ],
    mode:"history"
})
