class Rectangulo {
  constructor(anchoParam, altoPram) {
    this._ancho = anchoParam;
    this._alto = altoPram;
  }
  cambiarAncho(anchoNuevo) {
    if (isNaN(anchoNuevo) || anchoNuevo === 0) {
      document.write("<p>numero invalido</p>");
    } else {
      this._ancho = anchoNuevo;
    }
  }
  cambiarAlto(altoNuevo) {
    if (isNaN(altoNuevo) || altoNuevo === 0) {
      document.write("<p>numero invalido</p>");
    } else {
      this._ancho = altoNuevo;
    }
  }
  mostrarDatos() {
    document.write(
      "<p>El alto es: " + this._alto + " y el ancho es: " + this._ancho + "</p>"
    );
  }
  mostrarPerimetro() {
    document.write(
      "<p>el perimetro es: " + 2 * (this._alto + this._ancho) + "</p>"
    );
  }
  mostrarArea() {
    document.write("<p>el area es: " + this._alto * this._alto + "</p>");
  }
}
const RectanguloA = new Rectangulo(3, 5);
//muestro los datos
RectanguloA.mostrarDatos();
//muestro perimetro
RectanguloA.mostrarPerimetro();
//muestro el area
RectanguloA.mostrarArea();
//cambio los lados y anchos
RectanguloA.cambiarAlto(4);
RectanguloA.cambiarAncho(5);