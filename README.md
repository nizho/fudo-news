# Fudo Technical Challenge

Este es un challenge técnico para Fudo, desarrollado en React. La aplicación consume la API de NewsAPI para mostrar noticias.

Se puede encontra la version online en https://nizho.github.io/fudo-news/

## Características

- **Lazy Loading**: La aplicación carga más artículos a medida que el usuario se desplaza hacia abajo.
- **Búsqueda**: Permite buscar artículos específicos usando la barra de búsqueda, se filtran caracteres potencialmente maliciosos.
- **Render de noticias**: No se muestran las noticias que falta titulo, autor o descripcion, solo se contempla que no haya imagen y se la reemplaza por una dummy. El feed se puede visualizar en mobile o web
- **Errores**: Se puede realizar una busqueda vacia para forzar el manejo de errores
- **BFF**: Esta separado de la logica que comunica con la api de NewsApi, se debe instanciar este servicio que se encuentra en https://github.com/nizho/fudo-news-bff

## Requisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/get-npm) (normalmente se instala junto con Node.js)


## Instalación 

   ```bash
   # Clonar el repositorio en la carpeta definida
   git clone https://github.com/nizho/fudo-news.git fudo-news
   # moverse a la carpeta
   cd fudo-news
   # generar imagen de docker
   docker build . --tag fudo-news
   ```

```bash
   #Para garantizar la correcta creacion de la imagen en el paso anterior, correr este paso por separado
   # levantar la imagen
   docker run --publish 80:80 fudo-news
   ```


## Consideraciones

   Si se desea correr el proyecto sin docker, se debe realizar la instalacion de dependencias y solicitar la configuracion para el archivo .env

   ```bash
   npm install
   ```

   Levantar el proyecto con:

   ```bash
   npm run dev
   ```
