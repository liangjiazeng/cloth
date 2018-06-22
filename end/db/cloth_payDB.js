require('babel-polyfill');
let pool = require('./pool');
module.exports = {
     //通过关键字查询
    
    //通过user_id查询
    findById(id){
      var sql = "select * from cloth_order where user_id = "+id;
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from cloth_pay";
      return pool.execute(sql);
    },
    //保存
    save(pay){
      var sql = "insert into cloth_pay values('"+pay.user_id+"','"+pay.pay_password+"')";
      return pool.execute(sql);
    },
    //更新
    update(pay){
      var sql = "update cloth_pay set pay_password = '"+pay.pay_password+"' where user_id ="+pay.user_id;
      return pool.execute(sql);
    }
}
