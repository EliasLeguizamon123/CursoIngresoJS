#include <stdio.h>
#include <stdlib.h>
int factorial(int);
int main()
{
    int numero, resultado;

    printf("ingrese un numero: ");
    scanf("%d",&numero);
    resultado=factorial(numero);
    printf("resultado: %d ",resultado);
    return 0;
}
int factorial(int n)
{
    int resp;
    if(n==1)
        {
            return 1;
        }
    resp=n*factorial(n-1);
    return resp;
}
