const usageModel = require('../db/model/usage')

//calendar图的数据接口=>usage

module.exports = function(req,res,next){

    let req_id = 'm_2554';
    let req_time = 114550;

    usageModel
    //这种查询方式过慢，后期可以优化
    .where('machine_id').equals(req_id)
    .where('time_stamp').lte(req_time)
    .select(['machine_id','time_stamp','cpu_util_percent','mem_util_percent','disk_io_percent','warning'])
    .sort({'time_stamp' : -1})
    .limit(366)
    .then(result=>{
        res.json(result)
        // console.log(result[0]);
    })
};