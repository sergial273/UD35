"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
class Cine {
    constructor(filas, columnas, pelicula, precioEntrada) {
        this.asientos = Array.from({ length: filas }, () => Array(columnas).fill(false));
        this.peliculaActual = pelicula;
        this.precioEntrada = precioEntrada;
    }
    sentarEspectador(espectador) {
        const fila = Math.floor(Math.random() * this.asientos.length);
        const columna = Math.floor(Math.random() * this.asientos[0].length);
        if (this.asientos[fila][columna]) {
            this.buscarAsientoLibre(espectador);
        }
        else {
            if (espectador.getDinero() >= this.precioEntrada && espectador.getEdad() >= this.peliculaActual.getEdadMinima()) {
                this.asientos[fila][columna] = true;
                console.log(`${espectador.getNombre()} se ha sentado en el asiento ${String.fromCharCode(65 + columna)}${fila + 1}.`);
            }
            else {
                console.log(`${espectador.getNombre()} no cumple las condiciones para ver la película.`);
            }
        }
    }
    buscarAsientoLibre(espectador) {
        for (let fila = 0; fila < this.asientos.length; fila++) {
            for (let columna = 0; columna < this.asientos[0].length; columna++) {
                if (!this.asientos[fila][columna]) {
                    // Encontrar un asiento libre y sentar al espectador si cumple las condiciones
                    if (espectador.getDinero() >= this.precioEntrada && espectador.getEdad() >= this.peliculaActual.getEdadMinima()) {
                        this.asientos[fila][columna] = true;
                        console.log(`${espectador.getNombre()} se ha sentado en el asiento ${String.fromCharCode(65 + columna)}${fila + 1}.`);
                        return;
                    }
                    else {
                        console.log(`${espectador.getNombre()} no cumple las condiciones para ver la película.`);
                        return;
                    }
                }
            }
        }
        console.log(`${espectador.getNombre()}, no hay asientos disponibles.`);
    }
}
exports.Cine = Cine;
