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
  
}
