### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Arigatorei7-';

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

