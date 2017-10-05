# Cifrado Cesar
## Resolución
###### Josefina León Canales

#### Lista de procesos
- Pseudocódigo
- Diagrama de flujo
- Número versión

``` javascript
Funcion preguntar ( option )
     solicita ingresar entre opcion 1 o 2
     si ingresa 1, llama a función de cifrado
     si ingreso 2, llama a función de descifrado
     en caso de ingresar parámetros no válidos arroja error
Fin Funcion

Funcion cipher ( string )
   solicitar ingreso de texto
    si no cumple con parámetros de texto (cualquier cosa que no alfabética) arrojar mensaje de error
        si cumple con parámetros de texto tomar cada carácter y cifrarlo 33 espacios hacia la derecha
        verifica si es mayúscula o minúscula y la cifra en cada caso
    retorna mensaje cifrado

Fin Funcion

Funcion decipher ( str )
       si no cumple con parámetros de texto (cualquier cosa que no alfabética) arrojar mensaje de error
        si cumple con parámetros de texto tomar cada carácter y descifrarlo 33 espacios hacia la izquierda
        verifica si es mayúscula o minúscula y la descifra en cada caso
    retorna mensaje descifrado

fin función

    llamo a función principal en caso de que no cumplan algún parámetro para solicitar ingreso de datos nuevamente.
  preguntar()

FinAlgoritmo
```

![Diagrama de flujo](/images/logo.png)
Format: ![Alt Text](http://subirimagen.me/uploads/20171005081052.jpg)
##### versión `0.0.1`