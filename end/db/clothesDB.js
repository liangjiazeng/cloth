require('babel-polyfill');

let pool = require('./pool');
module.exports = {
     //通过关键字查询
    query(keys){
      var sql = "select * from clothes where name like '%"+keys+"%' or designer_id in (select id from cloth_designer where name like '%"+
      keys+"%') or type_id in (select id from cloth_type where name like '%"+keys+"%')" ;
      console.log(sql);
      return pool.execute(sql);
    },
     //通过关键字查询_男
    query_man(keys){
      var sql = "select * from (select * from clothes where name like '%"+keys+"%' or designer_id in (select id from cloth_designer where name like '%"+
      keys+"%') or type_id in (select id from cloth_type where name like '%"+keys+"%'))d where gender='男'" ;
      console.log(sql);
      return pool.execute(sql);
    },
     //通过关键字查询-女
    query_woman(keys){
      var sql = "select * from (select * from clothes where name like '%"+keys+"%' or designer_id in (select id from cloth_designer where name like '%"+
      keys+"%') or type_id in (select id from cloth_type where name like '%"+keys+"%'))d where gender='女'" ;
      console.log(sql);
      return pool.execute(sql);
    },

    //通过id查询
    findById(id){
      var sql = "select * from clothes where id = "+id;
      return pool.execute(sql);
    },
    findClothbytypeName_Gneder(name,gender){
      var sql = "select * from clothes where type_id in (select id from cloth_type where name='"+name+"') and gender='"+gender+"'";
      console.log(sql);
      return pool.execute(sql);
    },
    //通过id查询
    findByDesignerId(id){
      var sql = "select * from clothes where designer_id = "+id;
      console.log(sql);
      return pool.execute(sql);
    },
    findManClothesByDesignerId(id){
      var sql = "select * from clothes where gender = '男' and designer_id = "+id;
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanClothesByDesignerId(id){
      var sql = "select * from clothes where gender = '女' and designer_id = "+id;
      console.log(sql);
      return pool.execute(sql);
    },
    findByDesignerName(name){
      var sql = "select * from clothes where designer_id =(select id from cloth_designer where name ='"+name+"')";
      console.log(sql);
      return pool.execute(sql);
    },
    findByDesigner_id(id){
      var sql = "select * from clothes where designer_id ="+id+"";
      console.log(sql);
      return pool.execute(sql);
    },
    //查询所有
    findAll(){
      var sql = "select * from clothes";
      return pool.execute(sql);
    },
    findManCloth(){
      var sql = "select * from clothes where gender='男'";
      console.log(sql);
      return pool.execute(sql);
    },
    findManCloth_duanxiu(){
      var sql = "select * from clothes where gender='男' and type_id=1";
      console.log(sql);
      return pool.execute(sql);
    },
    findManCloth_xizhuang(){
      var sql = "select * from clothes where gender='男' and type_id=2";
      console.log(sql);
      return pool.execute(sql);
    },
    findManCloth_chenshan(){
      var sql = "select * from clothes where gender='男' and type_id=3";
      console.log(sql);
      return pool.execute(sql);
    },
    findManCloth_waitao(){
      var sql = "select * from clothes where gender='男' and type_id=4";
      console.log(sql);
      return pool.execute(sql);
    },
    findManCloth_maoyi(){
      var sql = "select * from clothes where gender='男' and type_id=5";
      console.log(sql);
      return pool.execute(sql);
    },
    findManCloth_Txu(){
      var sql = "select * from clothes where gender='男' and type_id=6";
      console.log(sql);
      return pool.execute(sql);
    },
    // ----------------------------------------女衣服-----------------------------------------------------------------------------------------
    findWomanCloth(){
      var sql = "select * from clothes where gender='女'"; 
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanCloth_xizhuang(){
      var sql = "select * from clothes where gender='女' and type_id=7"; 
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanCloth_chenshan(){
      var sql = "select * from clothes where gender='女' and type_id=12"; 
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanCloth_qunzi(){
      var sql = "select * from clothes where gender='女' and type_id=8"; 
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanCloth_waitao(){
      var sql = "select * from clothes where gender='女' and type_id=9"; 
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanCloth_maoyi(){
      var sql = "select * from clothes where gender='女' and type_id=10"; 
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanCloth_qipao(){
      var sql = "select * from clothes where gender='女' and type_id=13"; 
      console.log(sql);
      return pool.execute(sql);
    },
    findWomanCloth_kuzi(){
      var sql = "select * from clothes where gender='女' and type_id=11"; 
      console.log(sql);
      return pool.execute(sql);
    },
    //批量删除
    batchDelete(ids){
      var sql = "delete from clothes where id ="+ids;
      return pool.execute(sql);
    },
    //保存
    save(clothes){
      var sql = "insert into clothes values(null,'"+clothes.name+"','"+clothes.gender+"',"+clothes.type_id+","+clothes.price+","+clothes.designer_id+",'"+clothes.src+"')";
      console.log(sql);
      return pool.execute(sql);
    },
    //更新
    update(clothes){
      var sql = "update clothes set name ='"+clothes.name+"',gender='"+clothes.gender+"',type_id="+clothes.type_id+",price="+clothes.price+",designer_id="+clothes.designer_id+",src='"+clothes.src+"' where id ="+clothes.id;
      console.log(sql);
      return pool.execute(sql);
    }
}
