//连接数据库
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/alibaba_2018_csv',{ useNewUrlParser: true });

const db = mongoose.connection;
db.once('error',()=>console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successed'));
db.once('close', () => console.log('Mongo connection faild'));


module.exports = mongoose;