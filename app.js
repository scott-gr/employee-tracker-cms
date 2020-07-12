//required npm packages
const orm = require('./config/orm');
const connection = require('./config/connection');

//add department

//add role

//add employee

//view department
//view role
//view employee

const init = () => {
  inquirer
    .prompt([
      {
        ////////choices of functions in the program
        type: 'list',
        name: 'selection',
        message: 'What do you want to do?',
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
          'Exit',
        ],
      },
    ])
    .then((data) => {
      switch (data.selection) {
        case 'Add Employee':
          orm.addNewEmployee();
          break;
        case 'Add Role':
          orm.addNewRole();
          break;
        case 'Add Department':
          orm.addNewDepartment();
          break;
        case 'Remove Employee':
          orm.removeEmployee();
          break;
        case 'Remove Role':
          orm.removeRole();
          break;
        case 'Remove Department':
          orm.removeDepartment();
          break;
        case 'Add Employee':
          orm.addNewEmployee();
          break;
        case 'Update Employee Role':
          orm.updateEmployeeRole();
          break;
        case 'View All Employees':
          orm.viewAllEmployees();
          break;
        case 'View All Roles':
          orm.viewAllRoles();
          break;
        case 'View All Departments':
          orm.viewAllDepartments();
          break;
        default:
          connection.end();
      }
    });
};
