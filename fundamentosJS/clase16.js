var viviana = {
	nombre: 'Viviana',
	apellido: 'Romero',
	edad: 25,
	peso: 50
}

console.log(`Al principio del año ${viviana.nombre} pesa ${viviana.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazatDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

const META = viviana.peso - 3

while(viviana.peso > META){
	// debugger
	if(comeMucho()){
		aumentarDePeso(viviana)
	}
	if(realizaDeporte()){
		adelgazatDePeso(viviana)
	}
	dias+= 1
}

console.log(`Pasaron ${dias} dias hasta que ${viviana.nombre}`)