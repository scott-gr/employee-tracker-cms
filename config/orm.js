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
        init();                                                                                                ')
      }
    }); /// find issue

  }
    //   selectWhere: function(tableInput, colToSearch, valOfCol) {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    //   },
      // selectAndOrder: function(whatToSelect, table, orderCol) {
      //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
      //   console.log(queryString);
      //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      //     if (err) throw err;
      //     console.log(result);
    //     });
    //   },
    //   findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //     var queryString =
    //       "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    
    //     connection.query(
    //       queryString,
    //       [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //       function(err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //       }
    //     );
    //   }
    // };
    


module.exports = orm;