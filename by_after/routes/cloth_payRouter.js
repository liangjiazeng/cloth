require('babel-polyfill');

let express = require('express');
let route = express.Router();
let cloth_payDB = require('../db/cloth_payDB');
let Cloth_pay = require('../model/Cloth_pay')
//查询所有
route.get('/findAll',(req,resp)=>{
  cloth_payDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
route.get('/findById',(req,resp)=>{
  cloth_payDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  cloth_payDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  let Cloth_pay = new Cloth_pay();
  Object.assign(Cloth_pay,req.body);
  cloth_payDB.save(Cloth_pay).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  let Cloth_pay = new Cloth_pay();
  Object.assign(Cloth_pay,req.body);
  cloth_payDB.update(Cloth_pay).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  cloth_payDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;