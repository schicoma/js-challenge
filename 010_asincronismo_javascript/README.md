# Curso de asincronismo con JavaScript

A pesar de que JS es un lenguaje *Single Thread*, posee propiedades para trabajar tareas de manera asícrona no bloqueante.

## Asincronismo

*La acción que no ocurre al mismo tiempo*

> Según MDN Web Docs:
<br/>
El término **asíncrono** se refiere al concepto de que más de una cosa ocurre al mismo tiempo, o múltiples cosas relacionadas ocurren sin esperar a que la previa se haya completado. 


JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos para que ciertas tareas sean procesadas en diferido. Este modelo de concurrencia se llama EventLoop.

Como vimos en el curso de V8, el **Event Loop** y el **Callback Queue** son lose elementos que nos permiten realizar tareas asíncronas .

<a href="https://www.youtube.com/watch?v=bWvnWhVCHAc">*No voy a bloquear el Event Loop*</a>