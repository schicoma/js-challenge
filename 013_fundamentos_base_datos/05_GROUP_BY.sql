use platziblog;

-- GROUP BY
-- ## contar posts por estatus
SELECT estatus, count(*) as 'cantidad'
from posts
group by estatus;

-- ## agrupar posts por año
SELECT YEAR(fecha_publicacion) as post_year, count(*) as 'cantidad'
from posts
group by post_year;

-- ## agrupar posts por mes (sin importar el año)
SELECT MONTHNAME(fecha_publicacion) as post_month, count(*) as 'cantidad'
from posts
group by post_month;

-- ## agrupar posts por mes (sin importar el año) Y status
SELECT MONTHNAME(fecha_publicacion) as post_month, estatus, count(*) as 'cantidad'
from posts
group by post_month, estatus;