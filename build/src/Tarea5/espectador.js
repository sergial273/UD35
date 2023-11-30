"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espectador = void 0;
const persona_1 = require("./persona");
class Espectador extends persona_1.Persona {
    constructor(nombre, edad, dinero) {
        super(nombre, edad, dinero);
    }
}
exports.Espectador = Espectador;
