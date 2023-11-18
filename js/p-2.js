const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (ingresarParam) {
    this.saldo += ingresarParam;
    document.write("<p>Se a realizado la operacion</p>");
  },
  extraer: function (ingresarParam) {
    this.saldo -= ingresarParam;
    document.write("<p>Se a realizado la operacion</p>");
  },
  informar: function () {
    document.write(`<p>Titular: ${this.titular} , sueldo: ${this.saldo}</p>`);
  },
};
cuenta.ingresar(500);
cuenta.informar();
cuenta.extraer(500)