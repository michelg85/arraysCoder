//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
       
    }
}

//Inicializo arrays para las categorias de los productos
const tabla = [];
const tonkatsu = [];
const gyozas = [];

//Cargo los productos segun su categoria
//TABLAS
tabla.push(new Producto("Tabla Taiko", 1, 2000));
tabla.push(new Producto("Tabla Taikito", 2, 1400));
tabla.push(new Producto("Tabla simple", 3, 1200));
tabla.push(new Producto("Tabla Veggie", 4, 1200));
//TONKATSU
tonkatsu.push(new Producto("Tonkatsu Cerdo", 5, 1200));
//GYOZAS
gyozas.push(new Producto("Gyozas Taiko", 8, 980));



//Recorro los arrays para mostrarle los productos al usuario
for (const tabla of tabla) {
    alert("ID (" + tabla.id + ") - " + tabla.nombre);
}
for (const tonkatsu of tonkatsu) {
    alert("ID (" + tonkatsu.id + ") - " + tonkatsu.nombre);
}
for (const gyozas of gyozas) {
    alert("ID (" + gyozas.id + ") - " + gyozas.nombre);
}

//Solicito al usuario el ID del producto
let productoSeleccionado = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
const tablaBuscada = tabla.find(tabla => tabla.id === productoSeleccionado);
const tonkatsuBuscado = tonkatsu.find(tonkatsu => tonkatsu.id == productoSeleccionado);
const gyozasBuscada = gyozas.find(gyozas => gyozas.id == pruductoSeleccionado);

if (productoSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (productoSeleccionado <=4) {
    alert("Seleccionaste " +  tablaBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (productoSeleccionado <=7) {
    alert("Seleccionaste " + tonkatsuBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (productoSeleccionado <= 9) {
    alert("Seleccionaste " + gyozasBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}