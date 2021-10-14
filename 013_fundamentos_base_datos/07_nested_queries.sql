use platziblog;

-- Nested Queries

-- ## contar cuantos posts hay por cada fecha encontrada. Ordernar por la columna new_table_projection.date
SELECT new_table_projection.date, COUNT(*) as post_count
FROM (
	-- ## el primer post de cada año
	SELECT DATE(MIN(fecha_publicacion)) as date, YEAR(fecha_publicacion) as post_year
    FROM posts
    GROUP BY post_year
) AS new_table_projection
GROUP BY new_table_projection.date
ORDER BY new_table_projection.date;

-- ## buscar la fecha de publicación más reciente. Obtener el post que tenga dicha fecha de publicación
select *
from posts
where fecha_publicacion = (
	select max(fecha_publicacion)
    from posts
);