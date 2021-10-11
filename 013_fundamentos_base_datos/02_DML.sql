-- DML :: INSERT

-- ## Insertar datos a la tabla
INSERT INTO people (last_name,first_name,address,city) VALUES ('Vázquez', 'Israel','Calle Famosa Num 1','México');
INSERT INTO people (last_name,first_name,address,city) VALUES ('Hernández','Mónica','Reforma 222','México');
INSERT INTO people (last_name,first_name,address,city) VALUES ('Alanis','Edgar','Central 1', 'Monterrey'); 

-- DML :: SELECT
SELECT * FROM people;

-- DML :: UPDATE
UPDATE people
SET last_name = 'Chavez', city = 'Merida'
WHERE person_id = 1; -- condición

-- DML :: DELETE
DELETE FROM people 
WHERE person_id = 1; -- condición