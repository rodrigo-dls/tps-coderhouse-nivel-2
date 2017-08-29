console.log('TP #3')

//Declaro mis variables
var num1 = Number(prompt("Ingrese el primer numero", "0"))

var num2 = Number(prompt("Ingrese el segundo numero", "1"))

var operacionUsuario = prompt("Nombre la operacion que desea aplicar", "suma")

var operaciones = ['suma', 'resta', 'multiplicacion', 'division']

//Declaro mis funciones
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


//Proceso la informacion

//con for

var validarOperacion = function(listaOperaciones, operacionAValidar, a, b){
	for (var i = 0; i <= listaOperaciones.length ; i++ ) {
		// console.log(listaOperaciones[i])
		if ( i < 4) {
			if ( listaOperaciones[i] === operacionAValidar) {
				var arrayFunciones = [sumar, restar, multiplicar, dividir]
				return arrayFunciones[i](a , b)			
			}
		} else {
				operacionAValidar = prompt('Eso no es una operacion, lo siento. Intenta de nuevo')
				operacionUsuario = operacionAValidar
				i = 0
		}
	}
}

//Muestro el resultado
var resultado = validarOperacion(operaciones, operacionUsuario, num1, num2)

console.log('El resultado de la ' + operacionUsuario + ' es: ' + resultado)



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



