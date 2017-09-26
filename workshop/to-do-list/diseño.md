# Workshop ToDoList

## Consigna:

[x] Crear el modulo ToDoList
[] El modulo debera tener los metodos necesarios para Agregar, Editar, Mostrar Todos, Buscar y Eliminar.
[x] Una tarea contiene las siguientes propiedades: id, titulo, descripcion y completado
[] Se tiene que poder editar titulo y descripcion de una tarea
[] Cambiar a estado completado y descompletado(?) una tarea
[] Eliminar una tarea o todas las tareas
[] Ordernar por A-Z y Z-A las tareas ya sea por titulo como por ID
[] Las tareas Deberan quedar persistidas mediante localstorage y poder mostrarse en caso de recargar el browser


## A pensar...

Creo un modulo (var function que va a tener seccion priv y publ) "ToDoList". 

En el RETURN del modulo voy a colocar los metodos:
- Agregar, es lo mismo que CREAR, func constr
- Editar
- Mostrar Todos
- Buscar
- Eliminar

Le voy a poner adentro una func **constructora de tareas** con las propiedades

1. ID
2. titulo
3. descripcion
4. completado

* 2 y 3 los tengo que poder editar: voy a usar un metodo que reciba el string dado y devuelva el nuevo empleando algun metodo del DOM

* 4 es un estado, basta por el momento porque funcione con un booleano. Lo inicio siempre como "completado : false"

* para eliminar la tarea voy a aplicar algun metodo del DOM que me borre el tag necesario pero no voy a borrarlo de la lista de IDS (sirve para recuperar tareas perdidas por accidente o viejas)

* 1 y 2 tengo que poder ordenarlos, utilizare sort para el array que genere de estos.

* el almacenamiento en locallStorage lo dejo para lo ultimo porque no lo entiendo bien