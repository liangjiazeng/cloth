require('babel-polyfill');

let express = require('express');
let route = express.Router();
let cloth_userDB = require('../db/cloth_userDB');
let Cloth_user = require('../model/Cloth_user')
//查询所有
route.get('/findAll',(req,resp)=>{
  console.log("aaaaaacls");
  cloth_userDB.findAll().then((result)=>{
    resp.send(result);
  }).catch((err)=>{
    resp.send(err);
  });
});
//通过id查询
route.post('/findById',(req,resp)=>{
  cloth_userDB.findById(req.body.id).then((data)=>{
    resp.send(data);
  }).catch((err)=>{
    resp.send(err);
  });
})
route.post('/findByName',(req,resp)=>{
  console.log(JSON.parse(req.body.name));
  cloth_userDB.findByName(JSON.parse(req.body.name)).then((data)=>{
    console.log("成功之后",data);
    resp.send(data);
  }).catch((err)=>{
    resp.send(err);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  cloth_userDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((err)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  var ss=JSON.parse(req.body.user); 
  var user = new Cloth_user(null,ss.name,ss.password,ss.gender,ss.birth,ss.telphone);
  // Object.assign(Cloth_user,req.body);
  cloth_userDB.save(user).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
//修改
route.post("/update",(req,resp)=>{
  let Cloth_user =JSON.parse(req.body.user);
  cloth_userDB.update(Cloth_user).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  cloth_userDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//登录
route.post('/login',(req,resp)=>{
  var ss=JSON.parse(req.body.user);
  var username = ss.username;
  var password = ss.password;
  cloth_userDB.login(username,password).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
module.exports = route;