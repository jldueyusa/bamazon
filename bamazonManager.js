//require packages
var inquirer  = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MmSj.01!',
    database: 'bamazon'
});
connection.connect();
askQuestions()
function askQuestions() {
  inquirer.prompt([
    {
      message: "What would you like to do?",
      type: "list",
      name: "managerAction",
      choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }
  ]).then(function (ans) {
    switch (ans.managerAction) {
      case "View Products for Sale":
        viewProducts()
        break;
      case "View Low Inventory":
        viewLowInventory()
        break;
      case "Add to Inventory":
        selectInventory()
        break;
      case "Add New Product":
        addProduct()
        break;
      default:

        break;
    }
  });
}

function viewProducts () {
    connection.query('SELECT * FROM products', function (error, res) {
      if (error) throw error;
      // console.log(res);
      res.forEach(row => {
        console.log(`Id: ${row.item_id} Name: ${row.product_name} Price: ${row.price} Quantity: ${row.stock_quantity}\n`)
      });
      connection.end()
    })
  }
  
  function viewLowInventory() {
    connection.query('SELECT * FROM products WHERE stock_quantity < 5', function (error, res) {
      if (error) throw error;
      // console.log(res);
      res.forEach(row => {
        console.log(`Id: ${row.item_id} Name: ${row.product_name} Price: ${row.price} Quantity: ${row.stock_quantity}\n`)
      });
      connection.end()
    })
  }