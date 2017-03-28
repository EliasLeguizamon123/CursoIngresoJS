#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i;
    for(i=1;i<=100;i++)
        {
            if(i%2==1)
                {
                    continue; //con este codigo solo se muestra los numeros pares

                }
            printf("%d ",i);

        }
        return 0;
}
