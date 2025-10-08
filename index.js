const [, , method, endpoint, ...params] = process.argv;

//  URL fakestoreapi
const API_URL = "https://fakestoreapi.com/products";

async function main() {
  try {
    switch (method.toUpperCase()) {
      case "GET":
        if (endpoint === "products") {
          // CONSULTAR TODOS LOS PRODUCTOS
          const response = await fetch(API_URL);
          const products = await response.json();
          console.log("Lista completa de productos:");
          console.log(products);
        } else if (endpoint.startsWith("products/")) {
          // CONSULTAR POR PRODUCTOS POR ID
          const productId = endpoint.split("/")[1];
          const response = await fetch(`${API_URL}/${productId}`);
          const product = await response.json();
          console.log(`Detalles del producto con ID ${productId}:`);
          console.log(product);
        } else {
          console.log(
            'Endpoint no válido para GET. Usa "products" o "products/<id>".'
          );
        }
        break;

      case "POST":
        if (endpoint === "products") {
          // CREAR UN NUEVO PRODUCTO
          const [title, price, category] = params;
          if (!title || !price || !category) {
            console.log("Faltan datos. Formato: <title> <price> <category>");
            break;
          }
          const newProduct = { title, price: parseFloat(price), category };

          const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
          });
          const createdProduct = await response.json();
          console.log("Producto creado exitosamente:");
          console.log(createdProduct);
        } else {
          console.log('Endpoint no válido para POST. Usa "products".');
        }
        break;

      case "DELETE":
        if (endpoint.startsWith("products/")) {
          // ELIMINAR UN PRODUCTO POR ID
          const productId = endpoint.split("/")[1];
          const response = await fetch(`${API_URL}/${productId}`, {
            method: "DELETE",
          });
          const deletedProduct = await response.json();
          console.log(`Producto con ID ${productId} eliminado:`);
          console.log(deletedProduct);
        } else {
          console.log('Endpoint no válido para DELETE. Usa "products/<id>".');
        }
        break;

      default:
        console.log("Comando no reconocido. Usa GET, POST, o DELETE.");
        break;
    }
  } catch (error) {
    // Manejo de errores en caso de que la API falle o haya problemas de red.
    console.error("Ha ocurrido un error durante la operación:", error.message);
  }
}

// Verificamos que se haya ingresado un método antes de ejecutar.
if (!method) {
  console.log("Por favor, especifica un método (GET, POST, DELETE).");
} else {
  main();
}

// Instrucciones para usar el script:

//npm run start GET products

//Para ver en la consola una lista de objetos. Cada uno de esos objetos es un producto de la tienda, con su id, title, price, description, category, image y rating.

//npm run start GET products/(id)

//Para ver en la consola un objeto con los datos del producto,por ejemplopara el producto 12 sera:
//npm run start GET products/12

//npm run start POST products "(title)" (price) (category)

//Para crear objeto, incluirá los datos que pasaste (title, price, price), el ID sera asignado por la API.
//Ejemplo:
//npm run start POST products "Zapatillas Topper" 29.99 "Calzados"

//npm run start DELETE products/(id)

//Para eliminar un producto por su ID,
// Por ejemplo para eliminar el producto con ID 7 sera:
//npm run start DELETE products/7
