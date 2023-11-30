import { Cine } from './cine';
import { Espectador } from './espectador';
import { Pelicula } from './pelicula';

class MainApp {
  public static main(): void {

    const pelicula = new Pelicula("La Aventura", 120, 12, "Director A");

    const cine = new Cine(8, 9, pelicula, 10);

    const espectadores: Espectador[] = [];
    for (let i = 1; i <= 20; i++) {
      const nombre = `Espectador${i}`;
      const edad = Math.floor(Math.random() * 30) + 10;
      const dinero = Math.floor(Math.random() * 30) + 5;

      const espectador = new Espectador(nombre, edad, dinero);
      espectadores.push(espectador);
    }

    espectadores.forEach((espectador) => {
      cine.sentarEspectador(espectador);
    });
  }
}

// Ejecutar la aplicación principal
MainApp.main();
