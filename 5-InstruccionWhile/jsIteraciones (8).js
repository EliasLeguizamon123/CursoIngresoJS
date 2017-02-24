function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta=="si" && respuesta=="no")
		{
			contador++;
			acumulador=acumulador+parseInt(prompt("por favor ingrese un numero"));

			if (acumulador>0) 
				{
					acumulador=acumulador+acumulador;
				}
			else if (acumulador<0) 
				{
					acumulador=acumulador*acumulador;
				}
		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN