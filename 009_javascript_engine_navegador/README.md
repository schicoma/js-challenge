# Curso de JavaScript Engine (V8) y el Navegador

## Clase 1

### Requisitos
Solo un navegador, en mi caso Chrome

### Historia de JavaScript
JavaScript nace a finales del 95. No habían buscadores por lo que se accedían a páginas web accediendo directamente a la URL. Las páginas web en ese entonces eran estáticas, solo podíamos leer texto o ver imágenes.
NetScape toma el primer paso para crear JS, gracias a Brendan Eich que previamente creó Mocha con el objetivo de darle interactividad entre las páginas y los usuarios.

ECMA nace en 1997 con el objetivo de estandarizar JavaScript, además de marcar el paso de la evolución del lenguaje.

En 2009, se crea Node.js y en 2015 aparece ES6 (o ES2015) con la meta de añadirle nuevas funcionalidades y mejoras a JavaScript.

### ECMAScript
Especificación estandarizada por ECMA International.

## Clase 2

### JavaScript Engine

La computadora, que solo entiende código binario, no entiende el lenguaje JS que tenemos en nuestros 'js files'. Para esta tarea nos ayudará el motor de JavaScript, encargado de interpretar el código JS a lenguaje de máquina. Este proceso tiene por nombre JIT Compiler (Just in time).

### V8 (Motor de JavaScript de Chrome)

Google crea V8 para que Google Maps funcione rápido y estable, no solo en Chrome, sino en otros navegadores. No es el único motor que existe para interpretar JavaScript. Sin emmbargo, es el más popular y el de más adopción por otros navegadores (Chrome, Edge, Opera, entre otros).

Node.js usa V8 para correr este lenguaje de programación en el backend (aplicaciones para servidores).

## Clase 3 y 4

### ¿Cómo funciona?

Antes de la interpretación, se crea un entorno global (o ```window```) generando un **Global Object**, **this** (igual a window y el Global Object) y el **Outer environment**. Una vez creado estos 3 objetos, se ejecuta nuestro código (apilado en un stack dentro del **Execution Context**)

Los pasos del interprete son:

* ### Parser
Análisis y convertimiento de un programa a un formato interno ideal para un ambiente de ejecución.
* ### AST (Abstract syntax tree)
<p>Árbol de sintaxis (como un JSON) que representa la estructura sintáctica simplificada del código fuente </p>
<p>Ver <a href="https://astexplorer.net/">AST Explorer</a></p>

* ### Interpreter
Retorna un bytecode a partir del árbol de sintaxis entregado.
* ### Profiler (Monitor)
Optimización de código, en este proceso ocurre el ```hoisting```
* ### Compiler
Retorna al **Interpreter** el código optimizado.

## Clase 5 y 6

### Código de ejecución

Comportamiento sincrónico (**Single Thread**) de JavaScript. A continuación se listarán y definirán conceptos claves:

* ### Memory Heap

Teniendo el siguiente código:

```javascript
var nombre = 'Sebastian';
```

Tenemos una variable declarada ```nombre``` e inicializada con el valor ```'Sebastian'```. Los valores de las variables y las funciones se guardan en este espacio llamado **Memory Heap**, sin ningún orden en específico.

Analogía rápida: 'Repisa' para almacenar datos.

* ### Call Stack

Pila de tareas (LIFO) a realizar de manera síncrona (**Single Thread*).

![Captura de pantalla 2021-08-15 130635](https://user-images.githubusercontent.com/14263134/129488206-063f52a4-ea4f-4df7-a30c-c0d4c7113d3e.jpg)

En la imagen anterior se puede observar el comportamiento del Call Stack. Cada vez que se llama a una nueva función se agrega una tarea al stack. El último elemento es el Global Object.

* ### Garbage Collection

Mecanismo de JavaScript que verifica y marca aquellos elementos que ya no están siendo utilizados en tiempo de ejecución para ser eliminados. De esta manera se gestiona correctamente el uso de memoria en el navegador (o el servidor sea el caso de aplicaciones backend)

El algoritmo que utiliza es **Mark and Sweep**

## Clase 7

### Stack Overflow

Error que aparece cuando la memoria del **Call Stack** sobrepasa lo permitido. Un caso común de este error es cuando la pila de llamadas supera debido a una recursión excesiva o infinita. En el caso anterior, se puede evitar haciendo cambios programáticos.

Analogía: Ver logo de la plataforma Stack Overflow.

## Clase 8

### JS Runtime environment

En la siguiente imagen se muestra los elementos que conforman el ambiente en tiempo de ejecución de JavaScript. Existen otros componentes como el **Event Loop** y el **Callback Stack** que nos permiten trabajar de manera asíncrona.

![js-runtime-27c5fc01-b907-41b5-90e5-1d74d7371ec7](https://user-images.githubusercontent.com/14263134/129930266-e933dfad-88c8-4b78-b133-9566533bfc10.png)

## Clase 9

### Asincronismo

Normalmente, el código de un programa determinado se ejecuta directamente, y solo sucede una cosa a la vez. Si una función se basa en el resultado de otra función, tiene que esperar a que la otra función termine y regrese, y hasta que eso suceda, todo el programa se detiene esencialmente desde la perspectiva del usuario.

Por estas razones, muchas características de las Web API usan código asíncrono para ejecutarse, especialmente aquellas que buscana acceder o recolectar cierto tipo de informacion de un dispositivo externo (traer un archivo de la red), acceder a una base de datos y devolver información de allí, acceder a un streaming de video de una caámara web, entre otras tareas.

Un video que ayuda a entender, con ejemplos incluído, los elementos con el que se logra la concurrencia en <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank">JavaScript es What the heck is the event loop anyway?</a>.

### Web APIs

APIs del navegador para realizar tareas específicas, como por ejemplo: Manipulación de elementos HTML (DOM), peticiones a servicios HTTP (AJAX) o ejecuciones de código después de un determinado número de tiempo (Timeout).

### Callback Queue

Pila de funciones (FIFO) que guarda los callbacks enviados por las Web APIs.

### Event Loop

Proceso encargado de enviar las funciones callback apiladas en el **Callback Queue** al **Call Stack**. Verificará periodicamente que la pila de tareas esté vacía para enviar las funciones una por una.

#### Ejemplo (*Comentario de Emerson Cedeño*)

Hamburguesería:
- 🍔 - Call Stack : El freidor principal (órdenes rápidas)
- 👨‍🍳 - Web APIs : La cocina (ordenes más complejas)
- 🍲 - Callback Queue : Ordenes preparadas por la cocina
- 💁‍♂️ - Event loop : El mesero
