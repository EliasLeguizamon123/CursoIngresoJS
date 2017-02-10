/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.floor((Math.random() * 100) + 1);
	 console.log(numeroSecreto);
     contadorIntentos=0;
     document.getElementById('intentos').value=contadorIntentos;
     contadorIntentos=parseInt(contadorIntentos);
     alert("Comienza el juego Numero Secreto, ¡¡Que te diviertas!!");

}

function verificar()
{
	var numeroUsuario;
	contadorIntentos=contadorIntentos+1;
	numeroUsuario=document.getElementById('numero').value;
	
	if (numeroUsuario==numeroSecreto && contadorIntentos==1)      //hasta esta linea me funciona el programa 
		{
      		alert("Usted es un Psíquico");
		}
		else if(contadorIntentos==2 && numeroUsuario==numeroSecreto)  //apartir de aca funciona pero no como deberia
		{                                                             //problemas con el contador 
			alert("excelente percepción");

		}
		else if (contadorIntentos==3 && numeroUsuario==numeroSecreto)
		{
			alert("esto es suerte");
			contadorIntentos=contadorIntentos+1;

		}
		else if (contadorIntentos==4 && numeroUsuario==numeroSecreto)
		{
			alert("Excelente tecnica");

		}
		else if(contadorIntentos==5 && numeroUsuario==numeroSecreto)
		{
			alert("usted esta en la media")

		}
		else if(contadorIntentos>=6 && contadorIntentos<=10 && numeroUsuario==numeroSecreto)
		{
			alert("falta tecnica");

		}
		else
		{
			alert("afortunado en el amor");
		}
	



	

}