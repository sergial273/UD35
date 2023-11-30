import { Persona } from './persona';

export class Estudiante extends Persona {
  private calificacion: number;

  constructor(nombre: string, edad: number, sexo: string, calificacion: number) {
    super(nombre, edad, sexo);
    this.calificacion = calificacion;
  }

  getCalificacion(): number {
    return this.calificacion;
  }

  hacerNovillos(): boolean {
    const novillos = super.hacerNovillos();
    if (novillos) {
      console.log(`${this.nombre} no va a clase.`);
    }
    return novillos;
  }

  estaAprobado(): boolean {
    return this.calificacion >= 5;
  }
}