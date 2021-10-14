use platziblog;

select * from posts;
select * from etiquetas;
select * from posts_etiquetas;

-- Preguntas a la base de datos platziblog

-- ## cantidad de etiquetas por posts
select post_id as post, p.titulo, count(etiqueta_id) as etiquetas
from posts_etiquetas pe 
left join posts p on p.id = pe.post_id
group by post_id, p.titulo;

-- ## cantidad de etiquetas por post, ordenado por número de etiquetas
select post_id as post, p.titulo, count(etiqueta_id) as etiquetas
from posts_etiquetas pe 
left join posts p on p.id = pe.post_id
group by post_id, p.titulo
order by etiquetas desc;

-- ## etiquetas (concatenadas) por posts
select post_id as post, p.titulo, GROUP_CONCAT(e.nombre)
from posts_etiquetas pe 
left join posts p on p.id = pe.post_id
left join etiquetas e on e.id = pe.etiqueta_id
group by post_id, p.titulo;

-- ## etiquetas sin posts relacionados
select *
from etiquetas e
left join posts_etiquetas pe on pe.etiqueta_id = e.id
where post_id is null;

-- Más preguntas a la base de datos platziblog

-- ## agrupar y contar los posts por categorías
select c.nombre, count(*) as cantidad_post
from categorias c
inner join posts p on c.id = p.categoria_id
group by c.nombre
order by cantidad_post desc;

-- ## agrupar y contar los posts por usuarios, mostrar el usuario con más posts
select u.nickname, count(*) as cantidad_post, group_concat(c.nombre)
from usuarios u
inner join posts p on u.id = p.usuario_id
inner join categorias c on c.id = p.categoria_id
group by u.nickname
order by cantidad_post desc
limit 1;

-- ## usuarios que no han escritos posts
select * 
from usuarios u
left join posts p on u.id = p.usuario_id
where p.usuario_id is null;