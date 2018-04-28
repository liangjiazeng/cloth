require('babel-polyfill');

let pool = require('./pool');
module.exports = {
     //通过关键字查询
    query(keys){
      var sql = "select * from cloth_designer where name like '%"+keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from cloth_designer where id = "+id;
      return pool.execute(sql);
    },
    //通过Name查询
    findByName(name){
      var sql = "select * from cloth_designer where name = '"+name+"'";
      console.log(sql);
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from cloth_designer";
      return pool.execute(sql);
    },
    //批量删除
    batchDelete(ids){
      var sql = "delete from cloth_designer where id = "+ids;
      return pool.execute(sql);
    },
    //保存
    save(designer){
      var sql = "insert into cloth_designer values(null,'"+designer.name+"','"+designer.password+"','"+designer.gender+"','"+designer.birth+"','"+designer.tel+"')";
      console.log(sql);
      return pool.execute(sql);
    },
    //更新
    update(designer){
      var sql = "update cloth_designer set name = '"+designer.name+"',password = '"+
      designer.password+"',gender = '"+
      designer.gender+"',tel = '"+
      designer.tel+"',describes = '"+
      designer.describes+"' where id ="+designer.id;
      console.log(sql);
      return pool.execute(sql);
    },
    //登录
    login(name,password){
      var sql = "select * from cloth_designer where name ='"+name+"' and password ='"+password+"'";
      console.log(sql);
      return pool.execute(sql);
    }
}
