const connection = require("./connection");

function init() {
  inquirer
  ////////choices of functions in the program
    .prompt([
      {
        type: "list",
        choices: [
          "View All Employees",
          "View All Roles",
          "View All Departments",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Remove Employee",
          "Update Employee Role",
          // "Update Employee Manager", 
          // "Delete Department",
          // "Delete Role",
          // "Delete Employee"
        ],
        name: "choice",
        message: "What do you want to do?",
      },
    ])
    

module.exports = orm;