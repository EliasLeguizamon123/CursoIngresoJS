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
		var edadMayor;
		var dueñosGatos=0;
		var dueñosPerros=0;

		for( ;contador<4 ; )
		{
			nombre=prompt("Ingrese su nombre");
			sexo=prompt("ingrese su sexo con F ó M");
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
			respuesta=prompt("tiene mascota? ");
			while(respuesta!="si" && respuesta!="no")    //arreglado, creo
			{
					respuesta=prompt("Eso no viene al caso!!, ¿tiene mascota?");
			}
			if (respuesta=="si")                 		//en caso de tener mascotas
			{
				contadorMascotasSi++;
				tipoDeMascota=prompt("¿Que tipo de mascota es?");

				while(tipoDeMascota!="perro" && tipoDeMascota!="gato")
				{
					tipoDeMascota=prompt("Tipo de mascota incorrecto, ¿Que tipo de mascota es?");

					//necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga 
					//mas de 5 años de edad
				}	
					if (contadorMascotasSi==1 && tipoDeMascota=="gato") //las condiciones son si es la primera persona que tiene mascotas
					{													//y si el tipo de mascota es un gato
						dueñosGatos++;									
					    nombreGato=prompt("ingrese el nombre de su gato");
					    edadGato=prompt("ingrese la edad de su gato");
					    edadGato=parseInt(edadGato);

						if (sexo=="F" && edad==30)  //las condiciones a cumplir en este if es si el sexo es "F" y la edad es = a 30
						{

							while(edadGato>16 && edadGato<1)  //aca se establece el rango de edad que pueden tener los gatos
							{
								edadGato=prompt("un gato no puede tener esa edad, ingrese edad del gato")
							}

							if (edadGato<=5)     //aca establecemos que el gato no tenga mas de 5 años de edad
							{
								alert("el nombre del primer gato que no sea mayor a 5 años es: "+nombreGato+" y tiene la edad de "+edadGato);
							}
						}
					}//if (contadorMascotasSi==1 && tipoDeMascota=="gato")
			}

			else if(edad>edadMayor)									//en caso de que no tenga ninguna mascota
			{
				contadorMascotasNo++;
				//persona mas vieja que no tenga mascotas
				edadMayor=edad;
				alert("La persona mas vieja que no tiene mascotas es "+nombre+" con la edad de "+edadMayor+" años");				
			}
		}//for( ;contador<10 ; )
		contador++;


	}
			
			
			
		
