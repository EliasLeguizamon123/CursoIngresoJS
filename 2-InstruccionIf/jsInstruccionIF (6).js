function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;

	if (edad>=18) 
		{
	      alert("sos mayor de edad");

		} 
	if(edad>=13 && edad<=17)
		{
			alert("sos un adolecente");

	    }
	if (edad<=12) 
		    {
		      alert("sos un niño");
		    }



}//FIN DE LA FUNCIÓN