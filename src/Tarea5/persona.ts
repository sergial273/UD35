export class Persona {
    protected nombre: string;
    protected edad: number;
    protected dinero: number;
  
    constructor(nombre: string, edad: number, dinero: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.dinero = dinero;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    getEdad(): number {
      return this.edad;
    }
  
    getDinero(): number {
      return this.dinero;
    }
  }
  
  