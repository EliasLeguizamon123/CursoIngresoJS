function Mostrar()
{
/*
	var contador=0;
	var acumulador=0;
	var numero1=prompt("ingrese su primer numero");
	numero1=parseInt(numero1);
	var numero2=prompt("ingrese su segundo numero");
	numero2=parseInt(numero2);
	var numero3=prompt("ingrese su tercer numero");
	numero3=parseInt(numero3);
	var numero4=prompt("ingrese su cuarto numero");
	numero4=parseInt(numero4);
	var numero5=prompt("ingrese su ultimo numero");
	numero5=parseInt(numero5);
*/
	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5)
		{
			contador++;
			acumulador=acumulador+parseInt(prompt("ingrese un numero"));  //con esta linea de comando lo que yo hago es 
		}																  //pedir un numero 5 veces, transformarlo a entero
																		  //y sumarlo al numero anterior que se pidio

document.getElementById('suma').value=acumulador;						  //despues en las lineas 27, 28 esa suma y el promedio
document.getElementById('promedio').value=acumulador/5;					  //los guardo dentro de los Texbox de la pag web

}//FIN DE LA FUNCIÓN