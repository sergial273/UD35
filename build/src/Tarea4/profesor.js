"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const persona_1 = require("./persona");
class Profesor extends persona_1.Persona {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }
    getMateria() {
        return this.materia;
    }
    noDisponible() {
        const noDisponible = super.noDisponible();
        if (noDisponible) {
            console.log(`${this.nombre} no está disponible.`);
        }
        return noDisponible;
    }
}
exports.Profesor = Profesor;
