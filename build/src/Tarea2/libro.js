"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    getIsbn() {
        return this.isbn;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setIsbn(isbn) {
        this.isbn = isbn;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    toString() {
        return `El libro con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
}
exports.Libro = Libro;
