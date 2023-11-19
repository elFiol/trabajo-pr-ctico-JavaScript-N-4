class Persona {
  constructor(
    nombreParam,
    edadParam,
    sexoParam,
    pesoParam,
    alturaParam,
    nacimientoParam
  ) {
    this.nombre = nombreParam;
    this.edad = edadParam;
    this.dni = this.generaDNI();
    this.sexo = sexoParam;
    this.peso = pesoParam;
    this.altura = alturaParam;
    this.anioNacimiento = nacimientoParam;
  }
  generaDNI() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
  mostrarDatos() {
    document.write(`<p>Nombre: ${this.nombre}</p>`);
    document.write(`<p>Edad: ${this.edad} años</p>`);
    document.write(`<p>DNI: ${this.dni}</p>`);
    document.write(`<p>Sexo: ${this.sexo}</p>`);
    document.write(`<p>Peso: ${this.peso} kg</p>`);
    document.write(`<p>Altura: ${this.altura} cm</p>`);
    document.write(`<p>Año de Nacimiento: ${this.anioNacimiento}</p>`);
  }
  esMayorDeEdad() {
    return this.edad >= 18;
  }
  mostrarGeneracion() {
    if (this.anioNacimiento >= 1994) {
      document.write("<p>usted pertenece a la generacion Z</p>");
    } else if (this.anioNacimiento >= 1981) {
      document.write("<p>usted pertenece a la generacion Y</p>");
    } else if (this.anioNacimiento >= 1969) {
      document.write("<p>usted pertenece a la generacion Z</p>");
    } else if (this.anioNacimiento >= 1949) {
      document.write("<p>usted pertenece a la generacion Baby Boom</p>");
    } else if (this.anioNacimiento >= 1930) {
      document.write(
        "<p>usted pertenece a la generacion Silent Generation</p>"
      );
    } else {
      document.write("<p>no se pudo determinar la generacion</p>");
    }
  }
}

const Persona1 = new Persona("Juan", 30, "H", 100, 1.6, 2020);
Persona1.mostrarDatos();
Persona1.esMayorDeEdad();
Persona1.mostrarGeneracion();