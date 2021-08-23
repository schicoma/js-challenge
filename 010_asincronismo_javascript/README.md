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

### [Callbacks](callback/challenge.js)

Simples de implementar. Universales, corren en cualquier navegador.

Sin embargo, la composición es tosca y poco intuitivo. El anidamiento es necesario y, si no se tiene el debido cuidado, se desencadenaría un *Callback hell*

### [Promise](promise/challenge.js)

Son fácilmente enlazables. Intuitivo de leer. Nos permiten tener una gran capacidad de asincronismo.

La desventaja del promise es que no maneja excepciones. El promise maneja una función catch para ello. Además, requiere un polyfill para que sea funcional en todos los navegadores.

### [Async - Await](async/challenge.js)

Fácil e intuitivo de leer. Comprensibles ya que simula un comportamiento sincrónico. Podemos manejar excepciones con el típico try ... catch.

Un polyfill, como Babel, es requerido para que funcione en todos los navegadores.

## Proyecto

### Dependencias

- XMLHttpRequest
