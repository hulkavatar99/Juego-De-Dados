function Jugador(nombre) {
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

function JuegoDados(numeroJuego, j1, j2) {
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function () {
        this.jugador1.caraDado1 = Math.floor(Math.random() * 6) + 1; //usar random(1,6)
        this.jugador1.caraDado2 = Math.floor(Math.random() * 6) + 1;

        this.jugador2.caraDado1 = Math.floor(Math.random() * 6) + 1;
        this.jugador2.caraDado2 = Math.floor(Math.random() * 6) + 1;
    }

    this.determinaGanador = function () {
        if ((this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7)) {
            return this.jugador1.nombre
        }
        else if ((this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7)) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");






let juego1 = new JuegoDados(3, pedro, antonio);


juego1.tirarDados();
let ganador = juego1.determinaGanador();

if (juego1.determinaGanador == "Antonio Ramirez") {
    i = 0; {
        i++;
    }
    console.log("El ganador es Antonio Ramírez");
}


console.log("El ganador del los 3 juegos es : " + ganador);


