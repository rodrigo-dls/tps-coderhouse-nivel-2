// # Crear un array de peliculas
// ​
// - Crear una funcion que agrege una pelicula al array de peliculas
// - La pelicula debera tener un ID y un Titulo
// - Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
// - Crear una funcion que ordene las peliculas por Titulo y por ID
// - Crear una funcion que elimine una pelicula por su ID.

console.log("Creacion de un array de peliculas")

    //Arrays donde se van a guardar las peliculas
var arrayPeliculas = []
var arrayPeliculasID = []
var arrayPeliculasTitulo = []
    
    //Funcion creadora de peliculas
var Pelicula = function(peliculaID, peliculaTitulo){
    this.ID = peliculaID
    this.titulo = peliculaTitulo
}

    //Funcion creadora del array arrayPeliculasID
var arrayID = function(listaPeliculas){
    for( i = 0 ; i < listaPeliculas.length ; i++){
        arrayPeliculasID[i] = arrayPeliculas[i].ID
       // arrayPeliculasID.push(listaPeliculas[i].ID)
    }
    return arrayPeliculasID
}

    //Funcion creadora del array arrayPeliculasTitulo
var arrayTitulo = function(listaPeliculas){
    var arrayTitulo = []
    for( i = 0 ; i < listaPeliculas.length ; i++){
        arrayPeliculasTitulo[i] = arrayPeliculas[i].titulo  
      // arrayPeliculasTitulo.push(listaPeliculas[i].titulo)
    }
    return arrayPeliculasTitulo
}
    
    //Funcion que agrega peliculas al array de peliculas
var agregarPelicula = function(pelicula, listaPeliculas){
    var listaPeliculasID = arrayID(listaPeliculas)
    if(validarPeliculaID(pelicula, listaPeliculasID)){
        listaPeliculas.push(pelicula)
        console.log("Acabas de agregar", pelicula.titulo, "a la lista")
    }
}

    //Funcion para validar peliculas por ID
var validarPeliculaID = function(pelicula, listaPeliculasID){
    var resValidacion = listaPeliculasID.indexOf(pelicula.ID)
    if( resValidacion === -1){
        console.log("La pelicula no esta cargada en la lista de peliculas.")
        return true
    } else {
        console.log("La pelicula ya esta cargada en la lista de peliculas.")
        return false
    }
}

    //Funcion para ordenar peliculas
    //por ID
var ordenarID = function(listaPeliculas){
    var listaPeliculasID = arrayID(listaPeliculas)    
    var listaOrdenada = listaPeliculasID.sort()
    return listaOrdenada
}

    //por Titulo
var ordenarTitulo = function(listaPeliculas){
    var listaPeliculasTitulo = arrayTitulo(listaPeliculas) 
    var listaOrdenada = listaPeliculasTitulo.sort()
    return listaOrdenada
}

    //Funcion para eliminar pelicula por ID
var eliminarPeliculaID = function(pelicula, listaPeliculas){
    listaPeliculasID = arrayID(listaPeliculas)
    if(validarPeliculaID(pelicula, listaPeliculasID)) {
        console.log("No se puede eliminar la pelicula. No se encuentra en la base de datos.")
    } else {
        var posicionPelicula = listaPeliculas.indexOf(pelicula.ID)
        listaPeliculas.splice(posicionPelicula, 1)
        console.log("Acabas de eliminar", pelicula.titulo)
    }
}

    //Instanciaciones de prueba

var peli1 = new Pelicula("0001", "Los Infiltrados")
var peli2 = new Pelicula("0102", "El Padrino")
var peli3 = new Pelicula("0078", "Interestellar")
var peli4 = new Pelicula("4821", "Jurasic Park")
var peli5 = new Pelicula("0058", "Star Wars: episode III")
var peli6 = new Pelicula("0999", "Star Wars: episode V")

    //Ejecuciones de prueba

agregarPelicula(peli1, arrayPeliculas)
agregarPelicula(peli2, arrayPeliculas)
agregarPelicula(peli3, arrayPeliculas)
agregarPelicula(peli1, arrayPeliculas)
agregarPelicula(peli4, arrayPeliculas)
agregarPelicula(peli6, arrayPeliculas)
console.log("Lista de peliculas:", arrayPeliculas)
// arrayPeliculas = [peli1, peli2, peli3, peli4, peli6, peli5]
arrayTitulo(arrayPeliculas)
console.log("Lista de titulos:", arrayPeliculasTitulo)
// arrayID(arrayPeliculas)
console.log("Lista de IDs:", arrayPeliculasID)