![bam](https://github.com/jldueyusa/bamazon/blob/master/assets/bam.png)
# Welcome to Bamazon 

Bamazon is like Amazon but a little different. This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The app will take in orders from customers and deplete stock from the store's inventory. As a future enhancement, there is an option to act as a manager at Bamazon where you are able to check the products Bamazon has for sale as well as add products and inventory. This function is currently under contruction and only partially works. 

## Instructions

You must first install MySQL and MySQL Workbench in order to populate the database of products for Bamazon. Once those are installed and ready to go, open the bamazon folder and navigate to the schema.sql file. This file contains the code to to copy and paste into your MySQL application. Once this task is completed, you will have the database set up with the products that Bamazon has to offer.

### Customer

After your MySQL database is set up you will need to navigate to the bamazonCustomer.js file and do the following:

1. Run the file in the terminal by typing in node bamazonCustomer.js


2. After you run the file, you will see the list of products with their respective ID's, name, and price. At the end of this list you will be asked to type in the product ID for the item you would like to purchase. 

3. After you pick the product and select enter, you will be asked how may you would like.

4. After the quantity is entered, a list will display with the position of the product in the database, product name, department, price, and what was the current stock quantity at the time the request was made.

5. Clear out the terminal and run the bamazonCustomer.js file again to poulate the database items.

6. Follow steps 2 and 3 again but this time, inter a large quantity of the item. 

7. The list will display again with the product information but you will also be notified that the sale did not go through because there were enough items in stock.

### Manager

The next set of instructions will be used for the bamazonManager.js file.

1. Run the file in the terminal by typing in node bamazonManager.js

2. A list of 4 questions will display. Use the up and down arrows to navigate to the function you would like to perform.

3. Currently, showing the total list of products and the low inventory products is working properly. Adding a new product or adding to your current inventory is still under construction.
