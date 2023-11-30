"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cine_1 = require("./cine");
const espectador_1 = require("./espectador");
const pelicula_1 = require("./pelicula");
class MainApp {
    static main() {
        const pelicula = new pelicula_1.Pelicula("La Aventura", 120, 12, "Director A");
        const cine = new cine_1.Cine(8, 9, pelicula, 10);
        const espectadores = [];
        for (let i = 1; i <= 20; i++) {
            const nombre = `Espectador${i}`;
            const edad = Math.floor(Math.random() * 30) + 10;
            const dinero = Math.floor(Math.random() * 30) + 5;
            const espectador = new espectador_1.Espectador(nombre, edad, dinero);
            espectadores.push(espectador);
        }
        espectadores.forEach((espectador) => {
            cine.sentarEspectador(espectador);
        });
    }
}
// Ejecutar la aplicación principal
MainApp.main();
