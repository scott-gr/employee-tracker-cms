---Departments
INSERT INTO department (name) VALUES ('Marketing'), ('Finance'), ('Legal'), ('Engineering');
--- Mktg roles
INSERT INTO role (id, title, salary, department_id)
VALUES ('Designer', 75000, 1), ('Copywriter', 65000, 1), ('Marketing Director', 100000, 1);
--- Finance roles
INSERT INTO role (id, title, salary, department_id)
VALUES ('Accountant', 50000, 2), ('Senior Accountant', 75000, 2);
---Legal roles
INSERT INTO role (id, title, salary, department_id)
VALUES ('Clerk', 55000, 3), ('Lawyer', 85000, 3);
---Engineering roles
INSERT INTO role (id, title, salary, department_id)
VALUES ('Lead Engineer', 75000, 4), ('Software Engineer', 80000, 4), ('Junior Software Engineer', 65000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) 
VALUES ('Tom', 'Nook', 2313), ('Lenny', 'Koopa', 8282), ('Ash', 'Ketchum', 000), ('Drizzt', 'DoUrden', 20), ('Jon', 'Snow', 99), ('Arya', 'Stark', 111),('Crash', 'Bandicoot' 640), ('Lara', 'Croft', 123), ('Nathan', 'Drake', 345), ('Peter', 'Parker', 1318), ('Bruce', 'Banner', 002);