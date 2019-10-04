var signos = ['x', '/', '+', '-'];
var aux1 = "";
var aux2 = "";
var auxSigno = "";
var encontrado = true;

function lectura(){
    var input = document.getElementbyId("cadena").value;

    do{
        for (i = 0; i < input.length; i++) {
           if(!novalor(input[i]) && !encontrado){
                aux1+=input[i];
           } else if(!novalor(input[i]) && encontrado){
                aux2+=input[i];
           } else {
                auxSigno=input[i];
                encontrado = true;
           }
        }        
    }while(encontrado);
}

function novalor(a){
    for (i = 0; i < signos.length; i++) {
        if (a === signos[i]){
            return true;
        }
        
    }

    return false;
}