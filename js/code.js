var input = document.getElementbyId("cadena").value;
var signos = ['x', '/', '+', '-'];
var aux1 = "";
var aux2 = "";
var auxSigno = "";
var resuelto = 0;
var encontrado = true;

function operar(){
    do{
        for (i = 0; i < input.length; i++) {
           if(!novalor(input[i]) && encontrado==false){
                aux1+=input[i];
           } else if(!novalor(input[i]) && encontrado==true){
                segundoValor()
           } else {
                auxSigno=input[i];
           }
        }        
    }while(encontrado);

    console.log(input);
}

function segundoValor(valor){
    for (j = i+1; j < input.length; j++) {
        if(!novalor(input[j])){
            aux2+=input[j];
        }else {
            if(signos.indexOf(input[j]) <= signos.indexOf(auxSigno)){
                operar(auxSigno);
                var cadena = aux1+auxSigno+aux2;
                var aux = input.replace(cadena, resuelto);
                input = aux;

            } else {
                aux1 = aux2;
                auxSigno = input[i];
            }
        }
    }
}

function operar(signo){
    switch(signo){
        case 'x': resuelto = parseFloat(aux1) * parseFloat(aux2); break;
        case '/': resuelto = parseFloat(aux1) / parseFloat(aux2); break;
        case '+': resuelto = parseFloat(aux1) + parseFloat(aux2); break;
        case '-': resuelto = parseFloat(aux1) - parseFloat(aux2); break;

        default: console.log("opc no implementada");
    }
}


function novalor(a){
    for (i = 0; i < signos.length; i++) {
        if (a === signos[i]){
            encontrado = true;
            return true;
        }
    }
    
    encontrado = false;
    return false;
}