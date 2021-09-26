# Curso de Fundamentos de Node.js

## Requerimientos

- Node.js ([https://nodejs.org/es/](https://nodejs.org/es/))


## Orígenes y filosofía

Entorno de ejecución de JavaSrpt fuera del navegador, creado en 2009 orientado a servidores.

No necesitamos un browser para ejecutar JS, instalando Node.js podemos ejecutar programas en cualquier dispositivo.

### Motor V8

Motor de JavScript creado por Google, open source y escrito en C++. Convierte el código de JS en código de máquina (*bytecode*).

### Módulos

Piezas de códigos empaquetadas para ser reutilizados en otros programas

### Orientado a eventos

Event loop es un componente importante para lograr este estilo de programación.

## Asincronía por diseño

### Event Loop

Proceso en blucle que verifica que gestiona de manera asíncrona los procesos de mi aplicación (concurrencia).

Desde el ***Event Queue*** se encolarán procesos como funciones, request, eventos en sí, etc. El Event Loop lo procesa y, en caso se necesite operaciones asíncrona para no bloquear el hilo principal, utilizará el ***Thread Pool*** (DB Ops, FIles, Slow Ops, etc).

Se abríra un Thread en nuestro procesador para ejecutar nuestro proceso. Una vez acabado , volverá al Event Queue.

## Conceptos

### Single Thread

JavaScript es single thread (monohilo). Cuando ocurre un error dentro de alguno de los hilos y no se controla apropiadamente (catch); Node detiene todos los hilos ejecución. 
Esto puede ser muy peligroso, debido a que es dificil determinar fue el origen del problema y en que punto de ejecución se encontraba cada hilo cuando fue detenido.

### Variables de entorno

Una variable de entorno es muy útil cuando queremos utilizar valores que no queremos que estén en nuestro código, por ejemplo, por motivos de seguridad (credenciales, contraseñas, etc), o pueden ser valores cambiantes en el tiempo (porcentajes, taxes, etc).

Node.js habilita el objeto ```process.env``` para acceder a las variables de entorno que querramos utilizar.

```javascript
let saludo = 'Hola';

console.log(saludo);

let nombre = process.env.NOMBRE || 'Sin nombre';
let email = process.env.MY_EMAIL || 'Sin correo';

console.log(`${saludo} ${nombre}`);
console.log(`Mi correo es ${email}`);
```

En el ejemplo anterior, estamos accediendo a las variables ```NOMBRE``` y ```MY_EMAIL```.

Para iniciar el programa, ejecutar ```NOMBRE="Sebastian Chicoma Sandmann" MY_EMAIL=sebastianchicoma97@gmail.com node index.js```

## Herramientas útiles

- **Nodemon** [https://nodemon.io/](https://nodemon.io/)

Herramienta para ejecutar y recargar procesos de JavaScript; útil en desarrollo.

- **PM2** [https://pm2.keymetrics.io/](https://pm2.keymetrics.io/)

Administrador de procesos para aplicaciones en Node.js, útil en ambientes de test y/o producción.

## Cómo maneja la asíncronía

*[Ir al curso de Asíncronismo con JavaScript](../010_asincronismo_javascript)*

## Stream y Buffer

***Stream*** es una utilidad que permite el manejo y la administración de gran cantidad de datos. Utiliza los ***Buffers***, objeos que permiten guardar datos binarios en secuencia de bytes.