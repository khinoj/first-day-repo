-- Write your Schema Here -- 
DROP DATABASE IF EXISTS key_db;
CREATE DATABASE key_dbb;

USE key_db;

CREATE TABLE customers(
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE customer_order(
  id INT NOT NULL,
  customer_id INT NOT NULL,
  order_details TEXT NOT NULL
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);