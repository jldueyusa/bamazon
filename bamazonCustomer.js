//connect require packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

//connection variable to connect to mysql db
var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "MmSj.01!",
database: "bamazon_db",
port: 3306
})
//call it
connection.connect();

//function will manage connection query to mysql

var display = function() {
    connection.query("SELECT * FROM products",function(err,res){
        if(err) throw err;
        console.log("-----------------------------");
        console.log("     Welcome to Bamazon      ");
        console.log("-----------------------------");
        console.log("");
        console.log("Find Your Product Below");
        console.log("");
    });
  