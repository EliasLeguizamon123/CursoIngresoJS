	function Mostrar()
	{ 
		var mascota;
		var respuesta="si";
		var contadorMascotasSi=0;
		var contadorMascotasNo=0;
		var tipoDeMascota;
		var contador=0;
		var edad;
		var sexo;
		var nombreGato;
		var edadGato;


		
		
		for( ;contador<10 ; )
		{
			respuesta=prompt("tiene mascota? ");
			edad=prompt("Ingrese su edad");

			while(respuesta!="si" || respuesta!="no")    //funciona mal
			{
					respuesta=prompt("Eso no viene al caso!!, ¿tiene mascota?");
			}
			
			if (respuesta=="si") 
			{
				contadorMascotasSi++;
				tipoDeMascota=prompt("¿Que tipo de mascota es?");

				while(tipoDeMascota!="perro" && tipoDeMascota!="gato")
				{
					tipoDeMascota=prompt("Tipo de mascota incorrecto, ¿Que tipo de mascota es?");
				}

			else  
			{
				contadorMascotasNo++;
				//persona mas vieja que no tenga mascotas
				if(edad>=18 && respuesta=="no")
				{	

					
							
						}
			//necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga 
			//mas de 5 años de edad
			}

			}
			
			contador++;
			
		}

	}