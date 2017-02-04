/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numeroUno;
var numeroDos;
var resultadoSuma;
var resultadoResta;
var resultadoMultiplicacion;
var resultadoDivicion;
function sumar()
{	
   numeroUno=document.getElementById('numeroUno').value;
   numeroDos=document.getElementById('numeroDos').value;
   numeroUno=parseInt(numeroUno);
   numeroDos=parseInt(numeroDos);
   resultadoSuma=numeroUno+numeroDos;
   alert("el resultado de la suma es: "+resultadoSuma);
	
}

function restar()
{
   numeroUno=document.getElementById('numeroUno').value;
   numeroDos=document.getElementById('numeroDos').value;
   numeroUno=parseInt(numeroUno);
   numeroDos=parseInt(numeroDos);
   resultadoResta=numeroUno-numeroDos;
   alert("el resultado de la resta es: "+resultadoResta);
}

function multiplicar()
{ 
	numeroUno=document.getElementById('numeroUno').value;
   numeroDos=document.getElementById('numeroDos').value;
   numeroUno=parseInt(numeroUno);
   numeroDos=parseInt(numeroDos);
   resultadoMultiplicacion=numeroUno*numeroDos;
   alert("el resultado de la multiplicacion es: "+resultadoMultiplicacion);
}

function dividir()
{
	numeroUno=document.getElementById('numeroUno').value;
   numeroDos=document.getElementById('numeroDos').value;
   numeroUno=parseInt(numeroUno);
   numeroDos=parseInt(numeroDos);
   resultadoDivicion=numeroUno/numeroDos;
   alert("el resultado de la divicion es: "+resultadoDivicion);
}

