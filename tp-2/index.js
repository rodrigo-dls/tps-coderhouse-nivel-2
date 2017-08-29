

var day = prompt("Ingrese un dia de la semana ")

var weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

//Con for e if
for(var i = 0; i <= 6; i++) {

	if (weekDays[i] == day){
		if(i <= 4){
			alert("El dia es habil")
		} else {
			alert("El dia es fin de semana")
		}
	break
	}
}