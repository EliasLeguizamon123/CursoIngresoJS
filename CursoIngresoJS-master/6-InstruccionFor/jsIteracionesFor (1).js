	function Mostrar()
	{
		var contador=0;
		var contador1=0;
		var contador2=0;
		var contador3=0;
		var contador4=0;
		var contador5=0;
		var contador6=0;
		var contador7=0;
		var contador8=0;
		var contador9=0;
		var contador10=0;

		
		

	 
		for ( ; contador<=100 ; contador++)   //con la funcion For no hace falta agregar nada mas
		{			   						 //solo hace falta una sola linea de comando para todo
			var numeroRandom = Math.floor((Math.random() * 10 + 1));
			switch(numeroRandom)
				{
					case 1: 
					contador1++;
					break; 

					case 2:
					contador2++;
					break;

					case 3:
					contador3++;
					break;

					case 4:
					contador4++;
					break;

					case 5:
					contador5++;
					break;

					case 6: 
					contador6++;
					break;

					case 7:
					contador7++;
					if(contador7==(contador*100))
					{
						

						continue;
					}
					break;

					case 8:
					contador8++;
					break;

					case 9:
					contador9++;
					break;

					case 10:
					contador10++;
					break;

				}
			
			contador++;
			console.log(contador);
			
		}//for ( ; contador<100 ; contador++) 

		console.log("la cantidad de unos "+(contador1/contador)*100 +" %");
		console.log("la cantidad de dos "+(contador2/contador)*100 +" %");
		console.log("la cantidad de tres "+(contador3/contador)*100 +" %");
		console.log("la cantidad de cuatros "+(contador4/contador)*100 +" %");
		console.log("la cantidad de cincos "+(contador5/contador)*100 +" %");
		console.log("la cantidad de seis "+(contador6/contador)*100 +" %");
		console.log("la cantidad de sietes "+(contador7/contador)*100 +" %");
		console.log("la cantidad de ochos "+(contador8/contador)*100 +" %");
		console.log("la cantidad de nueves "+(contador9/contador)*100 +" %");
		console.log("la cantidad de dieces "+(contador10/contador)*100 +" %");
		

	}