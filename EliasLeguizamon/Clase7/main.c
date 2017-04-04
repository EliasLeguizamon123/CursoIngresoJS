#include <stdio.h>
#include <stdlib.h>

#define MAX 3

int main(void)
    {
        char nombre[MAX][21];
        int i;
        int legajo[MAX];
        float sueldo[MAX];
        int edad[MAX];

        for(i=0; i<MAX; i++)
            {
        printf("ingrese su nombre: ");
        fflush(stdin);
        fgets(nombre[i], 21, stdin);      //permite usar mas de 1 palabra pero solo 25 caracteres

        printf("ingrese su numero de legajo: ");
        scanf("%d",legajo);

        printf("ingrese su sueldo: ");
        scanf("%f",sueldo);

        printf("ingrese su edad: ");
        scanf("%d",edad);

        printf("su nombre es: %s\n",nombre);
        printf("su numero de legajo es: %d\n",legajo);
        printf("su sueldo es de: %f\n",sueldo);
        printf("su edad es de: %d\n",edad);
            }//for(i=0; i<max; i++)
    }
