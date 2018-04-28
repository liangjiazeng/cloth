require('babel-polyfill');
let pool = require('./pool');
module.exports = {
     //通过关键字查询
    query(keys){
      var sql = "select * from cloth_order where name like '%"+keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from cloth_order where id = "+id;
      return pool.execute(sql);
    },
    //查询所有
    findAll(user_id){
      var sql = "select * from cloth_order where user_id ="+user_id;
      console.log(sql);
      return pool.execute(sql);
    },
     //查询通过设计师id
    findByDesignerId(designer_id){
      var sql = "select * from cloth_order where cloth_id in (select id from clothes where designer_id ="+designer_id+")";
      console.log(sql);
      return pool.execute(sql);
    },
    //批量删除
    batchDelete(ids){
      console.log("ids",ids);
      var sql = "delete from cloth_order where id in ("+ids+")";
      console.log(sql);
      return pool.execute(sql);
    },
    //保存
    save(order){
      console.log("ssssssssssss");
      var sql = "insert into cloth_order values(null,"+order.number+","+order.price+","+order.user_id+","+order.cloth_id+","+order.address+",'"+order.date+"','"+order.color+"','"+order.style+"','"+order.details+"')";
      console.log(sql);
      return pool.execute(sql);
    },
    //更新
    update(order){
      var sql = "update cloth_order set number ="+order.number+",price="+order.price+",address ='"+order.address+"' where id ="+order.id;
      return pool.execute(sql);
    }
}
