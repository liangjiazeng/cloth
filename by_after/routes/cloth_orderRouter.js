require('babel-polyfill');

let express = require('express');
let route = express.Router();
let cloth_orderDB = require('../db/cloth_orderDB');
let Cloth_order = require('../model/Cloth_order')
//查询所有
route.post('/findAll',(req,resp)=>{
  var user_id =parseInt(JSON.parse(req.body.user_id));
  cloth_orderDB.findAll(user_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//查询通过设计师id
route.post('/findByDesignerId',(req,resp)=>{
  console.log(req.body.designer_id);
  var designer_id =parseInt(JSON.parse(req.body.designer_id));
  console.log("designer_id",designer_id);

  cloth_orderDB.findByDesignerId(designer_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
route.get('/findById',(req,resp)=>{
  cloth_orderDB.findById(req.query.id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
route.get('/query/:keys',(req,resp)=>{
  cloth_orderDB.query(req.params.keys).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(err);
  });
})
//录入
route.post('/save',(req,resp)=>{
  var order = JSON.parse(req.body.order);
  order.price = parseInt(order.price)
  order.user_id = parseInt(order.user_id)
  order.cloth_id = parseInt(order.cloth_id)
  var date = new Date().toLocaleDateString();
  order.date = date;
  console.log("order",order);

  let cloth_order = new Cloth_order(null,order.number,order.price,order.user_id,order.cloth_id,null,date,order.color,order.style,order.details);
  console.log('Cloth_order',cloth_order);
  cloth_orderDB.save(cloth_order).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  let Cloth_order = new Cloth_order();
  Object.assign(Cloth_order,req.body);
  cloth_orderDB.update(Cloth_order).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  console.log("删除的id",ids);
  cloth_orderDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;