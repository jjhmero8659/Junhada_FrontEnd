var mysql = require("mysql")

const db = mysql.createPool({ //커넥션 풀
    host : "ddaowifi.iptime.org" , // 다른 IP 연결 x
    user : "junhadaTeam",      // root 권한
    password : "Junhada1!",
    port : "3306",  
    database: "junhada", 
})

module.exports = db;