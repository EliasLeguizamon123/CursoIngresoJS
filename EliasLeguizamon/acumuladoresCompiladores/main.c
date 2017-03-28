#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numeroMaximo, numeroMinimo, numero, flag=0, cantidadNumeros;

    for(cantidadNumeros=0; cantidadNumeros<6; cantidadNumeros++)   //maximos y minimos con FOR
    {


    printf("ingrese un numero: ");           //se ingresa un numero
    scanf("%d",&numero);

    if(flag==0)                            //se aplica la bandera
        {
            numeroMaximo=numero;
            numeroMinimo=numero;
            flag=1;
        }else
            {
            if(numero>numeroMaximo)                           //se define un numero maximo
                {
                    numeroMaximo=numero;
                }
            if(numero<numeroMinimo)                         //se define un numero minimo
                {
                    numeroMinimo=numero;
                }
            }


    }
     printf("el numero minimo es: %d",numeroMinimo);
     printf("\nel numero maximo es: %d",numeroMaximo);      //se muestran los numeros maximo y minimo


    return 0;
}
