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

appForEmps.post("/", (request, response)=>{
    
    var query = 
    `insert into Employee_Tb values(${request.body.id}, '${request.body.e_name}','${request.body.email}', '${request.body.password}'),'${request.body.emp_id}','${request.body.dname}','${request.body.doj}'`;

    connection.query(query, (error, result)=>{
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


appForEmps.put("/:id", (request, response)=>{
    
    var query = 
    `update Employee_tb set e_name = '${request.body.e_name}',
                    password = '${request.body.password}' where id = ${request.params.id}`;

    connection.query(query, (error, result)=>{
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


appForEmps.delete("/:id", (request, response)=>{
   
    var query = 
    `delete from Emp where id = ${request.params.id}`;
                    
    connection.query(query, (error, result)=>{
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
