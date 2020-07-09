//required npm packages
const mysql = require("mysql");
const cTable = require('console.table');
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,  // Your port; if not 3306
  user: "root",  // Your username
  password: "Gemma2020",   // Your password
  database: "" //database name
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Success! Connected as id: " + connection.threadId);
  connection.end();
});