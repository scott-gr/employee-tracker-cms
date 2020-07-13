const mysql = require("mysql");
const cTable = require('console.table');
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Gemma2020",
  database: "office_cmsDB"
});

connection.connect(err => {
  if (err) throw err;
    
  console.log("connected as id " + connection.threadId);
  init ();
});

module.exports = connection;
