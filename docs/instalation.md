1) npm init -y 

2) Instalo express
    npm i express

3)  Instalo Babel 
      ver UserGuide en [https://babeljs.io/docs/en/usage]babeljs
      npm install --save-dev @babel/core @babel/cli @babel/preset-env    
      npm i -D @babel/core @babel/cli @babel/preset-env @babel/register
      npm i @babel/polyfill core-js

      creo el archivo .babelrc  con el siguiente contenido
      
      {
        "presets": [
          "@babel/preset-env"
        ]
      }


4) Instalo babel para poder usarlo con node
  npm i @babel/node -D

5) En package.json dentro de scripts defino un nuevo script llamado build
      "build": "babel src -d dist --source-maps",
      "start": "nodemon src/index.js, npx babel/node",
      "serve": "node dist/index.js",

    Este buscará en la carpeta src el código fuente y lo convertira en la carpeta dist 
    y con la opción --source-maps le indico que cree los archivos para debuguear la aplicación

    También creo el script para ejecutar la aplicación
      "start": "node dist/index.js"

    Y para ejecutar la aplicación en modo desarrollo
      "startdev": "nodemon src/index.js --exec babel-node"

    Para hacer limpieza del código
      "clean": "rimraf dist"  

6)  Instalo dependencias de desarrollo
      npm i nodemon -D

7)  Instalo otras dependencias
      npm i rimraf graphql express-graphql graphql-tools

      rimraf      // sirve para borrar carpetas
8)  

9)  
