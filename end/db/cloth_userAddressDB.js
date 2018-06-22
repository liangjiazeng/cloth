require('babel-polyfill');

let pool = require('./pool');
module.exports = {
     //通过关键字查询
    
    //通过user_id查询
    findById(id,user_id){
      var sql = "select * from user_address where user_id = "+user_id+" and id="+id;
      console.log(sql);
      return pool.execute(sql);
    },
    //查询所有
    findAll(id){
      var sql = "select * from user_address where user_id="+id;
      console.log(sql);
      return pool.execute(sql);
    },
    //保存
    save(address){
      var sql = "insert into user_address values(null,"+address.user_id+",'"+address.shoujianren+"','"+address.Address+"','"+address.phone+"')";
     console.log(sql);
      return pool.execute(sql);
    },
    //更新
    update(id,name,address,tel){
      var sql = "update user_address set name= '"+name+"',address='"+address+"',tel='"+tel+"' where  id ="+id;
      console.log(sql);
      return pool.execute(sql);
    },
     //批量删除
    batchDelete(ids){
      var sql = "delete from user_address where id ="+ids;
      console.log(sql);
      return pool.execute(sql);
    },
}
