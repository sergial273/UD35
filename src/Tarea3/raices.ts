export class Raices {
    private a: number;
    private b: number;
    private c: number;
  
    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }

    getDiscriminante(): number {
      return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
  
    tieneRaices(): boolean {
      return this.getDiscriminante() >= 0;
    }
  
    tieneRaiz(): boolean {
      return this.getDiscriminante() === 0;
    }
  
    calcular(): void {
      const discriminante = this.getDiscriminante();
  
      if (discriminante > 0) {
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`Las raíces son ${raiz1} y ${raiz2}`);
      } else if (discriminante === 0) {
        const raiz = -this.b / (2 * this.a);
        console.log(`La única raíz es ${raiz}`);
      } else {
        console.log('No existen soluciones reales.');
      }
    }
  
    obtenerRaices(): void {
      const discriminante = this.getDiscriminante();
  
      if (discriminante >= 0) {
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`Las raíces son ${raiz1} y ${raiz2}`);
      } else {
        console.log('No existen soluciones reales.');
      }
    }
  
    obtenerRaiz(): void {
      const discriminante = this.getDiscriminante();
  
      if (discriminante === 0) {
        const raiz = -this.b / (2 * this.a);
        console.log(`La única raíz es ${raiz}`);
      } else {
        console.log('No existen soluciones reales.');
      }
    }
  }
  