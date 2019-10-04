var viviana = {
	nombre: 'Viviana',
	apellido: 'Romero',
	edad: 25
}

var beatriz = {
	nombre: 'Beatriz',
	apellido: 'Villamizar',
	edad: 24
}

function imprimirMayuscula(persona){
	// var nombre = persona.nombre
	var { nombre } = persona
	console.log(nombre.toUpperCase())
}
imprimirMayuscula(viviana)
imprimirMayuscula(beatriz)

function imprimirNombreYEdad(persona){
	var { nombre } = persona
	var { edad } = persona
	console.log(`Hola, me llamo ${ nombre } y tengo ${ edad } años`)
}

function cumpleanos(persona){
	persona.edad += 1
}