const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

function obtenerPersona(id, callback){
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
		$.get(url,opts, function(data){
			resolve(data)
		})	
		.fail(() => reject(id))
	})
}
function onError(id){
	console.log(`Hubo un error en el id ${id}`)
}
obtenerPersona(1)
	.then((personaje) => {
		console.log(`Hola, yo soy ${personaje.name}`)
		return obtenerPersona(2)
	})
	.then((personaje) => {
		console.log(`Hola, yo soy ${personaje.name}`)
		return obtenerPersona(3)
	})
	.then((personaje) => {
		console.log(`Hola, yo soy ${personaje.name}`)
	})
	.catch(onError)