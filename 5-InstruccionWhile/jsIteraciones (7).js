function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	
	while(respuesta=="si" && respuesta=="no")
	{
		contador++;
		acumulador=acumulador+parseInt(prompt("por favor ingrese un numero"));
		respuesta=prompt("seguir ingresando numeros? responder con (si o con no)");
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN