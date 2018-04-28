require('babel-polyfill');

let pool = require('./pool');
module.exports = {
     //通过关键字查询
    
    //通过user_id查询
    findById(id){
      var sql = "select * from user_address where user_id = "+id;
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from user_address";
      return pool.execute(sql);
    },
    //保存
    save(address){
      var sql = "insert into user_address values(null,"+address.user_id+",'"+address.shoujianren+"','"+address.Address+"','"+address.phone+"')";
     console.log(sql);
      return pool.execute(sql);
    },
    //更新
    update(pay){
      var sql = "update user_address set pay_password = '"+pay.pay_password+"' where user_id ="+pay.user_id;
      return pool.execute(sql);
    },
     //批量删除
    batchDelete(ids){
      var sql = "delete from user_address where id ="+ids;
      console.log(sql);
      return pool.execute(sql);
    },
}
