require('babel-polyfill');

let express = require('express');
let route = express.Router();
let clothesDB = require('../db/clothesDB');
let Clothes = require('../model/Clothes')
var fs = require('fs');
var upload = require('./fileuploads');
//查询所有
route.get('/findAll',(req,resp)=>{
  clothesDB.findAll().then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManCloth',(req,resp)=>{

  clothesDB.findManCloth().then((data)=>{
    
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManCloth_duanxiu',(req,resp)=>{
  clothesDB.findManCloth_duanxiu().then((data)=>{
    
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManCloth_xizhuang',(req,resp)=>{
  clothesDB.findManCloth_xizhuang().then((data)=>{
    
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManCloth_chenshan',(req,resp)=>{
  clothesDB.findManCloth_chenshan().then((data)=>{
    
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManCloth_waitao',(req,resp)=>{
  clothesDB.findManCloth_waitao().then((data)=>{
    
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManCloth_maoyi',(req,resp)=>{
  clothesDB.findManCloth_maoyi().then((data)=>{
    
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findManCloth_Txu',(req,resp)=>{
  clothesDB.findManCloth_Txu().then((data)=>{
    
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.post('/findManClothesByDesigner',(req,resp)=>{
  console.log('req.body.designer_id',req.body.designer_id);
  var designer_id = JSON.parse(req.body.designer_id);
  console.log('designer_id',designer_id);

  clothesDB.findManClothesByDesignerId(designer_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.post('/findClothbytypeName_Gneder',(req,resp)=>{
  var name = JSON.parse(req.body.name);
  var gender = JSON.parse(req.body.gender);
  console.log('name',name);
  console.log('gender',gender);

  clothesDB.findClothbytypeName_Gneder(name,gender).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
// ---------------------------------------------------女衣服--------------------------------------------------------------------------
route.post('/findWomanClothesByDesigner',(req,resp)=>{
  console.log('req.body.designer_id',req.body.designer_id);
  var designer_id = JSON.parse(req.body.designer_id);
  console.log('designer_id',designer_id);

  clothesDB.findWomanClothesByDesignerId(designer_id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanCloth',(req,resp)=>{
  clothesDB.findWomanCloth().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanCloth_xizhuang',(req,resp)=>{
  clothesDB.findWomanCloth_xizhuang().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanCloth_chenshan',(req,resp)=>{
  clothesDB.findWomanCloth_chenshan().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanCloth_qunzi',(req,resp)=>{
  clothesDB.findWomanCloth_qunzi().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

route.get('/findWomanCloth_waitao',(req,resp)=>{
  clothesDB.findWomanCloth_waitao().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanCloth_maoyi',(req,resp)=>{
  clothesDB.findWomanCloth_maoyi().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanCloth_qipao',(req,resp)=>{
  clothesDB.findWomanCloth_qipao().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
route.get('/findWomanCloth_kuzi',(req,resp)=>{
  clothesDB.findWomanCloth_kuzi().then((data)=>{
    console.log("女衣服",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
route.post('/findById',(req,resp)=>{
  console.log('req.body.id',req.body.id);
  var id = parseInt(req.body.id);
  console.log('id',id);

  clothesDB.findById(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//通过id查询
route.post('/findByDesignerId',(req,resp)=>{
  console.log('req.body.designer_id',req.body.designer_id);
  var id = parseInt(req.body.designer_id);
  console.log('id',id);

  clothesDB.findByDesignerId(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//通过id查询
route.post('/findId',(req,resp)=>{
  console.log('req.body.cloth_id',req.body.cloth_id);
  var id = parseInt(req.body.cloth_id);
  console.log('id',id);

  clothesDB.findById(id).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
route.post('/query',(req,resp)=>{
  console.log(req.body.keys);
  var keys =JSON.parse(req.body.keys);
  console.log("keys",keys);
  clothesDB.query(keys).then((data)=>{
    console.log("模糊查询",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询-男
route.post('/query_man',(req,resp)=>{
  console.log(req.body.keys);
  var keys =JSON.parse(req.body.keys);
  console.log("keys",keys);
  clothesDB.query_man(keys).then((data)=>{
    console.log("模糊查询",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询-女
route.post('/query_woman',(req,resp)=>{
  console.log(req.body.keys);
  var keys =JSON.parse(req.body.keys);
  console.log("keys",keys);
  clothesDB.query_woman(keys).then((data)=>{
    console.log("模糊查询",data);
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//录入
route.post('/save',upload.any(),(req,resp)=>{
     var name = req.body.name;
     var gender = req.body.gender;
     var type_id = Number(req.body.type_id);
     var price = Number(req.body.price);
     var designer_id = Number(req.body.designer_id);
      //获得文件的临时路径
     var tmp_path = req.files[0].path+"";
     console.log('req.files',req.files);
    // 指定文件上传后的目录 - 示例为"images"目录。 
    var target_path="";
    if(gender =="男"){
         target_path = 'E:\\cloth\\app\\static\\男装\\'+ req.files[0].originalname; 
      }else{
         target_path = 'E:\\cloth\\app\\static\\女装\\' + req.files[0].originalname;       
      }
    // 移动文件
    fs.rename(tmp_path, target_path, function(err) {
      if (err) throw err;
      // 删除临时文件夹文件, 
      fs.unlink(tmp_path, function() {
         if (err) throw err;
      });
    });
    target_path =target_path.split('\\');
    var Path="../../";
    var i =target_path.indexOf("static");
    for(i;i<target_path.length;i++){
        if(i==target_path.length-1){
          Path+=target_path[i];
        }else{
          Path+=target_path[i]+'/';
        }
    }
  let clothes = new Clothes(null,name,gender,type_id,price,designer_id,Path);
  clothesDB.save(clothes).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
route.post("/update",(req,resp)=>{
  console.log(req.body.update_cloth);
  let Clothes = JSON.parse(req.body.update_cloth);
  console.log("Clothes",Clothes);
  clothesDB.update(Clothes).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
route.post('/batchDelete',(req,resp)=>{
  var ids = JSON.parse(req.body.ids);
  console.log("ids",ids);
  clothesDB.batchDelete(ids).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
//查找某个设计师的作品
route.post('/findByDesignerName',(req,resp)=>{
  var designerName = JSON.parse(req.body.designerName);
  clothesDB.findByDesignerName(designerName).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});


module.exports = route;