DROP DATABASE IF EXISTS office_cmsDB;
CREATE database office_cmsDB;

USE office_cmsDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE `role` (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL (7,2) NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(id), 
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL, 
  FOREIGN KEY (role_id) REFERENCES role(id),
  PRIMARY KEY (id)
);