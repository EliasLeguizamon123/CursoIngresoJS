/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{   

	alert("usted comenzo el juego Numero secreto")
    
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	
	numeroSecreto=document.getElementById('numero').value;         //Estas lineas de codigo cargan el numero que ingrese el usuario en 
	numeroSecreto=parseInt(numeroSecreto);                         //la TextBox de "ingrese un numero" 
	alert("usted ingreso el numero"+numeroSecreto)                 //y avisa al usuario de que numero ingreso


	contadorIntentos=document.getElementById('intentos').value;    //todavia no funciona
	contadorIntentos=parseInt(contadorIntentos); 


	alert("cantidad de intentos:"+contadorIntentos);
    alert(numeroSecreto);

}