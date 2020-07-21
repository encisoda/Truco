class Jugador{
    constructor(){
    this.puntuacion = 0
    this.nombre = 'Daniel'
    this.turno = true
    }

    repartir(maso){
        document.getElementById()
    }
}

class Carta{
    constructor(num, p, img){
        this.numero = num
        this.palo = p
        this.imagen = img
    }
}

class Mazo{
    constructor(...cartas){
        this.cartas = cartas
    }

    mesclar(){
        this.cartas = this.cartas.sort(function(){return Math.random() - 0.5})
        for(let i = 1; i < 4; i++){
        document.getElementById('carta'+i).src = this.cartas[i-1].imagen

        }
    }
}

const carta1o = new Carta(1, 'Oro', "../img/1oro.jpg")
const carta2o = new Carta(2, 'Oro', "../img/2oro.jpg")
const carta3o = new Carta(3, 'Oro', "../img/3oro.jpg")
const carta4o = new Carta(4, 'Oro', "../img/4oro.jpg")
const carta5o = new Carta(5, 'Oro', "../img/5oro.jpg")
const carta6o = new Carta(6, 'Oro', "../img/6oro.jpg")
const carta7o = new Carta(7, 'Oro', "../img/7oro.jpg")
const carta10o = new Carta(10, 'Oro', "../img/10oro.jpg")
const carta11o = new Carta(11, 'Oro', "../img/11oro.jpg")
const carta12o = new Carta(12, 'Oro', "../img/12oro.jpg")

const carta1c = new Carta(1, 'Copa', "../img/1copa.jpg")
const carta2c = new Carta(2, 'Copa', "../img/2copa.jpg")
const carta3c = new Carta(3, 'Copa', "../img/3copa.jpg")
const carta4c = new Carta(4, 'Copa', "../img/4copa.jpg")
const carta5c = new Carta(5, 'Copa', "../img/5copa.jpg")
const carta6c = new Carta(6, 'Copa', "../img/6copa.jpg")
const carta7c = new Carta(7, 'Copa', "../img/7copa.jpg")
const carta10c = new Carta(10, 'Copa', "../img/10copa.jpg")
const carta11c = new Carta(11, 'Copa', "../img/11copa.jpg")
const carta12c = new Carta(12, 'Copa', "../img/12copa.jpg")

const carta1b = new Carta(1, 'Basto', "../img/1basto.jpg")
const carta2b = new Carta(2, 'Basto', "../img/2basto.jpg")
const carta3b = new Carta(3, 'Basto', "../img/3basto.jpg")
const carta4b = new Carta(4, 'Basto', "../img/4basto.jpg")
const carta5b = new Carta(5, 'Basto', "../img/5basto.jpg")
const carta6b = new Carta(6, 'Basto', "../img/6basto.jpg")
const carta7b = new Carta(7, 'Basto', "../img/7basto.jpg")
const carta10b = new Carta(10, 'Basto', "../img/10basto.jpg")
const carta11b = new Carta(11, 'Basto', "../img/11basto.jpg")
const carta12b = new Carta(12, 'Basto', "../img/12basto.jpg")

const carta1e = new Carta(1, 'Espada', "../img/1espada.jpg")
const carta2e = new Carta(2, 'Espada', "../img/2espada.jpg")
const carta3e = new Carta(3, 'Espada', "../img/3espada.jpg")
const carta4e = new Carta(4, 'Espada', "../img/4espada.jpg")
const carta5e = new Carta(5, 'Espada', "../img/5espada.jpg")
const carta6e = new Carta(6, 'Espada', "../img/6espada.jpg")
const carta7e = new Carta(7, 'Espada', "../img/7espada.jpg")
const carta10e = new Carta(10, 'Espada', "../img/10espada.jpg")
const carta11e = new Carta(11, 'Espada', "../img/11espada.jpg")
const carta12e = new Carta(12, 'Espada', "../img/12espada.jpg")

const mazo = new Mazo(carta1o, carta2o, carta3o, carta4o, carta4o, 
                carta5o, carta6o, carta7o, carta10o, carta11o, carta12o,
                carta1c, carta2c, carta3c, carta4c, carta4c, 
                carta5c, carta6c, carta7c, carta10c, carta11c, carta12c,
                carta1b, carta2b, carta3b, carta4b, carta4b, 
                carta5b, carta6b, carta7b, carta10b, carta11b, carta12b,
                carta1e, carta2e, carta3e, carta4e, carta4e, 
                carta5e, carta6e, carta7e, carta10e, carta11e, carta12e)

function repartir(){
    mazo.mesclar()
    console.log(mazo.cartas[1].numero)
}
