function Mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;
if (edad<18 && edad>12) 
	{
		alert("Es adolecente")    //Lo que se hace en este caso es comparar (&&) las 2 condiciones en un solo "IF"
	}

}//FIN DE LA FUNCIÓN