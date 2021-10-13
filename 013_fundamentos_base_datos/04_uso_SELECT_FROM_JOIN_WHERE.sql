-- Uso de SELECT
select * from posts;

-- ## SELECT con columnas seleccionadas
select titulo, fecha_publicacion, estatus from posts;

-- ## SELECT usando alias
select 
titulo as 'Encabezado',
fecha_publicacion as 'Publicado en',
estatus as 'Estado'
from posts;

-- ## SELECT usando funciones
select
count(id) as 'Número de posts'
from posts;

-- Uso de FROM y JOINS

-- ## left join 
-- ### todos los usuarios con sus respectivos posts (si no tienen, los datos vendrán vacíos)
SELECT *
FROM usuarios
LEFT JOIN posts
ON usuarios.id = posts.usuario_id; 

-- ## left join (sin la intersección)
-- ### todos los usuarios que no tengan posts registrados
SELECT *
FROM usuarios
LEFT JOIN posts
ON usuarios.id = posts.usuario_id
WHERE usuario_id is null;

-- ## right join
-- ## todos los posts con sus usuarios respectivos (si no tienen, los datos vendrán vacíos)
SELECT *
FROM usuarios
RIGHT JOIN posts
ON usuarios.id = posts.usuario_id; 

-- ## right join (sin la intersección)
-- ### todos los posts que no tengan un usuario asignado
SELECT *
FROM usuarios
RIGHT JOIN posts
ON usuarios.id = posts.usuario_id
WHERE usuario_id is null;

-- ## inner join
-- ### todos los usuarios que tengan posts registrados (al menos uno)
SELECT *
FROM usuarios
INNER JOIN posts
ON usuarios.id = posts.usuario_id;

-- ## Unión -> OUTER JOIN (No existe en MySQL)
-- todos los usuarios y posts (si no tienen, los datos vendrán vacíos)
SELECT *
FROM usuarios
LEFT JOIN posts
ON usuarios.id = posts.usuario_id
UNION
SELECT *
FROM usuarios
RIGHT JOIN posts
ON usuarios.id = posts.usuario_id;

-- ## Unión asimétrica 
-- todos los post que no tengan usuario registrados, y todos los usuarios que no tengan posts
SELECT *
FROM usuarios
LEFT JOIN posts
ON usuarios.id = posts.usuario_id
where posts.usuario_id is null
UNION
SELECT *
FROM usuarios
RIGHT JOIN posts
ON usuarios.id = posts.usuario_id
where posts.usuario_id is null;

-- Uso de WHERE
-- ## posts cuyos id's sean mayores a 50
select * 
from posts
where id > 50;

-- ## posts cuyos estatus sean 'activos'
select *
from posts
where estatus = 'activo';

-- ## posts cuyos id NO sea 50
select * 
from posts
where id != 50;

-- ## posts cuyos títulos CONTENGAN la palabra 'escándalo'
select * 
from posts
where titulo LIKE '%escándalo%';

-- ## posts cuyos títulos COMIENCEN con la palabra 'escándalo'
select * 
from posts
where titulo LIKE 'escándalo%';

-- ## posts cuyos títulos TERMINEN con la palabra 'roja'
select * 
from posts
where titulo LIKE '%roja';

-- ## posts que sean mayores a la fecha 01-01-2025
select * 
from posts
where fecha_publicacion > '2025-01-01';

-- ## posts que esten escritos entre 01-01-2023 y 01-01-2025
select *
from posts
where fecha_publicacion BETWEEN '2023-01-01' AND '2025-01-01';

-- ## posts que esten escritos entre 2023 y 2025
select *
from posts
where YEAR(fecha_publicacion) BETWEEN 2023 AND 2025;

-- ## posts que esten escritos en ABRIL de cualquier año
select *
from posts
WHERE MONTH(fecha_publicacion) = 4;

-- Valores NULOS 
-- ## posts que no tengan usuarios asignados
SELECT *
FROM posts
where usuario_id IS NULL;

-- ## posts que tengan usuarios asignados Y que tengan estado 'activo'
SELECT *
FROM posts
where usuario_id IS NOT NULL
AND estatus = 'activo';

-- ## posts que tengan usuarios asignados Y que tengan estado 'activo' Y que la id de la categoría sea 2
SELECT *
FROM posts
WHERE usuario_id IS NOT NULL
AND estatus = 'activo'
AND categoria_id = 2;

