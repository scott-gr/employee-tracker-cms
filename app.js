//required npm packages
const orm = require('./config/orm');

//add department

//add role

//add employee

//view department
//view role
//view employee

function init() {
  inquirer
    ////////choices of functions in the program
    .prompt([
      {
        type: 'list',
        choices: [
          'View All Employees',
          'View All Roles',
          'View All Departments',
          'Add Employee',
          'Add Role',
          'Add Department',
          'Update Employee Role',
          'Remove Employee',
          'Remove Role',
          'Remove Department',
          // "Update Employee Manager",
          // "Delete Department",
          // "Delete Role",
          // "Delete Employee"
        ],
        name: 'choice',
        message: 'What do you want to do?',
      },
    ])
    .then(({ choice }) => {
      if (choice === 'Add Employee') {
        orm.addNewEmployee();
      } else if (choice === 'Add Role') {
        orm.addNewRole();
      } else if (choice === 'Add Department') {
        orm.addNewDepartment();
      } else if (choice === 'Update Employee Role') {
        orm.updateEmployeeRole();
      } else if (choice == 'View All Employees') {
        orm.viewAllEmployees();
      } else if (choice == 'View All Roles') {
        orm.viewAllRoles();
      } else if (choice == 'View All Departments') {
        orm.viewAllRoles();
      } else {
        orm.exit();
      }
    });
}



const app = {
  init: init,
};

module.exports = {
  app: app,
};
