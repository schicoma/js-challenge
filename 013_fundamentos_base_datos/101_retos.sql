-- https://josejuansanchez.org/bd/ejercicios-consultas-sql/index.html
-- ### Creación de base de datos y tablas
DROP DATABASE IF EXISTS tienda;
CREATE DATABASE tienda CHARACTER SET utf8mb4;
USE tienda;

CREATE TABLE fabricante (
  codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE producto (
  codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DOUBLE NOT NULL,
  codigo_fabricante INT UNSIGNED NOT NULL,
  FOREIGN KEY (codigo_fabricante) REFERENCES fabricante(codigo)
);

INSERT INTO fabricante VALUES(1, 'Asus');
INSERT INTO fabricante VALUES(2, 'Lenovo');
INSERT INTO fabricante VALUES(3, 'Hewlett-Packard');
INSERT INTO fabricante VALUES(4, 'Samsung');
INSERT INTO fabricante VALUES(5, 'Seagate');
INSERT INTO fabricante VALUES(6, 'Crucial');
INSERT INTO fabricante VALUES(7, 'Gigabyte');
INSERT INTO fabricante VALUES(8, 'Huawei');
INSERT INTO fabricante VALUES(9, 'Xiaomi');

INSERT INTO producto VALUES(1, 'Disco duro SATA3 1TB', 86.99, 5);
INSERT INTO producto VALUES(2, 'Memoria RAM DDR4 8GB', 120, 6);
INSERT INTO producto VALUES(3, 'Disco SSD 1 TB', 150.99, 4);
INSERT INTO producto VALUES(4, 'GeForce GTX 1050Ti', 185, 7);
INSERT INTO producto VALUES(5, 'GeForce GTX 1080 Xtreme', 755, 6);
INSERT INTO producto VALUES(6, 'Monitor 24 LED Full HD', 202, 1);
INSERT INTO producto VALUES(7, 'Monitor 27 LED Full HD', 245.99, 1);
INSERT INTO producto VALUES(8, 'Portátil Yoga 520', 559, 2);
INSERT INTO producto VALUES(9, 'Portátil Ideapd 320', 444, 2);
INSERT INTO producto VALUES(10, 'Impresora HP Deskjet 3720', 59.99, 3);
INSERT INTO producto VALUES(11, 'Impresora HP Laserjet Pro M26nw', 180, 3);

-- ## Consultas sobre una tabla
-- 1 
select nombre from producto;
-- 2
select nombre, precio from producto;
-- 3 
describe producto;
-- 4
select nombre, precio as 'precio en euros', precio * 1.16 as 'precio en dólares (USD)' from producto;
-- 5
select nombre AS 'nombre de producto', precio as 'euros', ROUND(precio * 1.16, 2) as 'dólares' from producto;
-- 6
select UPPER(nombre), precio from producto;
-- 7
select LOWER(nombre), precio from producto;
-- 8
select nombre, UPPER(SUBSTR(nombre, 1,2)) from fabricante;
-- 9
select nombre, round(precio, 0) from producto;
-- 10
select nombre, truncate(precio, 0) from producto;
-- 11
select codigo_fabricante from producto;
-- 12
select distinct codigo_fabricante from producto;
-- 13
select nombre from fabricante order by nombre;
-- 14
select nombre from fabricante order by nombre desc;
-- 15
select nombre, precio from producto order by nombre asc, precio desc;
-- 16
select * from fabricante limit 5;
-- 17
select * from fabricante limit 3,2;
-- 18
select * from producto order by precio asc limit 1;
-- 19
select * from producto order by precio asc limit 1;
-- 20
select nombre from producto where codigo_fabricante = 2;
-- 21
select * from producto where precio <= 120;
-- 22
select * from producto where precio >= 400;
-- 23
select * from producto where precio < 400;
-- 24
select * from producto where 80 <= precio and precio <= 400;
-- 25 
select * from producto where precio between 60 AND 200;
-- 26
select * from producto where precio > 200 and codigo_fabricante = 6;
-- 27
select * from producto where codigo_fabricante = 1 OR codigo_fabricante = 3 OR codigo_fabricante = 5;
-- 28
select * from producto where codigo_fabricante IN (1,3,5);
-- 29
select nombre, precio *100 as 'céntimos' from producto;
-- 30
select nombre from fabricante where nombre LIKE 's%';
-- 31
select nombre from fabricante where nombre LIKE '%e';
-- 32
select nombre from fabricante where nombre LIKE '%w%';
-- 33
select nombre from fabricante where length(nombre) = 4;
-- 34
select nombre from producto where nombre LIKE '%Portátil%';
-- 35
select nombre from producto where nombre LIKE '%Monitor%' and precio < 215;
-- 36
select nombre, precio from producto where precio >= 180 order by precio desc, nombre asc;

## Composición interna
-- 1
select p.nombre, p.precio, f.nombre as 'fabricante' from producto p left join fabricante f on p.codigo_fabricante = f.codigo;
-- 2
select p.nombre, p.precio, f.nombre as 'fabricante' 
from producto p left join fabricante f on p.codigo_fabricante = f.codigo
order by fabricante asc;
-- 3
select 
p.codigo as 'código de producto',
p.nombre as 'producto',
f.codigo as 'código de fabricante',
f.nombre as 'fabricante'
from producto p left join fabricante f on p.codigo_fabricante = f.codigo;
-- 4
select p.nombre, p.precio, f.nombre as 'fabricante' from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
order by precio asc limit 1;
-- 5
select p.nombre, p.precio, f.nombre as 'fabricante' from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
order by precio desc limit 1;
-- 6
select p.* from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
where f.nombre = 'Lenovo';
-- 7
select p.* from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
where f.nombre = 'Crucial' and precio > 200;
-- 8
select p.* from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
where f.nombre = 'Asus' OR f.nombre = 'Hewlett-Packard' OR f.nombre = 'Seagate';
-- 9
select p.* from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
where f.nombre in ('Asus','Hewlett-Packard','Seagate');
-- 10
select p.nombre, p.precio from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
where f.nombre LIKE '%e';
-- 11
select p.nombre, p.precio from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
where f.nombre LIKE '%w%';
-- 12
select p.nombre, p.precio, f.nombre from producto p
left join fabricante f on p.codigo_fabricante = f.codigo
where p.precio >= 180
order by p.precio desc, p.nombre asc;
-- 13
select distinct f.* from producto p
right join fabricante f on p.codigo_fabricante = f.codigo
where p.codigo_fabricante is not null;