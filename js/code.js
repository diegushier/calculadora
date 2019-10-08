var input;
var signos = ['*', '/', '+', '-'];
var cursor = 0;
var aux1 = "";
var aux2 = "";
var auxSigno = "";
var resuelto = 0;
var encontrado = false;

function lectura(){
  //Pensar como recorrer todos los caracteres
  //split()
    input = document.getElementById("ans").value;
    for(i = 0; i < signos.length; i++){
        do{
            cursor =  input.indexOf(signos[i]);
            if (cursor > -1){
                auxSigno = input.charAt(cursor);
                encontrado = true;
            
                for(k = cursor-1;k >= 0 && comparar(k); k--){
                    console.log(input[k]);
                    aux1+=input[k];
                }
                for(l = cursor+1; l < input.length && comparar(l); l++){
                    console.log(input[l]);
                    aux2+=input[l];
                }
                operar();
                var cadena = aux1+auxSigno+aux2;
                var auxCadena = input.replace(cadena, resuelto);
                input = auxCadena;
            
            
            } else {
                encontrado = false;
            }
        }while (encontrado);
    }

    //Mostrar La variable
    aux1 = input;
    input = document.getElementById("ans").value = "";
    input = document.getElementById("ans").value = aux1;
    console.log(input);

    //reinicia la variable
    encontrado = false;
    aux1="";    
    aux2="";    

}

function comparar(caracter){
    if(signos.indexOf(caracter) > -1){
        return false;
    } else{
        return true;
    }
}


//Opera según función
function operar(){
    if (signos.indexOf(auxSigno) == 0){
        resuelto = parseInt(aux1) * parseInt(aux2);
        console.log(resuelto + " opc1");
    } else if (signos.indexOf(auxSigno) == 1) {
        resuelto = parseInt(aux1) / parseInt(aux2);
        console.log(resuelto + " opc2");
    } else if (signos.indexOf(auxSigno) == 2) {
        resuelto = parseInt(aux1) + parseInt(aux2);
        console.log(resuelto + " opc3")
    } else if (signos.indexOf(auxSigno) == 3){
        resuelto = parseInt(aux1) - parseInt(aux2);
        console.log(resuelto + " opc4")
    } else {
        console.log("opc no implementada");
    }
}
