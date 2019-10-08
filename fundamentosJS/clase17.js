var contador = 0
var vez = 'veces'

const llueve = () => Math.random() < 0.25

do{
	contador++;
} while(!llueve())

if (contador === 1) {
	vez = 'vez'
}

console.log(`Fui a ver si llovia ${contador} ${vez}`)