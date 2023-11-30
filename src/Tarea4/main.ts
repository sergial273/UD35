import { Aula } from './aula';
import { Estudiante } from './estudiante';
import { Profesor } from './profesor';

class MainApp {
  public static main(): void {
    const profesor = new Profesor("Profesor X", 35, "masculino", "matemáticas");

    const estudiantes: Estudiante[] = [
      new Estudiante("Estudiante1", 20, "masculino", 8),
      new Estudiante("Estudiante2", 22, "femenino", 6),
      new Estudiante("Estudiante3", 21, "masculino", 4),
      new Estudiante("Estudiante4", 23, "femenino", 7),
      new Estudiante("Estudiante5", 24, "masculino", 9),
    ];

    const aula = new Aula(1, 10, "matemáticas", profesor);

    aula.agregarEstudiantes(estudiantes);

    aula.mostrarEstado();

    if (aula.puedeDarClase()) {
      console.log("Se puede dar clase en el aula.");

      aula.mostrarAprobados();
    } else {
      console.log("No se puede dar clase en el aula.");
    }
  }
}

// Ejecutar la aplicación principal
MainApp.main();
