"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = void 0;
class Aula {
    constructor(id, maxEstudiantes, materiaDestinada, profesor) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materiaDestinada = materiaDestinada;
        this.profesor = profesor;
        this.estudiantes = [];
    }
    agregarEstudiantes(estudiantes) {
        if (estudiantes.length <= this.maxEstudiantes) {
            this.estudiantes = estudiantes;
            console.log(`Estudiantes agregados al aula ${this.id}.`);
        }
        else {
            console.log('Error: Demasiados estudiantes para el tamaño del aula.');
        }
    }
    puedeDarClase() {
        const porcentajeAlumnos = this.estudiantes.filter((estudiante) => !estudiante.hacerNovillos()).length / this.estudiantes.length;
        return !this.profesor.noDisponible() && this.profesor.getMateria() === this.materiaDestinada && porcentajeAlumnos > 0.5;
    }
    mostrarEstado() {
        console.log(`Estado del aula ${this.id}:`);
        console.log(`Profesor: ${this.profesor.getNombre()}, Materia: ${this.profesor.getMateria()}`);
        console.log(`Estudiantes (${this.estudiantes.length}):`);
        this.estudiantes.forEach((estudiante) => {
            console.log(`${estudiante.getNombre()} (${estudiante.getSexo()}), Calificación: ${estudiante.getCalificacion()}`);
        });
    }
    mostrarAprobados() {
        const aprobados = this.estudiantes.filter((estudiante) => estudiante.estaAprobado());
        const hombresAprobados = aprobados.filter((estudiante) => estudiante.getSexo() === 'masculino').length;
        const mujeresAprobadas = aprobados.filter((estudiante) => estudiante.getSexo() === 'femenino').length;
        console.log('Estudiantes Aprobados:');
        console.log(`Hombres: ${hombresAprobados}`);
        console.log(`Mujeres: ${mujeresAprobadas}`);
    }
}
exports.Aula = Aula;
