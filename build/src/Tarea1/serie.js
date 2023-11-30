"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(titulo, creador) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "Sin género";
        this.creador = creador;
    }
    // Métodos get y set
    getTitulo() {
        return this.titulo;
    }
    getNumeroTemporadas() {
        return this.numeroTemporadas;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setNumeroTemporadas(numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCreador(creador) {
        this.creador = creador;
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
        return this.numeroTemporadas - a.getNumeroTemporadas();
    }
    toString() {
        return `Título: ${this.titulo}, Temporadas: ${this.numeroTemporadas}, Género: ${this.genero}, Creador: ${this.creador}, Entregado: ${this.entregado}`;
    }
}
exports.Serie = Serie;
