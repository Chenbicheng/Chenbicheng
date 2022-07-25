
const db = require('../db/index')
const dbQuery = (sql) =>{
    return new Promise((resolve,reject) =>{
        db.query(sql,(err,result) =>{
            if(err) reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    dbQuery
}