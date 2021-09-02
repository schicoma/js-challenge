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

