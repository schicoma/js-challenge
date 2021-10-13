-- ORDER BY
-- ## ordernar los posts por título (ascendente)
select *
from posts
order by titulo ASC;

-- ## ordernar los posts por fecha de publicación de manera descendente
select *
from posts
order by fecha_publicacion DESC;

-- LIMIT
-- limitar la cantidad de resultados
-- ## traer los primeros 5 posts que se publicaron inicialmente
select *
from posts
order by fecha_publicacion asc
LIMIT 5;

-- ## traer el post más reciente
select *
from posts
order by fecha_publicacion desc
LIMIT 1;

-- HAVING
-- Sentencia similar al WHERE. Sin embargo, solo puede ser usado luego de la clausula GROUP BY.
-- ## agrupar los posts por mes de publicación y estado. Consultar solo los meses que tiene más de un post publicado
select MONTHNAME(fecha_publicacion) as post_month, estatus, count(*) as count
from posts
group by post_month, estatus
HAVING count > 1;