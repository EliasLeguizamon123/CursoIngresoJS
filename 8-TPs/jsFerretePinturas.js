/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var fahrenheit;
	var fahrenheitCentigrados;
	temperatura=document.getElementById('Temperatura').value;
    
    temperatura=parseInt(temperatura);
    fahrenheit=(temperatura+32)*9;
    fahrenheitCentigrados=(fahrenheit/5);

    alert(temperatura+" ºC (Centigrados) son: "+fahrenheitCentigrados+" grados ºF (Fahrenheit)");

 
}

function CentigradosFahrenheit () 
{
   var temperatura;
   var CentigradosFahrenheit;
   var Centigrados;

   temperatura=document.getElementById('Temperatura').value;
    
   temperatura=parseInt(temperatura);
   Centigrados=(temperatura*9)/5;
   CentigradosFahrenheit=(Centigrados+32);

   alert(temperatura+" ºF (Fahrenheit) son: "+CentigradosFahrenheit+" grados ºC (Centigrados)");


}
