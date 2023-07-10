const express =  require('express');
//const config = require('config');

const appForEmps = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
    "host"     : "localhost",
    "user"     : "root",
    "password" : "manager",
    "database" : "Classwork"
   });



appForEmps.get("/", (request, response)=>{
    
    connection.query("select * from Employee_Tb", (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})



module.exports = appForEmps;
