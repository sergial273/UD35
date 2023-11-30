"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raices = void 0;
class Raices {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminante() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    tieneRaices() {
        return this.getDiscriminante() >= 0;
    }
    tieneRaiz() {
        return this.getDiscriminante() === 0;
    }
    calcular() {
        const discriminante = this.getDiscriminante();
        if (discriminante > 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Las raíces son ${raiz1} y ${raiz2}`);
        }
        else if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log(`La única raíz es ${raiz}`);
        }
        else {
            console.log('No existen soluciones reales.');
        }
    }
    obtenerRaices() {
        const discriminante = this.getDiscriminante();
        if (discriminante >= 0) {
            const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
            const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
            console.log(`Las raíces son ${raiz1} y ${raiz2}`);
        }
        else {
            console.log('No existen soluciones reales.');
        }
    }
    obtenerRaiz() {
        const discriminante = this.getDiscriminante();
        if (discriminante === 0) {
            const raiz = -this.b / (2 * this.a);
            console.log(`La única raíz es ${raiz}`);
        }
        else {
            console.log('No existen soluciones reales.');
        }
    }
}
exports.Raices = Raices;
