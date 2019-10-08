class Persona{
	constructor(nombre, apellido, altura){
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}

	saludar(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
	}
	soyAlto(){
		return this.altura > 1.8
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura){
		super(nombre, apellido, altura)
	}
	saludar(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} soy desarrollador`)
	}

}


var viviana = new Persona('Viviana','Romero',1.7)
var maria = new Desarrollador('Maria','Romero',1.85)
// var elsa = new Persona('Elsa','Romero',1.92)

