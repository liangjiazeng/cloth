require('babel-polyfill');

let express = require('express');
let route = express.Router();
let cloth_userAddress = require('../db/cloth_userAddressDB');

//查询所有
route.post('/findAll',(req,resp)=>{
  console.log("req.body.user_id",req.body.user_id);
  var user_id = JSON.parse(req.body.user_id);
  console.log("user_id",user_id);

  cloth_userAddress.findAll(user_id).then((result)=>{
    resp.send(result);
  }).catch((err)=>{
    resp.send(err);
  });
});
//通过id查询
route.post('/findById',(req,resp)=>{
  cloth_userAddress.findById(req.body.id).then((data)=>{
    resp.send(data);
  }).catch((err)=>{
    resp.send(err);
  });
})
route.post('/findByName',(req,resp)=>{
  console.log(JSON.parse(req.body.name));
  cloth_userAddress.findByName(JSON.parse(req.body.name)).then((data)=>{
    resp.send(data);
  }).catch((err)=>{
    resp.send(err);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  cloth_userAddress.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((err)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  
  console.log("req.body.userAddress",req.body.userAddress);
  let address = JSON.parse(req.body.userAddress);
  console.log("address",address);

  cloth_userAddress.save(address).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  let Cloth_user = new Cloth_user();
  Object.assign(Cloth_user,req.body);
  cloth_userAddress.update(Cloth_user).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });p
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  cloth_userAddress.batchDelete(ids).then((data)=>{
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
  cloth_userAddress.login(username,password).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
module.exports = route;