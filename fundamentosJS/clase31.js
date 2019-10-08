const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

function obtenerPersona(id, callback){
	const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
	$.get(url,opts, function(persona){
		console.log(`Hola, yo soy ${persona.name}`)

		if(callback)
		{
			callback()
		}
	})
}

obtenerPersona(1, function(){
	obtenerPersona(2, function(){
		obtenerPersona(3)
	})
})