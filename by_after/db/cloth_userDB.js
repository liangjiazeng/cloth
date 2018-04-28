require('babel-polyfill');

let pool = require('./pool');
module.exports = {
     //通过关键字查询
    query(keys){
      var sql = "select * from cloth_user where name like '%"+keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from cloth_user where id = "+id;
      return pool.execute(sql);
    },
    //通过id查询
    findByName(name){
      var sql = "select * from cloth_user where name = '"+name+"'";
      console.log(sql);
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from cloth_user";
      console.log(sql);
      return pool.execute(sql);
    },
    //批量删除
    batchDelete(ids){
      console.log("ids",ids);
      var sql = "delete from cloth_user where id ="+ids;
      console.log(sql);
      return pool.execute(sql);
    },
    //保存
    save(user){
      var sql = "insert into cloth_user values(null,'"+user.name+"','"+user.password+"','"+user.gender+"','"+user.birth+"','"+user.tel+"')";
      console.log(sql)
      return pool.execute(sql);
    },
   //更新
    update(user){
      var sql = "update cloth_user set name ='"+user.name+"',password ='"+user.password+"',gender='"+user.gender+"',tel='"+user.tel+"' where id ="+user.id;
      console.log(sql);
      return pool.execute(sql);
    },
    //登录
    login(name,password){
      var sql = "select * from cloth_user where name ='"+name+"' and password ='"+password+"'";
      console.log(sql);
      return pool.execute(sql);
    }
}

