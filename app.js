//dependencies
const connection = require('./config/connection');
const inquirer = require('inquirer');


///add new employee function
addNewEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Please enter the first name of the employee:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Please enter the last name of the employee:',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Please enter the role id of the new employee:',
    },
  ])
  .then((employeeList) => {
    connection.query('INSERT INTO employee SET ?', employeeList, (err) => {
      if (err) throw err;
      console.log('Success! New employee added to list.');
      init();
    });
  });
},
// remove employee function
removeEmployee = () => {
  connection.query('SELECT * FROM employee', (err, eData) => {
    if (err) throw err;
    let selectedEmployee = eData.map(
      (employee) =>
        `${employee.id} ${employee.first_name} ${employee.last_name}`
    );
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Which employee should be removed from the database?',
          choices: selectedEmployee,
          name: 'employee',
        },
      ])
      .then((output) => {
        let employeeId = output.employee.slice(0, 2);
        let employeeName = output.employee.slice(3);
        connection.query(
          'DELETE FROM employee WHERE id = ?',
          [employeeId],
          (err) => {
            if (err) throw err;
            console.log(`${employeeName} has beeen removed.`);
            init();
          }
        );
      });
  });
},
/// add new role function
addNewRole = () => {
  inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please provide a job title for this new role:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Please provide the salary for the new role:',
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'Please enter the department ID that includes this new role:',

      },
    ])
    .then((roleList) => {
      connection.query('INSERT INTO role SET ?', roleList, (err) => {
        if (err) throw err;
        console.log('Success! ${roleList.title} has been added.');
        init();
      });
    });
  },
//// remove role function
removeRole = () => {
  connection.query('SELECT * FROM role', (err, eData) => {
    if (err) throw err;
    let selectedRole = eData.map(
      (role) => `${role.id} ${role.title} ${role.salary}`
    );
    inquirer.prompt([
        {
          type: 'list',
          message: 'Which role should be removed from the database?',
          choices: selectedRole,
          name: 'role',
        },
      ])
      .then((output) => {
        let roleId = output.role.slice(0, 2);
        let roleTitle = output.role.slice(3);
        connection.query('DELETE FROM role WHERE id = ?', [roleId], (err) => {
          if (err) throw err;
          console.log(`${roleTitle} has beeen removed.`);
          init();
        });
      });
  });
},
////add new department function
addNewDept = () => {
inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please provide the new department name:',
    },
  ])
  .then((departmentList) => {
    console.log(departmentList);
    connection.query(
      'INSERT INTO department SET ?', departmentList, (err) => {
        if (err) throw err;
        console.log(`Success! ${departmentList.name} has been added!`);
        init();
    });
  });
};
/// Remove department function
removeDept = () => {
  connection.query('SELECT * FROM department', (err, eData) => {
    if (err) throw err;
    let selectedDept = eData.map(
      (department) => `${department.id} ${department.name}`
    );
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Which department should be removed from the database?',
          choices: selectedDept,
          name: 'department',
        },
      ])
      .then((output) => {
        let deptId = output.department.slice(0, 2);
        let deptName = output.department.slice(3);
        connection.query('DELETE FROM department WHERE id = ?', [deptId], (err) => {
          if (err) throw err;
          console.log(`${deptName} has been removed.`);
          init();
        });
      });
  });
},
///view all roles function
viewAllRoles = () => {
  connection.query('SELECT * FROM role', (err, data) => {
    if (err) throw err;
    console.table(data);
    init();
  })
};
/// view all departments function
viewAllDepartments = () => {
  connection.query('SELECT * FROM department', (err, data) => {
    if (err) throw err;
    console.table(data);
    init();
  })
};
/// view all employees function
viewAllEmployees = () => {
  connection.query('SELECT * FROM employee', (err, data) => {
    if (err) throw err;
    console.table(data);
    init();
  })
};

/// initialize app. Prompt user.
init = () => {
  inquirer
    .prompt([
      {
        ////////choices of functions in the program
        type: 'list',
        name: 'selection',
        message: 'Welcome to the Employee Tracker. What do you want to do?',
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
    ///connects each prompt to the function
    .then((data) => {
      switch (data.selection) {
        case 'Add Employee':
          addNewEmployee();
          break;
        case 'Add Role':
          addNewRole();
          break;
        case 'Add Department':
          addNewDept();
          break;
        case 'Remove Employee':
          removeEmployee();
          break;
        case 'Remove Role':
          removeRole();
          break;
        case 'Remove Department':
          removeDept();
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'View All Employees':
          viewAllEmployees();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Departments':
          viewAllDepartments();
          break;
        default:
          connection.end();
      }
    });
};



