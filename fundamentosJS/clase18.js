var signo = prompt('¿Cúal es tu signo?')

switch (signo){
	case 'acuario':
		console.log('acuario')
		break;
	case 'cancer':
		console.log('cancer')
		break;
	case 'virgo':
		console.log('virgo')
		break;
	default:
		console.log('No es un signo zodiacal valido')
		break;
}