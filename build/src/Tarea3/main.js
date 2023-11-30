"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raices_1 = require("./raices");
const ecuacion = new raices_1.Raices(1, -3, 2);
console.log(`Discriminante: ${ecuacion.getDiscriminante()}`);
console.log(`¿Tiene raíces? ${ecuacion.tieneRaices()}`);
console.log(`¿Tiene raíz única? ${ecuacion.tieneRaiz()}`);
ecuacion.calcular();
