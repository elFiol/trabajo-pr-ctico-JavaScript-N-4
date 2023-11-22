class Contacto {
  constructor(nombreParam, telParam) {
    this._nombre = nombreParam;
    this._tel = telParam;
  }

  get nombre() {
    return this._nombre;
  }

  get tel() {
    return this._tel;
  }

  igualContactos(otro) {
    return this._nombre === otro;
  }
}

class Agenda {
  constructor(tamanioParam) {
    this.tamanio = tamanioParam;
    this.contactos = [];
  }

  aniadirContactos(contactoNuevo) {
    if (this.contactos.length <= this.tamanio - 1) {
      this.contactos.push(contactoNuevo);
    } else {
      alert("No se pudo agregar el contacto. La agenda está llena.");
    }
  }

  existeContacto(contactoExisten) {
    let existe = false;
    for (let i = 0; i < this.contactos.length; i++) {
      if (
        contactoExisten === this.contactos[i].nombre ||
        contactoExisten === this.contactos[i].tel
      ) {
        existe = true;
        break;
      }
    }
    if (existe) {
      alert("El contacto sí existe");
    } else {
      alert("El contacto no existe");
    }
  }

  listarContactos() {
    alert(`En total hay ${this.contactos.length} contactos`);
    for (let i = 0; i < this.contactos.length; i++) {
      alert("Contacto N °" + (i + 1));
      alert(this.contactos[i].nombre);
      alert(this.contactos[i].tel);
    }
  }

  eliminarContacto(contactoEliminar) {
    this.contactos.splice(contactoEliminar - 1, 1);
    alert("Se ha eliminado el contacto");
  }

  agendaLlena() {
    if (this.tamanio === this.contactos.length) {
      alert("La agenda está llena");
    } else {
      alert("La agenda no está llena");
    }
  }

  huecosLibres() {
    alert(
      "Cantidad de huecos libres: " + (this.tamanio - this.contactos.length)
    );
  }
}

const Contacto1 = new Contacto("Luis", 3848434344);
const Contacto2 = new Contacto("Fiol", 3848334344);
const Contacto3 = new Contacto("Fran", 3849934344);

alert("Bienvenido a la agencia telefónica");

let cantidadCon = parseInt(
  prompt("Solicite la cantidad de contactos que desea tener (entre 10 y 50)")
);
if (isNaN(cantidadCon) || cantidadCon < 10 || cantidadCon > 50) {
  alert(
    "Número inválido. Se le ha asignado un número por defecto (10). Usted lo puede cambiar más tarde"
  );
  cantidadCon = 10;
}

const AgendaUsu = new Agenda(cantidadCon);

do {
  const opcion = parseInt(
    prompt(
      "¿Qué desea hacer? 1.Añadir contactos 2.Existe contacto 3.Listar contactos 4.Eliminar contacto 5.Agenda llena 6.Cantidad de huecos libres"
    )
  );
  if (opcion === 1) {
    const opcionSecundaria = parseInt(
      prompt("Ingrese el número correspondiente: Luis(1), Fiol(2), Fran(3)")
    );
    if (opcionSecundaria === 1) {
      AgendaUsu.aniadirContactos(Contacto1);
    } else if (opcionSecundaria === 2) {
      AgendaUsu.aniadirContactos(Contacto2);
    } else if (opcionSecundaria === 3) {
      AgendaUsu.aniadirContactos(Contacto3);
    } else {
      alert("Número inválido");
    }
  } else if (opcion === 2) {
    AgendaUsu.existeContacto(prompt("Ingrese el nombre del contacto"));
  } else if (opcion === 3) {
    AgendaUsu.listarContactos();
  } else if (opcion === 4) {
    alert(
      "Le sugerimos que vea su lista de contactos para eliminar. Guarde el número de posición y lo deposite"
    );
    AgendaUsu.eliminarContacto(
      parseInt(prompt("Ingrese el número del contacto a eliminar"))
    );
  } else if (opcion === 5) {
    AgendaUsu.agendaLlena();
  } else if (opcion === 6) {
    AgendaUsu.huecosLibres();
  } else {
    alert(
      "numero invalido. ingrese los numeros correspondientes en el rango establecido"
    );
  }
} while (confirm("¿Desea hacer una operación más?"));
