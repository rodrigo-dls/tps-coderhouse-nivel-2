console.log("Tp 6")
// Crear el modulo IMDB
// El array de peliculas tendra que ser privado del modulo
// El modulo tendra que poder agregar una pelicula (ID y titulo)
// Validar que la pelicula ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error
// El modulo tendra que eliminar una pelicula por ID
// El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por paramentro y mostrarlo en consola
// El modulo tendra que persistir el array de peliculas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando


var IMDB = (function () {
	var arrayPeliculas = []
	var arrayPeliculasID = []

	var Pelicula = function(peliculaID, peliculaTitulo){
    this.ID = peliculaID
		this.titulo = peliculaTitulo
	}

	var peli1 = new Pelicula("0001", "Los Infiltrados")
		
	var arrayID = function(listaPeliculas){
    for( i = 0 ; i < listaPeliculas.length ; i++){
        arrayPeliculasID[i] = arrayPeliculas[i].ID
       // arrayPeliculasID.push(listaPeliculas[i].ID)
    }
		return arrayPeliculasID
	}

	return {
			agregarPelicula : function(pelicula, listaPeliculas){
				var listaPeliculasID = arrayID(listaPeliculas)
				if(validarPeliculaID(pelicula, listaPeliculasID)){
						listaPeliculas.push(pelicula)
						console.log("Acabas de agregar", pelicula.titulo, "a la lista")
				}
		}
  };

})();
