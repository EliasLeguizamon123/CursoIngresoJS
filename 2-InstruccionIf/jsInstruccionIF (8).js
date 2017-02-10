function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	var soltero;
	var casado;
	var divorciado;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	edad=parseInt(edad);

	if (edad<18) 
		{
         	if(estadoCivil=="soltero")
         	{
         		alert("aun es menor y tambien soltero");	
         	} else if(edad>17)
         	{
         	 	if(estadoCivil=="soltero")
         	 	{
         	 		alert("es soltero y no es menor")
         	 	}	
         	}
		}
	


}//FIN DE LA FUNCIÓN