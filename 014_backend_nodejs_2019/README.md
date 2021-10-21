# Curso de Backend con Node.js (2019)

## Diferencias entre JS en el navegador vs Node.js (Js en el servidor)

En JavaScript del lado del cliente tenemos el DOM y el CSSDOM así como el objeto window para manipular los elementos de nuestra página además una serie de APIs, aquí unos ejemplos:

- fetch
- SessionStorage y LocalStorage
- canvas
- API para bluetooth o audio
- web authentication

Mientras que en Node.js no tenemos un DOM ni un objeto windows, lo que sí tenemos son una serie de módulos que nos permiten interactuar con los recursos de la máquina como el sistema operativo y el sistema de archivos, por ejemplo:

- os
- fs
- http
- util
- debugger
- stream
- events

## Express.js

Framework para crear **Web Apps**, **Web API's** o cualquier tipo de **Servicio Web**. Es muy liviano y minimalista; posibilidad de ser extensible a través de Middlewares.

Un Middleware es como un interceptor, captan el request y el reponse para ejecutar una determinada acción sobre ellos.

## API Restful

REST (Representational State Transfer) es un estilo de arquitectura para construir servicios web. No es un estándar, pero sí una espcificación muy usada.

Los tipos de peticiones que se utilizan con REST son:

- GET (Consultas)
- POST (Creación)
- PUT (Reemplazo / Creación)
- DELETE (Eliminación)
- PATCH (Actualización)