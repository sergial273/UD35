export class Libro {
    private isbn: string;
    private titulo: string;
    private autor: string;
    private numPaginas: number;
  
    constructor(isbn: string, titulo: string, autor: string, numPaginas: number) {
      this.isbn = isbn;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    getIsbn(): string {
      return this.isbn;
    }
  
    getTitulo(): string {
      return this.titulo;
    }
  
    getAutor(): string {
      return this.autor;
    }
  
    getNumPaginas(): number {
      return this.numPaginas;
    }
  
    setIsbn(isbn: string): void {
      this.isbn = isbn;
    }
  
    setTitulo(titulo: string): void {
      this.titulo = titulo;
    }
  
    setAutor(autor: string): void {
      this.autor = autor;
    }
  
    setNumPaginas(numPaginas: number): void {
      this.numPaginas = numPaginas;
    }
  
    toString(): string {
      return `El libro con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numPaginas} páginas.`;
    }
  }