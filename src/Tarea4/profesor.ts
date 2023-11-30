import { Persona } from './persona';

export class Profesor extends Persona {
  private materia: string;

  constructor(nombre: string, edad: number, sexo: string, materia: string) {
    super(nombre, edad, sexo);
    this.materia = materia;
  }

  getMateria(): string {
    return this.materia;
  }

  noDisponible(): boolean {
    const noDisponible = super.noDisponible();
    if (noDisponible) {
      console.log(`${this.nombre} no está disponible.`);
    }
    return noDisponible;
  }
}
