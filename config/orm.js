const connection = require("./connection");
const inquirer = require("inquirer");

///sample orm code
var orm = {
  addNewEmployee = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Please enter the first name of the employee:'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Please enter the last name of the employee:'
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Please enter the role id of the new employee:'
      },

    ]).then(employeeList => {
      connection.query('INSERT INTO employee SET ?', employeeList, err =>{
        if (err) throw (err);
        console.log ('Success! New employee added to list.');
        init();                                                                                                
      });
    });
  },

  removeEmployee = () => {
    connection.query('SELECT * FROM employee', (err, eData) => {
      if (err) throw err;
      let selectedEmployee = eData.map(employee => `${employee.id} ${employee.first_name} ${employee.last_name}`);
      inquirer.prompt([
        {
          type: 'list',
          message: 'Which employee should be removed from the database?',
          choices: selectedEmployee,
          name: 'employee'
        }
      ]).then(output => {
        let employeeId = output.employee.slice(0,2);
        let employeeName = output.employee.slice(3);
        connection.query('DELETE FROM employee WHERE id = ?', [employeeId], err => {
          if (err) throw err;
          console.log(`${employeeName} has beeen removed.`);
          init();
        });
      });
    });
  },

  addNewRole = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please enter the first name of the employee:'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Please enter the last name of the employee:'
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'Please enter the role id of the new employee:'
      },

    ]).then(roleList => {
      connection.query('INSERT INTO role SET ?', roleList, err =>{
        if (err) throw (err);
        console.log ('Success! ${roleList.title} has been added.');
        init();                                                                                                
      });
    });
  },

}


module.exports = orm;