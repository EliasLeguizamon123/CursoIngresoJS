/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var largo;
   var ancho;
   var rectangulo;
   var rectanguloCubo;

   largo=document.getElementById('Largo').value;
   ancho=document.getElementById('Ancho').value;

   largo=parseInt(largo);
   ancho=parseInt(ancho);

   rectangulo=largo*ancho;
   rectanguloCubo=(rectangulo*3);
   alert("la cantidad de alambre en metros que se debe comprar es: "+rectanguloCubo);




}
function Circulo () 
{
	var radio;
	var circuloEntero;

	radio=document.getElementById('Radio').value;

	radio=parseInt(radio);
	circuloEntero=(radio*3.14)*3;
	alert("la cantidad de alambre en metros que se debe comprar es: "+circuloEntero);

}
function Materiales () 
{
   var largo;
   var ancho;
   var rectangulo;
   var totalUno;
   var totalDos;

   largo=document.getElementById('Largo').value;
   ancho=document.getElementById('Ancho').value;

   largo=parseInt(largo);
   ancho=parseInt(ancho);

   rectangulo=largo*ancho;
   totalUno=rectangulo*2;
   totalDos=rectangulo*3;
   alert("la cantidad de materiales necesarios son: "+totalUno+" de cemento "+totalDos+" de cal");

}