import { Libro } from './libro';

const libro1 = new Libro('isbn1', 'Titulo1', 'Autor1', 300);
const libro2 = new Libro('isbn2', 'Titulo2', 'Autor2', 500);

// Mostrar información por pantalla
console.log(libro1.toString());
console.log(libro2.toString());

// Indicar cuál de los dos libros tiene más páginas
const libroConMasPaginas = libro1.getNumPaginas() > libro2.getNumPaginas() ? libro1 : libro2;

console.log(`El libro con mas paginas es: ${libroConMasPaginas.getTitulo()}`);
