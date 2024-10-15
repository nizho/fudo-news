# Fudo Technical Challenge

Este es un challenge técnico para Fudo, desarrollado en React. La aplicación consume la API de NewsAPI para mostrar noticias.

## Características

- **Lazy Loading**: La aplicación carga más artículos a medida que el usuario se desplaza hacia abajo.
- **Búsqueda**: Permite buscar artículos específicos usando la barra de búsqueda, se filtran caracteres potencialmente maliciosos.
- **Render de noticias**: No se muestran las noticias que falta titulo, autor o descripcion, solo se contempla que no haya imagen y se la reemplaza por una dummy. El feed se puede visualizar en mobile o web
- **Errores**: Se puede realizar una busqueda vacia para forzar el manejo de errores

## Requisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/get-npm) (normalmente se instala junto con Node.js)

## Instalación

git clone https://github.com/tu-usuario/nombre-del-repo.git

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/nizho/fudo-news.git
   ```

2. **Navegar al directorio del proyecto:**

   ```bash
   cd nombre-del-repo
   ```

3. **Instalar las dependencias:**

   ```bash
   npm install
   ```

4. **Configurar las variables de entorno:**

- Solicitar el archivo `.env` que contiene las variables privadas necesarias para la aplicación.
- Asegurar de que el archivo `.env` esté en la raíz del proyecto.

## Uso

Para iniciar la aplicación, ejecutar el siguiente comando:

```bash
   npm run dev
```

Esto abrirá la aplicación en tu navegador
