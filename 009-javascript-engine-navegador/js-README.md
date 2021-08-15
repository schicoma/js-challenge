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

## Clase 3

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

## Clase 5

### Código de ejecución

Comportamiento sincrónico (**Single Thread**) de JavaScript.

#### Memory Heap

Teniendo el siguiente código:

```javascript
var nombre = 'Sebastian';
```

Tenemos una variable declarada ```nombre``` e inicializada con el valor ```'Sebastian'```. Los valores de las variables y las funciones se guardan en este espacio llamado **Memory Heap**, sin ningún orden en específico.

Analogía rápida: 'Repisa' para almacenar datos.

#### Call Stack

Pila de tareas (LIFO) a realizar de manera síncrona (**Single Thread*).

![Captura de pantalla 2021-08-15 130635](https://user-images.githubusercontent.com/14263134/129488206-063f52a4-ea4f-4df7-a30c-c0d4c7113d3e.jpg)

En la imagen anterior se puede observar el comportamiento del Call Stack. Cada vez que se llama a una nueva función se agrega una tarea al stack. El último elemento es el Global Object.

