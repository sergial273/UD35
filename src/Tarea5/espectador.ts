import { Persona } from './persona';

export class Espectador extends Persona {
  constructor(nombre: string, edad: number, dinero: number) {
    super(nombre, edad, dinero);
  }
}