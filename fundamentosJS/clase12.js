var viviana = {
	nombre: 'Viviana',
	apellido: 'Romero',
	edad: 2,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}
function imprimirProfesiones(persona){
	console.log(`${persona.nombre} es:`)
	if(persona.ingeniero){
		console.log('Ingeniero')
	}
	if(persona.cocinero){
		console.log('Cocinero')
	}
	if(persona.dj){
		console.log('DJ')
	}
	if(persona.cantante){
		console.log('Cantante')
	}
	if(persona.guitarrista){
		console.log('Guitarrista')
	}
	if(persona.drone){
		console.log('Piloto de drone')
	}
}
var mayoriadeEdad = 18
const esMayorDeEdad = ({ edad }) => edad >= mayoriadeEdad

const mayorDeEdad = persona => {
	if (esMayorDeEdad(persona)) {
		console.log(`${persona.nombre} es mayor de edad`)
	}
	else{
		console.log(`${persona.nombre} es menor de edad`)
	}	
}
imprimirProfesiones(viviana)
mayorDeEdad(viviana)
permitirAcceso(viviana)

function permitirAcceso(persona){
	if (!esMayorDeEdad(persona)) {
		console.log('ACCESO DENEGADO')
	}
}