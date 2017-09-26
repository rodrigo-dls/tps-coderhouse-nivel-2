console.log("creando la ToDoList")
/*


*/
	var tareasArr = [] //Ya no se cargan mas en este array, ahora se cargan en el localStorage
var tareasActuales = (function(){
	for (var i = 0; i < localStorage.length; i++)	{
		var id = localStorage.key(i)
		var tit = JSON.parse(localStorage.getItem(id)).titulo
		var descr = JSON.parse(localStorage.getItem(id)).descripcion
		var estado = JSON.parse(localStorage.getItem(id)).estado
		var listaTareas = document.getElementById("lista-tareas")
		var nuevoNodo = document.createElement("li")
		nuevoNodo.innerHTML = '<div class="item-lista-container">\
			<input type="checkbox" name="estado" id="' + estado  + '">\
			<h2 class="item-lista-titulo">' + tit + '</h2>\
			<p class="item-lista-descr">' + descr + '</p>\
			<i class="fa fa-times basura" aria-hidden="true"></i>\
			<i class="fa fa-pencil-square editor" aria-hidden="true"></i>\
		</div>'
		listaTareas.appendChild(nuevoNodo)
	}
})()

//Modulo ToDoList, aca voy a ir metiendo mis progresos paso a paso, mejor probar afuera, validar y despues meter
var ToDoList = (function(){
	var init
		
		//Constructor de tareas
		var NuevaTarea = function (id, titulo, descr, estadoBool) {
			this.id = id
			this.titulo = titulo
			this.descripcion = descr
			this.estado = estadoBool // True es 'completado', False es 'sin terminar'
		}

/* 		//Creo 2 tareas hardcodeadas para ir testeando
		var tarea1 = new NuevaTarea(Date.now(), "Colgar la ropa", "Poner mas ropa para lavar despues", false)
		tareasArr.push(tarea1)
		var tarea2 = new NuevaTarea(Date.now(), "Hacer la comida", "Suprema al horno con zapallo.")
		tareasArr.push(tarea2)
		console.log(tareasArr)
		 */
		
		//Funcion que instancia los objetos tarea
		var crearTarea = function(tit, descr){
			var tarea = new NuevaTarea(Date.now(), tit, descr, false)
			// tareasArr.push(tarea)  Como cargo la info a localStorage, no la cargo mas al tareasArray
			console.log("Se creo una nueva tarea.")
		
			return tarea //El "-1" es porque al asignarle la nueva tarea tareasArr ya crecio 1 unidad.
		}

		//Funcion que guarda la data en localStorage y la devuelve
		var guardarEnLS = function(tarea){
			localStorage.setItem(tarea.id, JSON.stringify(tarea))
			console.log("Se guardo la tarea en el LS.")
			return tarea
		}

 		//Funcion que agrega la tarea creada al HTML
		var mostrarTarea = function(tit, descr, estado){
			var listaTareas = document.getElementById("lista-tareas")
			var nuevoNodo = document.createElement("li")
			nuevoNodo.innerHTML = '<div class="item-lista-container">\
				<input type="checkbox" name="estado" id="' + estado  + '">\
				<h2 class="item-lista-titulo">' + tit + '</h2>\
				<p class="item-lista-descr">' + descr + '</p>\
				<i class="fa fa-times basura" aria-hidden="true"></i>\
				<i class="fa fa-pencil-square editor" aria-hidden="true"></i>\
			</div>'
			listaTareas.appendChild(nuevoNodo)
			console.log("Se creo un nodo nuevo con la tarea creada.")
		}
 
		var formulario = document.getElementById("formulario")

		//Agarro la info enviada por el usuario al clickear "Crear" y la uso para crear la nueva tarea.
		formulario.onsubmit = function(event){
			var tit = formulario[1].value
			var descr = formulario[2].value
			var tarea = crearTarea(tit, descr)
			guardarEnLS(tarea)
			var titLS = JSON.parse(localStorage.getItem(tarea.id)).titulo
			var descrLS = JSON.parse(localStorage.getItem(tarea.id)).descripcion
			var estadoLS = JSON.parse(localStorage.getItem(tarea.id)).estado
			mostrarTarea(titLS, descrLS, estadoLS)
			event.preventDefault();	

		}

		//Funcion que edita el contenido texto de un nodo, sin terminar
		var editar = function(string){
			var textoOriginal = string
			var textoEditado = string

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
