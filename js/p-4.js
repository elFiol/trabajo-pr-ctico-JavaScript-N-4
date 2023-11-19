class Producto {
  constructor(codigoParam, nombreParam, precioParam) {
    this.codigo = codigoParam;
    this.nombre = nombreParam;
    this.precio = precioParam;
  }
  imprimirDatos() {
    document.write(
      `<ul><li>codigo: ${this.codigo}}</li><li>nombre: ${this.nombre}</li><li>precio: $${this.precio}</li></ul>`
    );
  }
}
const Producto1 = new Producto(2938, "remera", 3000);
const Producto2 = new Producto(4943, "Guiso", 3000);
const Producto3 = new Producto(2242, "pantalon", 3000);
const arrayProducto = [Producto1, Producto2, Producto3];
for (let i = 0; i <= 2; i++) {
  document.write(`<h2>producto ${i + 1}</h2>`);
  arrayProducto[i].imprimirDatos();
}