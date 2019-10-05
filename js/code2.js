var input; 
var signos = ['*', '/', '+', '-'];
var aux1 = "";
var aux2 = "";
var auxSigno = "";
var resuelto = 0;
var encontrado = false;

function lectura(){
    input = document.getElementById("ans").value;
    do{
        for (i = 0; i < input.length; i++) {
           if(!(novalor(input[i]))){
               if (encontrado){
                    aux1+=input[i];
                    console.log(aux1);
               }else {
                segundoValor()
               }    
           }  else {
                auxSigno=input[i];
           }
        }   
    }while(encontrar());

    console.log(input);
}

function novalor(a){
    for (i = 0; i < signos.length; i++) {
        if (a === signos[i]){
            encontrado = true;
            return true;
        }
    }
    return false;
}

function encontrar(){
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < signos.length; j++) {
           if (input[i] === signos[j]){
               return true;
           }
        }
    }
    return false;
}

function segundoValor(valor){
    for (j = i+1; j < input.length; j++) {
        if(!novalor(input[j])){
            aux2+=input[j];
            console.log(aux1);
        }else {
            if(signos.indexOf(input[j]) <= signos.indexOf(auxSigno)){
                operar(auxSigno);
                var cadena = aux1+auxSigno+aux2;
                var aux = input.replace(cadena, resuelto);
                input = aux;

            } else {
                aux1 = aux2;
                auxSigno = input[i];
                console.log(aux1);
            }
        }
    }
}

function operar(signo){
    if (signo === '*'){
        resuelto = parseFloat(aux1) * parseFloat(aux2);
    } else if (signo === '/') {
        resuelto = parseFloat(aux1) / parseFloat(aux2);
    } else if (signo === '+') {
        resuelto = parseFloat(aux1) + parseFloat(aux2);
    } else if (signo === '-'){
        resuelto = parseFloat(aux1) - parseFloat(aux2);
    } else {
        console.log("opc no implementada");
    }
}


