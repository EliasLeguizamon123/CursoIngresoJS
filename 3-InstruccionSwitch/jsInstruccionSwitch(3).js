function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
		{
			
			case "Febrero":
			alert("Este mes no tiene mas de 30 dias");
			break;
			default:                               //Default sirve para "Negar" lo que esta dentro del switch
			alert("Este mes tiene 30 dias o mas"); // en otras palabras es un "Else" para el switch
			

		}
	
	


}//FIN DE LA FUNCIÓN