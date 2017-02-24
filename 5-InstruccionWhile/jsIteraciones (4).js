function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

		while(numero>10 || numero<0)
			{
				numero=prompt("error, numero invalido");	
			}
			document.getElementById('Numero').value=numero;
			numero=parseInt(numero);

}//FIN DE LA FUNCIÓN