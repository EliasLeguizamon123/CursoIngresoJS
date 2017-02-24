function Mostrar()
{

	var sexo = prompt("ingrese f ó m.");
	while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, ingrese su sexo como f ó m.")
		}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN