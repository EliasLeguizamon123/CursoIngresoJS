#include <stdio.h>
#include <stdlib.h>

int main()
{
    #define SUMA 1
    #define RESTA 2
    #define MULTIPLICA 3
    #define DIVIDE 4
    int numeroUno,numeroDos,resultado;
    char respuesta,tipoDeOperacion;

    do{
            printf("\npara sumar ingrese 1");
            printf("\npara restar ingrese 2");
            printf("\npara multiplicar ingrese 3");
            printf("\npara dividir ingrese 4");
            scanf("%c\n",&tipoDeOperacion);

            system("cls");

            do                                  //validar los 2 numeros
                {
                printf("ingrese un numero: ");
                scanf("%d",&numeroUno);
                }while(numeroUno<=0);

            do
                {
                printf("ingrese otro numero: ");
                scanf("%d",&numeroDos);
                }while(numeroDos<=0);


                resultado=numeroUno+numeroDos;
                printf("el resultado de la suma es %d",&resultado);




            printf("\nseguir sumando? conteste con s|n: ");
            fflush(stdin);                                   //limpia el bafle
            scanf("%c",&respuesta);

            do{   //esta parte funciona mal
            printf("\nerror, ingrese s|n: ");
            scanf("%c",&respuesta);
            }while(respuesta!='s' || respuesta!='n');

        }while(respuesta!='s' || respuesta!='n');


    return 0;
}
