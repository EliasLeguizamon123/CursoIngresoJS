#include <stdio.h>
#include <stdlib.h>

int suma(int numeroUno, int numeroDos);
int resta(int numeroUno, int numeroDos);
int multiplicacion(int numeroUno, int numeroDos);
int divicion(int numeroUno, int numeroDos);

int main(void)
{
    int respuesta, z, x, y, t, valorUno, valorDos;

    do
        {
            system("cls");
            printf("-----MENU DE OPCIONES-----");
            printf("SELECCIONE UNA DE LAS OPCIONES\n");
            printf("1. sumar\n");
            printf("2. restar\n");
            printf("3. multiplicar\n");
            printf("4 dividir\n");
            printf("5. para salir\n\n");
            printf("selecione una de las opciones: ");
            scanf("%d",&respuesta);

            switch(respuesta)
                {
                case 1:
                system("cls");
                z=suma(valorUno, valorDos);
                break;

                case 2:
                system("cls");
                x=resta(valorUno, valorDos);
                break;

                case 3:
                system("cls");
                y=multiplicacion(valorUno, valorDos);
                break;

                case 4:
                system("cls");
                t=divicion(valorUno, valorDos);
                break;

                default:
                system("cls");
                printf("la opcion escogida es incorrecta, por favor ingrese una de las opciones");
                scanf("%d",&respuesta);
                break;
                }//switch(respuesta)
            }while(respuesta!=5);
    return 0;
}

int suma(int numeroUno, int numeroDos)
{
    int resultado;
    resultado=numeroUno+numeroDos;
    printf("el resultado de la suma de %d y %d es: %d",numeroUno, numeroDos, resultado);

    return resultado;

}







