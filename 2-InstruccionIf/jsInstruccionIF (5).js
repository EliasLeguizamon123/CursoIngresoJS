function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	if (!(edad<18 && edad>12))                     //!(var) asi se negan las condiciones
		{
           alert(" no es adolecente");
		}
	
}//FIN DE LA FUNCIÓN