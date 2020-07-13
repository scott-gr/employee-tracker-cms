
INSERT INTO department (name) VALUES ('Marketing'), ('Finance'), ('Legal'), ('Engineering');

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, 'Designer', 75000, 1), (DEFAULT, 'Copywriter', 65000, 1), (DEFAULT, 'Marketing Director', 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, 'Accountant', 50000, 2), (DEFAULT, 'Senior Accountant', 75000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, 'Clerk', 55000, 3), (DEFAULT, 'Lawyer', 85000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, 'Lead Engineer', 75000, 4), (DEFAULT, 'Software Engineer', 80000, 4), (DEFAULT, 'Junior Software Engineer', 65000, 4);

INSERT INTO employee (id, first_name, last_name, role_id) 
VALUES (DEFAULT, 'Tom', 'Nook', 1), (DEFAULT, 'Lenny', 'Koopa', 2), (DEFAULT, 'Ash', 'Ketchum', 3), (DEFAULT, 'Drizzt', 'DoUrden', 4), (DEFAULT, 'Jon', 'Snow', 5), (DEFAULT, 'Arya', 'Stark', 6),(DEFAULT, 'Crash', 'Bandicoot', 7), (DEFAULT, 'Lara', 'Croft', 8), (DEFAULT, 'Nathan', 'Drake', 9), (DEFAULT, 'Peter', 'Parker', 10), (DEFAULT, 'Bruce', 'Banner', 6);