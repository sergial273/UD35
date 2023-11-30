"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aula_1 = require("./aula");
const estudiante_1 = require("./estudiante");
const profesor_1 = require("./profesor");
class MainApp {
    static main() {
        const profesor = new profesor_1.Profesor("Profesor X", 35, "masculino", "matemáticas");
        const estudiantes = [
            new estudiante_1.Estudiante("Estudiante1", 20, "masculino", 8),
            new estudiante_1.Estudiante("Estudiante2", 22, "femenino", 6),
            new estudiante_1.Estudiante("Estudiante3", 21, "masculino", 4),
            new estudiante_1.Estudiante("Estudiante4", 23, "femenino", 7),
            new estudiante_1.Estudiante("Estudiante5", 24, "masculino", 9),
        ];
        const aula = new aula_1.Aula(1, 10, "matemáticas", profesor);
        aula.agregarEstudiantes(estudiantes);
        aula.mostrarEstado();
        if (aula.puedeDarClase()) {
            console.log("Se puede dar clase en el aula.");
            aula.mostrarAprobados();
        }
        else {
            console.log("No se puede dar clase en el aula.");
        }
    }
}
// Ejecutar la aplicación principal
MainApp.main();
