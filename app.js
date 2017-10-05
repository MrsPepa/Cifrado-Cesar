function preguntar(option){
	do{
		var respuesta = prompt("Indique el número que desea hacer: 1) Cifrar - 2) Descifrar");//pide datos al usuario cual opcion desea escoger.
		if(respuesta != ""){
			if(respuesta == "1"){//si  el campo de texo no esta vacio, al ingresar 1 se ejecutara la funcion de cifrado
				cipher();
			  } else if(respuesta == "2"){//si el usuario ingresa 2, se ejecutara la funcion de descifrado
				decipher();
			  } else {//si no se cumple ninguna de las condiciones anteriores, arrojara un mensaje de error hasta colocar opcion valida.
			    alert("Ingrese una opción válida");
			  } 
		}
	} while(respuesta == "" || (respuesta != "1" && respuesta != "2"));//se crea un loop para mantener cautivo al usuario, hasta que ingrese una opcion valida
}

function cipher(string){
	do{
		var stringCipher = prompt("Ingrese su frase a cifrar");//se crea una variable para guardar la frase ingresada por usuario
		var arrAscii = [];//array vacio para guardar el codigo ascii
		var newString = [];//array vacio para aguardar el nuevo string cifrado 
		var validateString = /^[a-zA-Z]*$/;//variable para validar que los caracteres ingresados sean alfabeticos
		if(stringCipher!="" && validateString.test(stringCipher)==true){//condiciones para hacer correr el ciclo, si el string ingresado no está vacío ni es algo fuera de los parámetros alfabéticos, entonces se ejecuta
			for(var i = 0; i < stringCipher.length ;i++){//primer for para recorrer la frase
				if(stringCipher[i] === stringCipher[i].toUpperCase()){//si lo ingresado es en mayuscula, entonces conteo de ascii empieza de 65
					arrAscii.push((stringCipher.charCodeAt(i) - 65 + 33) % 26 + 65);//obtengo codigo ascii y lo coloco en arrAscii
				} else if(stringCipher[i] === stringCipher[i].toLowerCase()){//si lo ingresado es en minuscula, el conteo empieza desde 97
					arrAscii.push((stringCipher.charCodeAt(i) - 97 + 33) % 26 + 97);//obtengo codigo ascii y lo coloco en arrAscii
				}
			}
			for(var j = 0; j < arrAscii.length ;j++){//creo segundo for para recorrer arrAscii (arreglo)
				newString.push(String.fromCharCode(arrAscii[j]));//ingresar en un nuevo array los caracteres del recorrido anterior con un nuevo ciclo
			}
		return alert("La frase \'" + stringCipher + "\' ha sido cifrada, la nueva frase es \'" + newString.join("") + "\'");//si todo lo anterior se ejecuta con normalidad, alert devolvera el mensaje cifrado
		}else{
			alert("Ingrese parámetros válidos")//si no se cumplen las condiciones arroja error
		}
	} while(stringCipher == "" || validateString.test(stringCipher) == false);//si no se cumplen condiciones luego del mensaje de error, vuelve al inicio del do solicitando ingresar los parámetros válidos
}



function decipher(str){
	do{
		var stringDecipher = prompt("Ingrese su frase a decifrar");//creo variable para guardar la frase ingresada por usuario
        var arrAscii =[];//array vacia para guardar codigo ascii
        var newString = [];//array vacio para guardar numeros ascii convertidos en caracteres
        var validateString = /^[a-zA-Z]*$/;//variable para validar que los caracteres ingresados sean alfabeticos
        if (stringDecipher!="" && validateString.test(stringDecipher) == true){//si la condicion se cumple, se ejecuta lo que continua
             for(var i = 0; i < stringDecipher.length ;i++){//for para recorrer lo ingresado por usuario
               if(stringDecipher[i] === stringDecipher[i].toUpperCase()){//si el string ingresado esta en mayuscula, el conteo de ascii empieza desde 90 (Z ascci)
                    arrAscii.push((stringDecipher.charCodeAt(i) - 90 - 33 + 26) % 26 + 90);//obtengo codigo ascii y lo coloco en arrAscii
                } else if(stringDecipher[i] === stringDecipher[i].toLowerCase()){//si el string ingresado esta en minuscula, se ejecuta lo que continua
                	arrAscii.push((stringDecipher.charCodeAt(i) - 122 - 33 + 26) % 26 + 122);//obtengo codigo ascii, comenzando de 122 (z minuscula)
            	}
            } 
            for(var j = 0 ; j < arrAscii.length; j++){//segundo for para recorrer arrAscii
            	newString.push(String.fromCharCode(arrAscii[j]));//ongresar en un nuevo array los caracteres obtenidos del recorrido anterior
            }
        return alert("Su frase descifrada es " + newString.join(""));//si lo anterior se cumple, se ejecuta con normalidad el descifrado    
        }else{
            alert("Ingrese parámetros válidos");//si no se cumplen las condiciones, arroja error
        }
    } while (stringDecipher == "" || validateString.test(stringDecipher) == false);//si no se cumplen las condiciones luego del mensaje de error, vuelvo al inicio del do solicitando ingresar los parametros validos
}

preguntar();