-- DDL :: CREATE, ALTER, DROP
CREATE DATABASE platziblog;

USE platziblog;

-- ## crear una tabla
CREATE TABLE people (
person_id int NOT NULL AUTO_INCREMENT,
last_name varchar(255) null,
first_name varchar(255) null,
address varchar(255) null,
city varchar(255) null,
PRIMARY KEY (person_id)
);

DESCRIBE people;

-- ## Insertar datos a la tabla
INSERT INTO people (last_name,first_name,address,city) VALUES
('Vázquez', 'Israel','Calle Famosa Num 1','México'),
('Hernández','Mónica','Reforma 222','México'),
('Alanis','Edgar','Central 1', 'Monterrey'); 

-- DDL :: VIEWS

-- ## Crear una vista
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`%` 
    SQL SECURITY DEFINER
VIEW `platzi_people` AS
    SELECT 
        `people`.`person_id` AS `person_id`,
        `people`.`last_name` AS `last_name`,
        `people`.`first_name` AS `first_name`,
        `people`.`address` AS `address`,
        `people`.`city` AS `city`
    FROM
        `people`;
	
-- ## consultar la vista creada
SELECT * FROM platziblog.platzi_people;

-- DDL :: ALTER

-- ## crear columna
ALTER TABLE `platziblog`.`people` 
ADD COLUMN `date_of_birth` DATETIME NULL AFTER `city`;

-- ## modificar columna
ALTER TABLE `platziblog`.`people` 
CHANGE COLUMN `date_of_birth` `date_of_birth` VARCHAR(255) NULL DEFAULT NULL ;

-- ## eliminar columna
ALTER TABLE `platziblog`.`people` 
DROP COLUMN `date_of_birth`;

-- DDL : DROP

DROP TABLE people;
DROP DATABASE platziblog;



