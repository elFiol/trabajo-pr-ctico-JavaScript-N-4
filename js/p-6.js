class Libro {
  constructor(iSBMParam, tituloParam, autorParam, numPagParam) {
    this._iSBM = iSBMParam;
    this._titulo = tituloParam;
    this._autor = autorParam;
    this._numPag = numPagParam;
  }
  get iSBM() {
    return this._iSBM;
  }
  get titulo() {
    return this._titulo;
  }
  get autor() {
    return this._autor;
  }
  get numPag() {
    return this._numPag;
  }
  set iSBM(iSBMNuevo) {
    this._iSBM = iSBMNuevo;
  }
  set titulo(tituloNuevo) {
    this._titulo = tituloNuevo;
  }
  set autor(autorNuevo) {
    this._autor = autorNuevo;
  }
  set numPag(numPagNuevo) {
    this._numPag = numPagNuevo;
  }
  mostrarLibro() {
    document.write(
      `<p>El libro ${this._titulo} con ISBM ${this._iSBM} creado por el autor ${this._autor} tiene ${this._numPag} paginas</p>`
    );
  }
}
const Libro1 = new Libro(
  849574384,
  "libertad,libertad,libertad",
  "Giacomini y Javier Milei",
  140
);
const Libro2 = new Libro(
  849574384,
  "Padre Rico,,Padre Pobre",
  "Robert Kyosaky",
  300
);
Libro1.mostrarLibro();
Libro2.mostrarLibro();

if (Libro1.numPag > Libro2.numPag) {
  document.write(
    `El libro "${Libro1.titulo}" tiene mas paginas que el libro "${Libro2.titulo}"`
  );
} else if (Libro1.numPag < Libro2.numPag) {
  document.write(
    `El libro "${Libro2.titulo}" tiene mas paginas que el libro "${Libro1.titulo}"`
  );
} else {
  document.write("<p>los dos libros tienen la misma cantidad</p>");
}
