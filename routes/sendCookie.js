const express = require('express')
const router = express.Router()
const db = require('../db/index')
const { dbQuery } = require('../utils/index')
router.get('/',function({query},response,next){
    if(query.ttcid){
        //往数据库中加入插入数据
        const sql = `insert into platInfo(ttcid,tname) values(4,'${query.ttcid}')`
        dbQuery(sql).then(res =>{
            response.send(JSON.stringify({code:0,success:true}))
        }).catch(err =>{
            console.log(err,"...err")
        })
    }
})

module.exports = router