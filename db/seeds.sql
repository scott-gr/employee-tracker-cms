
--------DEPARTMENTS
INSERT INTO department (id, name) VALUES (DEFAULT,'marketing')
INSERT INTO department (id, name) VALUES (DEFAULT,'finance')
INSERT INTO department (id, name) VALUES (DEFAULT,'legal')
INSERT INTO department (id, name) VALUES (DEFAULT,'engineering')

----------ROLES
---marketing roles
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Designer', '75000', NULL)
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Copywriter', '65000', NULL)
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Marketing Director', '100000', NULL)
---finance roles
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Accountant', '50000', NULL)
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Senior Accountant', '75000', NULL)
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Actuary', '70000', NULL)
---legal roles
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Clerk', '55000', NULL)
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Lawyer', '85000', NULL)
---engineering roles
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Lead Engineer', '100000', NULL)
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Software Engineer', '80000', NULL)
INSERT INTO 'role' (id, title, salary, department_id) VALUES (DEFAULT,'Junior Software Engineer', '65000', NULL)


--------EMPLOYEES
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Tom', 'Nook', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Lenny', 'Koopa', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Ash', 'Ketchum', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Drizzt', 'DoUrden', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Luke', 'Skywalker', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Boba', 'Fett', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Obi-Wan', 'Kenobi', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Jon', 'Snow', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Arya', 'Stark', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Crash', 'Bandicoot', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Lara', 'Croft', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Nathan', 'Drake', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Peter', 'Parker', DEFAULT, DEFAULT)
INSERT INTO 'employee' (id, first_name, last_name, role_id, manager_id) VALUES (DEFAULT,'Bruce', 'Banner', DEFAULT, DEFAULT)








