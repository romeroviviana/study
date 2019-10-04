var viviana = {
	nombre: 'Viviana',
	apellido: 'Romero',
	edad: 25,
	peso: 50
}

console.log(`Al principio del año ${viviana.nombre} pesa ${viviana.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazatDePeso = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANO; i++){
	var random = Math.random()
	if(random < 0.25){
		aumentarDePeso(viviana)
	}
	else if(random < 0.5){
		adelgazatDePeso(viviana)
	}
}

console.log(`Al final del año ${viviana.nombre} pesa ${viviana.peso.toFixed(1)} kg`)