//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;

    }
}

//Inicializo arrays para las categorias de los productos
const tablas = [];
const tonkatsus = [];
const gyozas = [];

//Cargo el stock de los productos
//TABLAS
tablas.push(new Producto("Tabla Taiko", 1, 2000, 10));
tablas.push(new Producto("Tabla Taikito", 2, 1400, 8));
tablas.push(new Producto("Tabla simple", 3, 1200, 12));
tablas.push(new Producto("Tabla Veggie", 4, 1200, 5));
//TONKATSU
tonkatsus.push(new Producto("Tonkatsu Cerdo", 5, 1200, 30));
//GYOZAS
gyozas.push(new Producto("Gyozas Taiko", 6, 980, 30));



//Recorro los arrays para mostrarle los productos al usuario
for (const tabla of tablas) {
    alert("ID (" + tabla.id + ") - " + tabla.nombre);
}
for (const tonkatsu of tonkatsus) {
    alert("ID (" + tonkatsu.id + ") - " + tonkatsu.nombre);
}
for (const gyoza of gyozas) {
    alert("ID (" + gyoza.id + ") - " + gyoza.nombre);
}

//Solicito al usuario el ID del producto
let productoSeleccionado = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
const tablaBuscada = tablas.find(tabla => tabla.id === productoSeleccionado);
const tonkatsuBuscado = tonkatsus.find(tonkatsu => tonkatsu.id == productoSeleccionado);
const gyozaBuscada = gyozas.find(gyoza => gyoza.id == productoSeleccionado);

if (productoSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (productoSeleccionado <=1) {
    alert("Seleccionaste " +  tablaBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (productoSeleccionado <=5) {
    alert("Seleccionaste " + tonkatsuBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (productoSeleccionado <= 6) {
    alert("Seleccionaste " + gyozaBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}