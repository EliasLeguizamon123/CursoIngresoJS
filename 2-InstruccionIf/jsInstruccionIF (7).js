function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	var Soltero;

	edad=document.getElementById('edad').value;
    /*soltero=document.getElementById('Soltero').value;
    /*casado=document.getElementById('Casado').value;
    divorciado=document.getElementById('Divorciado').value;*/
    estadiCivil=document.getElementById('estadoCivil').value;
    if (edad<18 && estadoCivil!="soltero")
    	{
         alert("es muy pequeño para NO ser soltero")
    	}
    	



}//FIN DE LA FUNCIÓN