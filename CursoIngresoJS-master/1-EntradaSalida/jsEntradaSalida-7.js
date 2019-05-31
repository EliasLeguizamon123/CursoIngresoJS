/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
var numeroUno;
var numeroDos;
var resultadoSuma;
function sumar(){
   numeroUno=document.getElementById('numeroUno').value;
   numeroDos=document.getElementById('numeroDos').value;
   numeroUno=parseInt(numeroUno);
   numeroDos=parseInt(numeroDos);
   resultadoSuma=numeroUno+numeroDos;
   alert("el resultado de la suma es: "+resultadoSuma);

}
