/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno;
var precioDos;
var precioTres;

function Sumar () 
{
   var resultadoSuma;
   precioUno=document.getElementById('PrecioUno').value;
   precioDos=document.getElementById('PrecioDos').value;
   precioTres=document.getElementById('PrecioTres').value;

   precioUno=parseInt(precioUno);
   precioDos=parseInt(precioDos);
   precioTres=parseInt(precioTres);

   resultadoSuma=precioUno+precioDos+precioTres;
   alert("el resultado de la suma es: "+resultadoSuma);


}
function Promedio () 
{
   var resultadoPromedio;
   precioUno=document.getElementById('PrecioUno').value;
   precioDos=document.getElementById('PrecioDos').value;
   precioTres=document.getElementById('PrecioTres').value;

   precioUno=parseInt(precioUno);
   precioDos=parseInt(precioDos);
   precioTres=parseInt(precioTres);

   resultadoPromedio=(precioUno+precioDos+precioTres)/3;
   alert("el resultado del promedio es: "+resultadoPromedio);

}
function PrecioFinal () 
{
	var ivaUno;
	var ivaDos;
	var ivaTres;
	var resultadoSuma;
   precioUno=document.getElementById('PrecioUno').value;
   precioDos=document.getElementById('PrecioDos').value;
   precioTres=document.getElementById('PrecioTres').value;

   precioUno=parseInt(precioUno);
   precioDos=parseInt(precioDos);
   precioTres=parseInt(precioTres);

   ivaUno=(precioUno*1.21;
   ivaDos=(precioDos*1.21;
   ivaTres(precioTres*1.21;
   alert("los precios con el IVA son: "+ivaUno+" "+ivaDos+" "+ivaTres);

}