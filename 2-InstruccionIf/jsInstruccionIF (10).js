function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = Math.floor((Math.random() * 10) + 1);  //se genera el numero secreto 
	console.log(nota)
    if (nota>=9)                                  //si es mayor o igual a 9 el mensaje sera ""
    	{
         	alert("EXELENTE");
    	}
    	else if(nota>4 && nota<=8)        		  //si es mayor que 4 y menor/igual que 8 el mensaje sera "APROBO"
    	{
         	alert("Aprobo");
    	}
    	else                                     //de caso contrario los numeros excluidos de los if anteriores son los menores a 4 
    	{                                        //en ese caso muestra el mensaje "vamos la proxima se puede" 
    	 	alert("Vamos la proxima se puede");	
    	}
}//FIN DE LA FUNCIÓN