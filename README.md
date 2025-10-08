Gestor de Productos por Línea de Comandos (CLI)

Este proyecto es una herramienta de línea de comandos desarrollada en Node.js que permite interactuar con la FakeStoreAPI para gestionar productos directamente desde la terminal.

Fue creado como parte de la "Pre-Entrega Node JS".

## Funcionalidades

La herramienta soporta las operaciones básicas de un CRUD (Crear, Leer, Eliminar) sobre los productos:

Consultar todos los productos disponibles.

Consultar un producto específico por su ID.

Crear un nuevo producto proporcionando sus datos.

Eliminar un producto existente a través de su ID.

## Requisitos Previos

Para ejecutar este script, únicamente necesitas tener instalado:

Node.js (v16 o superior recomendado).

npm (se instala automáticamente con Node.js).

## Instalación

Clona o descarga este repositorio en tu máquina local.

Abre una terminal y navega hasta la carpeta del proyecto.

No es necesario ejecutar npm install, ya que el proyecto no tiene dependencias externas.

## Modo de Uso

Todas las operaciones se ejecutan a través de npm run start, seguido del método, el endpoint y los parámetros necesarios. La estructura general es:

Bash
npm run start <MÉTODO> <ENDPOINT> [PARÁMETROS...]
A continuación se detallan los comandos para cada funcionalidad.

### 1. Listar Todos los Productos

Para obtener la lista completa de productos, ejecuta:

Bash
npm run start GET products
Resultado: Verás en la consola una lista de objetos, donde cada uno representa un producto de la tienda.

### 2. Buscar un Producto por ID

Para ver los detalles de un producto específico, usa su ID:

Bash
npm run start GET products/<id>
Ejemplo (para el producto con ID 12):

Bash
npm run start GET products/12
Resultado: Se mostrará en la consola un único objeto con los datos del producto solicitado.

### 3. Crear un Nuevo Producto

Para agregar un producto, especifica su título, precio y categoría. Es recomendable usar comillas para los textos que contengan espacios.

Bash
npm run start POST products "<título>" <precio> "<categoría>"
Ejemplo:

Bash
npm run start POST products "Zapatillas Topper" 29.99 "Calzados"
Resultado: La API devolverá el objeto del producto recién creado con un nuevo ID asignado.

### 4. Eliminar un Producto

Para eliminar un producto, proporciona su ID:

Bash
npm run start DELETE products/<id>
Ejemplo (para eliminar el producto con ID 7):

Bash
npm run start DELETE products/7
Resultado: La consola mostrará el objeto del producto que ha sido eliminado como confirmación.

## Autor

Roberto Fiori

## Licencia

Este proyecto está bajo la licencia MIT
