"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const persona_1 = require("./persona");
class Estudiante extends persona_1.Persona {
    constructor(nombre, edad, sexo, calificacion) {
        super(nombre, edad, sexo);
        this.calificacion = calificacion;
    }
    getCalificacion() {
        return this.calificacion;
    }
    hacerNovillos() {
        const novillos = super.hacerNovillos();
        if (novillos) {
            console.log(`${this.nombre} no va a clase.`);
        }
        return novillos;
    }
    estaAprobado() {
        return this.calificacion >= 5;
    }
}
exports.Estudiante = Estudiante;
