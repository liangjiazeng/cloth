require('babel-polyfill');

let express = require('express');
let route = express.Router();
let DesignerDB = require('../db/DesignerDB');
let Designer = require('../model/Cloth_designer')
//查询所有
route.get('/findAll',(req,resp)=>{
  DesignerDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
route.post('/findById',(req,resp)=>{
  DesignerDB.findById(req.body.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//通过Name查询
route.post('/findByName',(req,resp)=>{
  var designerName =JSON.parse(req.body.designerName);
  DesignerDB.findByName(designerName).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  DesignerDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  var ss=JSON.parse(req.body.designer); 
  var new_designer = new Designer(null,ss.name,ss.password,ss.gender,ss.birth,ss.telphone);
  DesignerDB.save(new_designer).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  console.log("req.body.from",req.body.from);
  var new_designer = JSON.parse(req.body.from);
  console.log("new_designer",new_designer);
  
  DesignerDB.update(new_designer).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  console.log("ids",ids);
  DesignerDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//登录
route.post('/login',(req,resp)=>{
  var ss=JSON.parse(req.body.designer);
  var username = ss.username;
  var password = ss.password;
  DesignerDB.login(username,password).then((data)=>{
    console.log("data",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
module.exports = route;