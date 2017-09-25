console.log("creando la ToDoList")
/*


*/
	var tareasArr = []

//Modulo ToDoList, aca voy a ir metiendo mis progresos paso a paso, mejor probar afuera, validar y despues meter
var ToDoList = (function(){
	var init
		
		//Constructor de tareas
		var NuevaTarea = function (id, titulo, descr, estadoBool) {
			this.id = id
			this.titulo = titulo
			this.descripcion = descr
			this.completado = estadoBool
		}
		//Creo 2 tareas hardcodeadas para ir testeando
		var tarea1 = new NuevaTarea(Date.now(), "Colgar la ropa", "Poner mas ropa para lavar despues", false)
		tareasArr.push(tarea1)
		var tarea2 = new NuevaTarea(Date.now(), "Hacer la comida", "Suprema al horno con zapallo.")
		tareasArr.push(tarea2)
		console.log(tareasArr)
		
		//Funcion que instancia los objetos tarea
		var crearTarea = function(tit, descr){
			var tarea = new NuevaTarea(Date.now(), tit, descr, false)
			tareasArr.push(tarea)
			console.log("Se creo una nueva tarea y se coloco al final de tareasArr.")
		
			return tareasArr[tareasArr.length-1] //El "-1" es porque al asignarle la nueva tarea tareasArr ya crecio 1 unidad.
		}

		//Funcion que agrega la tarea creada al HTML
		var crearTarea = function(){

			
		}

		var formulario = document.getElementById("formulario")

		//Agarro la info enviada por el usuario al clickear "Crear" y la uso para crear la nueva tarea.
	 		formulario.onsubmit = function(event){
			var tit = formulario[1].value
			var descr = formulario[2].value
			crearTarea(tit, descr)
			event.preventDefault();	

		}

	return {
		// No necesito poner el metodo porque se ejecuta cuando doy click en "crear"
		agregar: function(tit, descr) {
			var init = crearTarea(tit, descr)
			return init
		},
		mostrarTareasArr: function(){
			return tareasArr
		}
		// editar: ,
		// mostrarTodos: ,
		// buscar: ,
		// eliminar:

	}

})()
