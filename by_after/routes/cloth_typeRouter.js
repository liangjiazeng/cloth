require('babel-polyfill');

let express = require('express');
let route = express.Router();
let cloth_typeDB = require('../db/cloth_typeDB');
let Cloth_type = require('../model/Cloth_type')
//查询所有
route.get('/findAll',(req,resp)=>{
  cloth_typeDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManType',(req,resp)=>{
  cloth_typeDB.findManType().then((data)=>{
     console.log("男类型",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanType',(req,resp)=>{
  cloth_typeDB.findWomanType().then((data)=>{
    console.log("女类型",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
route.get('/findById',(req,resp)=>{
  cloth_typeDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  cloth_typeDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  let Cloth_type = new Cloth_type();
  Object.assign(Cloth_type,req.body);
  cloth_typeDB.save(Cloth_type).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  let Cloth_type = new Cloth_type();
  Object.assign(Cloth_type,req.body);
  cloth_typeDB.update(Cloth_type).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  cloth_typeDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;