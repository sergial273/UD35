import { Serie } from './serie';
import { Videojuego } from './videojuego';

class MainApp {
    public static main(): void {
        const series: Serie[] = [];
        const videojuegos: Videojuego[] = [];
        
        series[0] = new Serie("Serie1", "Creador1");
        series[1] = new Serie("Serie2", "Creador2");
        series[2] = new Serie("Serie3", "Creador3");
        series[3] = new Serie("Serie4", "Creador4");
        series[4] = new Serie("Serie5", "Creador5");
        
        videojuegos[0] = new Videojuego("Videojuego1", 25, "Compania1");
        videojuegos[1] = new Videojuego("Videojuego2", 50, "Compania2");
        videojuegos[2] = new Videojuego("Videojuego3", 40, "Compania3");
        videojuegos[3] = new Videojuego("Videojuego4", 10, "Compania4");
        videojuegos[4] = new Videojuego("Videojuego5", 60, "Compania5");
        
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
  