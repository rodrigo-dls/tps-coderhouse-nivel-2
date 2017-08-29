console.log('TP #3')

//Declaro mis variables
var num1 = Number(prompt("Ingrese el primer numero", "0"))

var num2 = Number(prompt("Ingrese el segundo numero", "1"))

var operacionUsuario = prompt("Nombre la operacion que desea aplicar", "suma")

var operaciones = ['suma', 'resta', 'multiplicacion', 'division']

var sumar = function(a , b) {
	return a + b
} 

var restar = function(a , b) {
	return a - b
} 

var multiplicar = function(a , b) {
	return a * b
} 

var dividir = function(a , b) {
	return a / b
} 

//Proceso de la informacion

//con for
var validarOperacion = function(listaOperaciones, operacionAValidar){

	for (var i = 0; i < 4; i++){
		console.log(listaOperaciones[i])
		// if ( listaOperaciones[i] === operacionAValidar)
		}
}

validarOperacion(operaciones, operacionUsuario)

//con switch

// switch (operacionUsuario) {
// 	case 'suma':
// 		console.log(num1 + ' + ' + num2 + ' = ' + sumar(num1, num2))
// 		break;
// 	case 'resta':
// 		console.log(num1 + ' - ' + num2 + ' = ' + restar(num1, num2))
// 		break;	
// 	case 'multiplicacion':
// 		console.log(num1 + ' * ' + num2 + ' = ' + multiplicar(num1, num2))
// 		break;
// 	case 'division':
// 		console.log(num1 + ' / ' + num2 + ' = ' + dividir(num1, num2))
// 		break;

// 	default:
// 		operacionUsuario = console.log('Eso no es una operacion, lo siento.')
// 		break;
// }



