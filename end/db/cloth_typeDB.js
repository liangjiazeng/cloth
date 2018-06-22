require('babel-polyfill');

let pool = require('./pool');
module.exports = {
     //通过关键字查询
    query(keys){
      var sql = "select * from cloth_type where name like '%"+keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from cloth_type where id = "+id;
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from cloth_type";
      return pool.execute(sql);
    },
    findManType(){
      var sql = "select * from cloth_type where gender='男'";
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanType(){
      var sql = "select * from cloth_type where gender='女'";
      return pool.execute(sql);
    },
    //批量删除
    batchDelete(ids){
      var sql = "delete from cloth_type where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    //保存
    save(type){
      var sql = "insert into cloth_type values(null,'"+type.name+"','"+type.gender+"')";
      return pool.execute(sql);
    },
    //更新
    update(type){
      var sql = "update cloth_order set name ='"+type.name+"',gender='"+type.gender+"' where id ="+type.id;
      return pool.execute(sql);
    }
}
