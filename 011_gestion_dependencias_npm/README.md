# Curso de Gestión de Dependencias y Paquetes con NPM

## Acerca de NPM, paquetes y módulos

**Node Package Manager** (npm) es el gestor de paquetes más popular de JavaScript. Podemos crear nuestros propios proyectos y compartirlos con la comunidad.
Además, podemos descargar librerías y módulos para nuestros proyectos. 

Antes de descargar un recurso, es importante revisar la información acerca de la comunidad, pull requests, última fecha de cambio, etc. para evitar usar herramientas desactualizadas o deprecadas.

## Requerimientos

- Node.js ([https://nodejs.org/es/](https://nodejs.org/es/))
- Plugin de VSCode: npm ([https://github.com/Microsoft/vscode-npm-scripts](https://github.com/Microsoft/vscode-npm-scripts))

### Verificación

Abrir la terminal y ejecutar: ```node -v``` y ```npm -v```

### Upgrade

Para actualizar a la última versión, en caso ya hayamos hecho la instalación con anterioridad, ejecutar el comando: ```npm install -g npm@latest``` (*ejecutar con ```sudo``` de ser requerido*)

## Comandos útiles

- ### ```npm init```
Crea el archivo **package.json** en nuestro folder de trabajo

El argumento ```-y``` permite crear un ***package.json*** vacío para ser llenado posteriormente.

- ### ```npm set init.author.name <name> ```
Configura globalmente el nombre del autor del proyecto.

- ### ```npm install <pkg>```
Comando para instalar un paquete a nuestro proyecto. Se recomienda hacerlo desde el folder raíz.

El flag ```--save``` (default) instala el recurso como una dependencia requerida para un deployment a producción.

Se creará una carpeta llamada **node_modules** que contendrá todas las librerías y herramientas que nuestro proyecto necesita. Además, se creará un archivo llamado **package-lock.json** (no se debería enviar al repositorio git).

El flag ```--save-dev``` indica si el recurso solo es necesario en entorno de desarrollo.

El flag ```-0``` indica si el recurso es opcional.

El flag ```--dry-run``` indica que la dependencia no será instalada en el proyecto, no obstante, al simular la instalación, se mostrará el log correspondiente.

El flag ```--force``` fuerza la instalación de una dependencia.

- ### ```npm list --depth 0```
Permmite ver la lista de los paquetes que tenemos instalados.

- ### ```npm install <pkg>@<version>```

Para indicar la versión a instalar de una dependencia, agregar el número al nombre del paquete luego de un arroba (@). Por ejemplo: ```npm install moment@2.29.1```. El keyword **```latest```** instala la última versión.

- ### ```npm outdate```

Lista las dependencias que están listas para poder ser actualizadas.

- ### ```npm update```

Actualizar paquetes disponibles

- ### ```npm uninstall <pkg>```

Actualizar paquetes disponibles.

El flag ```--no-save``` desinstala el paquete indicado sin quitar su configuración en el archivo **package.json**.

### **Bonus**

El flag ```--dd`` activa el modo verbose para poder ver los logs de ejecución (like a *debug mode*). Muy útil para saber que hace npm cuando ejecutamos un comando para instalar un paquete, actualizacion, entre otras tareas.

## Versionado semántico

El versionado semántico es muy usado en npm. La estructura de las versiones es A.B.C donde:

- A (major) es un *breaking change*.
- B (minor) nuevas funcionalidad compatible con la version actual, deprecación de métodos antiguos o refactorización.
- C (patch) son correcciones de errores.

El uso de la tilde **```~```** sirve para descargar la versión más reciente de una dependencia especificada que corrija errores (patch version). Por ejemplo:

```json
  "dependencies": {
    "qs": "~2.2.3"
  }
```
Significa que todas las versiones desde la ```2.2.3``` hasta la ```2.3.0```, pero sin incluir la ```2.3.0```, son aceptables. Aunque ```2.2.3``` puede ser la versión actual, el autor de un paquete que depende de qs de esta manera le está indicando a npm que si hay nuevas versiones de parches de ```2.2.4``` y superiores disponibles, esas son aceptables.

El uso del caret **```^```** sirve para descargar la versión más reciente de una dependencia especificada que sea un *minor version*. Por ejemplo:

```json
  "dependencies": {
    "qs": "^2.2.3"
  }
```
Significa que todas las versiones desde la ```2.2.3``` hasta la ```3.0.0```, pero sin incluir la ```3.0.0```, son aceptables. 

## Scripts

Comandos que se pueden establecer para ser ejecutados desde la consola.

Dentro del bloque **```scripts```** se colocarán las rutinas de manera descriptiva. Por ejemplo:

```json
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack serve --open",
    "format": "prettier --write '{*.js,src/**/*.{js,jsx}}'",
    "lint": "eslint src/ --fix"
  }
```

Para ejecutar un comando en específico, utilizar ```npm <command>```

## Caché

Puede que, al actualizar una librería, algunas no se gestionen correctamente y se queden en la carpeta de dependencias. 

Para verificar si existe alguna dependencia en caché, usar ```npm cache verify```

Para eliminar la caché, usar el comando ```npm cache clean --force```.

**IMPORTANTE: Usarlo solo cuando sea necesario**. 

Si esto no resuelve algun error que esté causando que una tarea no se ejecute correctamente, borrar la carpeta **node_modules**. Luego ejecutar el comando necesario para instalar las dependencias.

*Opcional, usar la dependencia rimraf.*

## Seguridad

Usar el comando ```npm audit``` para verificar que vulnerabilidades existen en nuestra aplicación, y que paquetes son los que tienen dichas amenazas.

Para reparar dichas amenanzas o vulnerabilidades, usar el comando ```npm audit``` **```fix```**

Opcional: [snyx](https://snyk.io/), proyecto que analiza vulnerabilidades.

## Instalar un paquete

### Pasos previos

Agregar en el archivo **package.json** la siguiente configuración:

```
"bin": {
  "random-messages": "./bin/global.js"
},
```

```random-messages``` será el comando para ejecutar nuestro programa (se ejecutará el archivo **global.js**).

### Instalación

Para instalar un paquete en el repositorio local, ejecutar el comando ```npm link```. Una vez realizado esto, ejecutar el comando agregado en el **bin** (ejemplo: ```random-messages```). También, se puede lograr esto con el comando ```npm install -g [ruta raíz del proyecto]```

Se creará un enlace simbólico en la carpeta global.

### Subir módulo a registry 

Crear una cuenta en [npmjs.com](https://npmjs.com). Luego ejecutar el comando ```npm adduser``` e ingresar los datos requeridos (credenciales en npmjs.com previamente creadas).

Por último, ejecutar el comando ```npm publish``` para publicar nuestro módulo al [repositorio por defecto](https://registry.npmjs.com).

### Actualizar módulo versión

Para subir nuevos cambios al módulo, se debe ejecutar nuevamente el comando ```npm publish```. De ser necesario, ejecutar el comando ```npm version <major|minor|patch>``` para subir la versión de nuestro módulo.