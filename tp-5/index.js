// # Crear un array de peliculas
// ​
// - Crear una funcion que agrege una pelicula al array de peliculas
// - La pelicula debera tener un ID y un Titulo
// - Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
// - Crear una funcion que ordene las peliculas por Titulo y por ID
// - Crear una funcion que elimine una pelicula por su ID.
// Crear un array de peliculas

console.log("Creacion de un array de peliculas")

    //Array donde se van a guardar las peliculas
var arrayPeliculas = []

    //Funcion creadora de peliculas
var pelicula = function(peliculaID, peliculaTitulo){
    this.ID = peliculaID
    this.titulo = peliculaTitulo
}

    //Funcion que agrega peliculas al array de peliculas
var agregarPelicula = function(pelicula, listaPeliculas){
    listaPeliculas.push(pelicula.ID)
}

    //Funcion para validar peliculas por ID
var validarPeliculaID = function(pelicula, listaPeliculas){
    var resValidacion = listaPeliculas.indexOf(pelicula.ID)
    if( resValidacion === -1){
        console.log("La pelicula no esta cargada en la lista de peliculas.")
    } else {
        console.log("La pelicula ya esta cargada en la lista de peliculas.")
    }
    return resValidacion
}

var peli1 = new pelicula("0001", "Los Infiltrados")
var peli2 = new pelicula("0102", "El Padrino")
var peli3 = new pelicula("0078", "Interestellar")
arrayPeliculas = ["0245", "0007", "0102", "0247"]

