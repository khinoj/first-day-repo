--deletes books_db
DROP DATABASE IF EXISTS books_db;

--creates books_db
CREATE DATABASE books_db;

--put user in this database
USE books_db;


--creates tables with id and name variables
CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

