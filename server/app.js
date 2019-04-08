var express = require('express');
var routers = require('./routes/index.js');
var metaModel = require('./db/model/meta');

require('./db/db');

var app = new express();

routers(app);

app.listen(8097);







//数据的增加

// var meta = new metaModel({

//     machine_id: '张三666',
//     time_stamp: -1,//代表测试生成的假数据
//     disaster_level_1: 13,
//     disaster_level_2: 13,
//     cpu_num: 96,
//     mem_size: 100,
//     status: 'USING'
// })

// meta.save(function(err){
//     if(err){

//         console.log(err);
//         return;

//     }

//     console.log('增加数据成功');
// })



























































// *************************
//连接数据库(version 3.0.0+)
// client.connect(function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     client.close();
//   });


// *************************************************
//增加数据以连接数据库

// app.get('/add',function(req,res){

//     // console.log(req.body);

//     MongoClient.connect(url,{useNewUrlParser:true},function(err,client){
//     //貌似要加这个{useNewUrlParser:true}，不加会报错端口占用
//         if(err){
//             console.log(err);
//             console.log("数据库连接失败");
//             return;
//         }

//         console.log("连接数据库成功");

//         var db = client.db("itying");
//         //新版本的写法，之前的写法会报错，db.collection is not a function

//         db.collection('user').insertOne({

//             "id":"wangwu","age":"123"

//         },function(error,result){
//             if(error){
//                 console.log("增加数据失败");
//                 return;
//             }
//             res.send("增加数据成功");

//             client.close();//关闭数据库，性能会更高
//         })
//     })
// })