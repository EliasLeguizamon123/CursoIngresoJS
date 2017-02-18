function Mostrar()
{

	var contador=0;
	// declarar variables
	var bandera="nadie"; 
	var edadMax;
	var edadMin;
	var edad;
	var nombre;
	var respuesta='si';
	var nombreDelMayor;
	var sexo;
	var nota;
	var notaMinima;
	var sexoNotaMinima;
	var aprobadasMasculinos=0;
	var desaprobadasMasculinos=0;
	var aprobadasFemenino=0;
	var desaprobadasFemenino=0;
	var femenino;
	var masculino;
	var promedioDeNotas;
	var contadorDeNotas;
	var promedioDeMujeres;
	var nombreDelDiez;
	var edadDelDiez;
	var sexoDelDiez;


	while(respuesta!='no')
	{
		edad=prompt("ingrese un edad");
		edad=parseInt(edad);

		nombre=prompt("por favor ingrese nombre");		
			while(edad<0 || edad>100)
			{
				nombre=prompt("error, por favor ingrese nombre");
				edad=parseInt(edad);
			}

			sexo=prompt("por favor ingrese su sexo");
			while(sexo!="f" && sexo!="m")
			{	
				sexo=prompt("error, ingrese su sexo");
			}
			//la edad promedio de las mujeres












			nota=prompt("por favor ingrese su nota");
			while(nota<0 || nota>11)
			{
				nota=prompt("error, ingrese su nota");
				nota=parseInt(nota);
				
				if(nota==10 && bandera=="nadie")
				{
					nombreDelDiez=nombre;
					edadDelDiez=edad;
					sexoDelDiez=sexo;

				}

				promedioDeNotas=(contadorDeNotas/contador);

				
			}
		contador++;

			//cantidad de personas aprobadas, hombres o mujeres
			if(nota>4)
			{

				aprobadas=sexo;
			}
			if (sexo=="masculino" && nota<3) 
			{
				desaprobadasMasculinos++;
			}
			else 
			{
				aprobadasMasculinos++;
			}
			if(sexo=="femenino" && nota<3)
			{
				desaprobadasFemenino++;
			}
			else
			{
				aprobadasFemenino++;
			}
		//cantidad de mujeres que aprobaron con nota par y son menores de edad

		if(sexo==femenino && nota>3)
		{
			if()
			{

			}
		}	if(edad<19)
		{
			contador++;
		}
		//guardar el dato del primero que se saco 10


		if (contador==1) 
		{
			edadMax=edad;
			edadMin=edad;
			nombre=nombreDelMayor;
		}
		else if(edad>edadMax)
		{
			edadMax=edad;
			nombreDelMayor=nombre;
		}
		else if(edad<edadMin)
		{
			edadMin=edad;
		}
		 if(contador==1)
		{
			notaMinima=nota;
			sexoNotaMinima=nota;
		}
		if (nota>notaMinima) 
		{
			notaMinima=nota;

		}//while(respuesta!='no')

		promedioDeNotas=nota+contador;



		respuesta=prompt("para salir teclee no")
	
	
	}




}//FIN DE LA FUNCIÓN