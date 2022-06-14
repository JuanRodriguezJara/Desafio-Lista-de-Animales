class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    };
    datosPropietario() {
        return `<strong>El nombre del dueño es:</strong> ${this.nombre}. <br><strong>El domicilio es: </strong>${this.direccion}. <br><strong> El número telefónico de contacto es: </strong>${this.telefono}. `
    };
};
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    };
    get tipo() {
        return this._tipo;
    };
    tipoAnimal() {
        return `<br><strong>El tipo de animal es un: </strong>${this.tipo}.`
    };
};
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    };
    get nombreMascota(){
        return this._nombreMascota;
    };
    set nombreMascota(nuevo_nombreMascota) {
        this._nombreMascota = nuevo_nombreMascota;
    };
    get enfermedad(){
        return this._enfermedad;
    };
    set enfermedad(nuevo_enfermedad) {
        this._nombreMascota = nuevo_enfermedad;
    };
    datosMascota() {
        return `${this.tipoAnimal()} <br><strong>El nombre de la mascota es:</strong> ${this.nombreMascota}. <br><strong> La enfermedad es: </strong>${this.enfermedad}.`;
    }
};

let agregar = document.querySelector("form");
agregar.addEventListener('submit', observando);

function observando(event) {
    event.preventDefault();
    const nombre = document.getElementById('propietario').value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const nombreMascota = document.getElementById("nombreMascota").value;
    const tipo = document.getElementById("tipo").value;
    const enfermedad = document.getElementById("enfermedad").value;
    const resultado = document.getElementById('resultado');
    const mascota1 = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
    console.log(mascota1.datosPropietario()+mascota1.datosMascota());
    resultado.innerHTML = mascota1.datosPropietario()+mascota1.datosMascota();
};

document.write("<br>");
document.write("<br>");













// function agregandoProp() {
//     let nombre = document.getElementById("propietario").value;
//     let telefono = document.getElementById("telefono").value;
//     let direccion = document.getElementById("direccion").value;
//     var propietario1 = new Propietario(nombre, telefono, direccion);
//     return propietario1;
// };

// function agregandoTipo() {
//     let tipo = document.getElementById("tipo").value;
//     var tipo1 = new Animal(tipo);
//     return tipo1;
// };

// function agregandoMasc() {
//     let nombreMascota = document.getElementById("nombreMascota").value;
//     let enfermedad = document.getElementById("enfermedad").value;
//     var mascota1 = new Mascota(nombreMascota, enfermedad);
//     return mascota1;
// };