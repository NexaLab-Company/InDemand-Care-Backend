const mysql = require("mysql");



const mySqlConnnection = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'root',
    database : 'indemand_care_erp',
    charset: "utf8mb4"

    

});





mySqlConnnection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("MySQL Database connected");
    }
})




module.exports = mySqlConnnection;