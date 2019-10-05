var input;
var signos = ['*', '/', '+', '-'];
var cursor = 0;
var aux1 = "";
var aux2 = "";
var auxSigno = "";
var resuelto = 0;
var encontrado = false;

function lectura(){
    input = document.getElementById("ans").value;
    console.log(input);
    for(i = 0; i < signos.length; i++){
        cursor =  input.indexOf(signos[i]);
        //console.log(cursor);
        if (cursor > -1){
            auxSigno = input.charAt(cursor);
            //console.log(auxSigno);
            for(j = 0; j < input.length; i++){
                for(k = cursor-1; comparar(k); k--){
                    aux1+=input[k];
                }

                for(l = cursor+1; comparar(l); l++){
                    aux2+=input[l];
                }


                operar();
                var cadena = aux1+auxSigno+aux2;
                var auxCadena = input.replace(cadena, resuelto);
                input = auxCadena;
            }
        }
    }

    console.log(input);
}

function comparar(caracter){
    for(m = 0; m < signos.length; m++){
        if (caracter === signos[m]){
            return true;
        }
    }
    return false;
}

function operar(){
    console.log(auxSigno);
    console.log(aux1);
    console.log(aux2);
    //return;
//
    //if (signos.indexOf(auxSigno) == 0){
    //    resuelto = parseFloat(aux1) * parseFloat(aux2);
    //    console.log(resuelto + " opc1");
    //} else if (signos.indexOf(auxSigno) == 1) {
    //    resuelto = parseFloat(aux1) / parseFloat(aux2);
    //    console.log(resuelto + " opc2");
    //} else if (signos.indexOf(auxSigno) == 2) {
    //    resuelto = parseFloat(aux1) + parseFloat(aux2);
    //    console.log(resuelto + " opc3")
    //} else if (signos.indexOf(auxSigno) == 3){
    //    resuelto = parseFloat(aux1) - parseFloat(aux2);
    //    console.log(resuelto + " opc4")
    //} else {
    //    console.log("opc no implementada");
    //}
}
