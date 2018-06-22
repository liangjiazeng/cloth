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
  console.log("req.body.name",req.body.name);
  var name = JSON.parse(req.body.name);
  console.log("name",name);
  cloth_userDB.findByName(name).then((data)=>{
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
//收藏喜欢的衣服
route.post('/saveLikeCloth',(req,resp)=>{
  console.log("req.body",req.body);
  var cloth_id = JSON.parse(req.body.cloth_id);;
  var username = JSON.parse(req.body.username);
  cloth_userDB.saveLikeCloth(cloth_id,username).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//收藏喜欢的设计师
route.post('/saveLikeDesigner',(req,resp)=>{
  console.log("req.body",req.body);
  var designer_id = JSON.parse(req.body.designer_id);;
  var username = JSON.parse(req.body.username);
  cloth_userDB.saveLikeDesigner(designer_id,username).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//展示收藏喜欢的衣服
route.post('/findAllMyLike',(req,resp)=>{
  console.log("req.body",req.body);
  var id = JSON.parse(req.body.id);
  cloth_userDB.findAllMyLike(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//展示收藏喜欢的设计师
route.post('/findAllMyLikeDesigners',(req,resp)=>{
  console.log("req.body",req.body);
  var id = JSON.parse(req.body.id);
  cloth_userDB.findAllMyLikeDesigners(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//删除收藏喜欢的设计师
route.post('/deleteLikeDesigners',(req,resp)=>{
  console.log("req.body",req.body);
  var userName = JSON.parse(req.body.userName);
  var designer_id = JSON.parse(req.body.designer_id);
  cloth_userDB.deleteMyLikeDesigners(userName,designer_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//删除收藏喜欢的衣服
route.post('/deleteLikeClothes',(req,resp)=>{
  console.log("req.body",req.body);
  var userName = JSON.parse(req.body.userName);
  var cloth_id = JSON.parse(req.body.cloth_id);
  cloth_userDB.deleteMyLikeClothes(userName,cloth_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
module.exports = route;