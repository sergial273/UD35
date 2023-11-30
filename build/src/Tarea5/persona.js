"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getDinero() {
        return this.dinero;
    }
}
exports.Persona = Persona;
