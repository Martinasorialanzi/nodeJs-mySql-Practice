-- asi es la configuracion, si yo depsues quiero cambiar de base de datos lo hago en .env

--creating the database 
CREATE DATABASE crud;


-- using the database 
use crud;

-- creating a table
CREATE TABLE customer (
    -- UNSIGNED ES QUE NO TIENE NUMEROS NEGATIVOS
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

--TO SHOW ALL TABLES
SHOW TABLES;

--to describe  a table 
describe customer;

-- inserting data into the table
-- INSERT INTO customer(name,address,phone) VALUES('Juan Pérez','Calle             
