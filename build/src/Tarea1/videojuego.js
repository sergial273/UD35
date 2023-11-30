"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videojuego = void 0;
class Videojuego {
    constructor(titulo, horasEstimadas, compania) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas || 10;
        this.entregado = false;
        this.genero = "Sin género";
        this.compania = compania;
    }
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getGenero() {
        return this.genero;
    }
    getCompania() {
        return this.compania;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompania(compania) {
        this.compania = compania;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(a) {
        return this.horasEstimadas - a.getHorasEstimadas();
    }
    toString() {
        return `Título: ${this.titulo}, Horas estimadas: ${this.horasEstimadas}, Género: ${this.genero}, Compañía: ${this.compania}, Entregado: ${this.entregado}`;
    }
}
exports.Videojuego = Videojuego;
