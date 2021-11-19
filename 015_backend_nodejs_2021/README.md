# Despliegue usando Heroku
Heroku necesita que el archivo package.json se encuentre en la raiz del proyecto.
En este caso, el proyecto se encuentra en un subfolder.

El comando a utilizar para realizar el despliegue sería:

~/Documents/Projects/platzi/js-challenge$ ```git subtree push --prefix 015_backend_nodejs_2021/my-store heroku main```