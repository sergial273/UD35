"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serie_1 = require("./serie");
const videojuego_1 = require("./videojuego");
class MainApp {
    static main() {
        const series = [];
        const videojuegos = [];
        series[0] = new serie_1.Serie("Serie1", "Creador1");
        series[1] = new serie_1.Serie("Serie2", "Creador2");
        series[2] = new serie_1.Serie("Serie3", "Creador3");
        series[3] = new serie_1.Serie("Serie4", "Creador4");
        series[4] = new serie_1.Serie("Serie5", "Creador5");
        videojuegos[0] = new videojuego_1.Videojuego("Videojuego1", 25, "Compania1");
        videojuegos[1] = new videojuego_1.Videojuego("Videojuego2", 50, "Compania2");
        videojuegos[2] = new videojuego_1.Videojuego("Videojuego3", 40, "Compania3");
        videojuegos[3] = new videojuego_1.Videojuego("Videojuego4", 10, "Compania4");
        videojuegos[4] = new videojuego_1.Videojuego("Videojuego5", 60, "Compania5");
        series[0].entregar();
        series[2].entregar();
        videojuegos[1].entregar();
        videojuegos[3].entregar();
        const seriesEntregadas = series.filter((serie) => serie.isEntregado()).length;
        const videojuegosEntregados = videojuegos.filter((juego) => juego.isEntregado()).length;
        console.log(`Series entregadas: ${seriesEntregadas}`);
        console.log(`Videojuegos entregados: ${videojuegosEntregados}`);
        const videojuegoMasHoras = videojuegos.reduce((prev, current) => (prev.compareTo(current) > 0 ? prev : current));
        const serieMasTemporadas = series.reduce((prev, current) => (prev.compareTo(current) > 0 ? prev : current));
        console.log("Videojuego con mas horas:");
        console.log(videojuegoMasHoras.toString());
        console.log("Serie con mas temporadas:");
        console.log(serieMasTemporadas.toString());
    }
}
// Ejecutar la aplicación principal
MainApp.main();
