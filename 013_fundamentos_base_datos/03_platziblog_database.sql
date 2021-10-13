create DATABASE platziblog;

use platziblog;

-- TABLAS INDEPENDIENTES

create table categorias (
id integer auto_increment,
nombre varchar(80),
primary key(id)
);

create table etiquetas (
id integer auto_increment,
nombre varchar(80),
primary key(id)
);

create table usuarios (
id integer auto_increment,
login varchar(30) NOT NULL, 
password varchar(32) NOT NULL,
nickname varchar(40) NOT NULL,
email varchar(80) NOT NULL UNIQUE,
primary key (id)
);

-- TABLAS DEPENDIENTES (tip: uso de claves foráneas)

create table posts (
id integer auto_increment,
titulo varchar(150) NOT NULL,
fecha_publicacion timestamp NOT NULL,
contenido TEXT NOT NULL,
estatus char(8) NOT NULL,
usuario_id integer,
categoria_id integer,
primary key (id)
);

ALTER TABLE posts
ADD CONSTRAINT FOREIGN KEY (usuario_id) REFERENCES usuarios (id);

ALTER TABLE posts
ADD CONSTRAINT FOREIGN KEY (categoria_id) REFERENCES categorias (id);

-- TABLAS TRANSITIVAS (tip: dependencias transitivas)

create table comentarios (
id integer auto_increment,
comentario TEXT NOT NULL,
usuario_id integer,
post_id integer,
primary key (id)
);

ALTER TABLE comentarios
ADD CONSTRAINT FOREIGN KEY (usuario_id) REFERENCES usuarios (id);

ALTER TABLE comentarios
ADD CONSTRAINT FOREIGN KEY (post_id) REFERENCES posts (id);

create table posts_etiquetas (
id integer auto_increment,
post_id integer NOT NULL,
etiqueta_id integer NOT NULL,
primary key(id)
);

ALTER TABLE posts_etiquetas
ADD CONSTRAINT FOREIGN KEY (etiqueta_id) REFERENCES etiquetas (id);

ALTER TABLE posts_etiquetas
ADD CONSTRAINT FOREIGN KEY (post_id) REFERENCES posts (id);

-- PPara generar el modelo físico de manera gráfica, ir a Database / Reverse Engineer ...