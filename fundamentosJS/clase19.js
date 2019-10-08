var ana = {
	nombre: 'Ana',
	apellido: 'Banana',
	altura: 1.72,
	cantidadDeLibros: 100
}
var diana = {
	nombre: 'Diana',
	apellido: 'Banana',
	altura: 1.86,
	cantidadDeLibros: 194
}
var viviana = {
	nombre: 'Vivina',
	apellido: 'Banana',
	altura: 1.60,
	cantidadDeLibros: 200
}
var mariana = {
	nombre: 'Mariana',
	apellido: 'Banana',
	altura: 1.80,
	cantidadDeLibros: 150
}
var juliana = {
	nombre: 'Juliana',
	apellido: 'Banana',
	altura: 1.77,
	cantidadDeLibros: 101
}
var cristiana = {
	nombre: 'Cristiana',
	apellido: 'Banana',
	altura: 1.45,
	cantidadDeLibros: 145
}
var esAlta = ({altura}) => altura > 1.7
var esBaja = ({altura}) => altura <= 1.7
var alturaEnCm = persona => ({
	...persona,
		altura: persona.altura * 100
})
var personas = [ana, diana, viviana, mariana, juliana, cristiana]

var personasAltas = personas.filter(esAlta)	
var personasBajas = personas.filter(esBaja)

var personaEnCms = personas.map(alturaEnCm)

const reducer = (acum, {cantidadDeLibros} ) => {
	return acum + cantidadDeLibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total tos tiene ${totalDeLibros} libros`)