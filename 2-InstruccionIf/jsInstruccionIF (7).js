function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	var Soltero;
    var Casado;
    var Divorciado;

	edad=document.getElementById('edad').value;
    /*soltero=document.getElementById('Soltero').value;
    /*casado=document.getElementById('Casado').value;
    divorciado=document.getElementById('Divorciado').value;*/
    estadiCivil=document.getElementById('estadoCivil').value;
    edad=parseInt(edad);
    if (edad<18)
    	{
         if (estadoCivil=="Soltero") 
            {
             alert(" aun es menor y es soltero");
            }
        else if (estadoCivil=="Casado")
            {
             alert("es muy pequeño para no ser soltero");   
            }
    	} 

    	



}//FIN DE LA FUNCIÓN