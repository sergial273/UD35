"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getSexo() {
        return this.sexo;
    }
    hacerNovillos() {
        return Math.random() < 0.5;
    }
    noDisponible() {
        return Math.random() < 0.2;
    }
}
exports.Persona = Persona;
