require('babel-polyfill');

let mysql = require('mysql');

let pool = global.pool;
if(!pool){
  //创建连接池
  pool = mysql.createPool({
    database:'cloth',
    user:'root',
    password:'root'
  });
  //将连接挂载到global
  global.pool = pool;
}
//获取链接
function getConnection(){
  return new Promise(function(resolve,reject){
    pool.getConnection(function(err,conn){
      if(!err){
        resolve(conn);
      }else {
        reject(err);
      }
    });
  })
}

//执行sql
function execute(sql){
      return new Promise(function(resolve,reject){
        var connection ;
        getConnection().then(function(conn){
          connection = conn;
          conn.query(sql,function(err,result){
            if(!err){
              resolve(JSON.stringify(result));                  
            }else {
              reject(err)
            }
          });
          if(connection){
            conn.release(); 
          }
        }).catch(function(err){
          reject(err);
          if(connection){
            conn.release(); 
          }
        })
      });    
}


module.exports = {
  getConnection,
  execute
};


