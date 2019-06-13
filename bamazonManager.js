//require packages
var inquirer  = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MmSj.01!',
    database: 'bamazon'
});
