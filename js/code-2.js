var input;
var signos = ['*', '/', '+', '-'];
var exp = [/(\d+)(\*)(\d+)/, /(\d+)(\/)(\d+)/, /(\d+)(\+)(\d+)/, /(\d+)(\-)(\d+)/];
var cursor;
var aux1;
var aux2;
var auxSigno;
var resuelto;


function lectura(){
    input = document.getElementById("ans").value;
    
    for(i = 0; i < exp.length; i++){
        cursor = new RegExp(exp[i]);
        do{
            resuelto = cursor.exec(input);
    
            aux1 = RegExp.$1;
            auxSigno = RegExp.$2;
            aux2 = RegExp.$3;

            if (auxSigno === '/' && parseInt(aux2) == 0){
                input = document.getElementById("ans").value = "";
                input = document.getElementById("ans").value = "Error aritmético";
                break;
            }else{
                operar();
                var salida = input.replace(cursor, resuelto);
                input = salida;
                //console.log(input);
                //console.log(" ");                    
            }
        } while(cursor.test(input));

        //reseteo de cursores
        cursor = null;
        resuelto = null;
    }

    //Mostrado por salida
    aux1 = input;
    input = document.getElementById("ans").value = "";
    input = document.getElementById("ans").value = aux1;

    //Reseteo de variables por seguridad
    cursor = null;
    resuelto = null;
    aux1 = null;
    aux2 = null;
    auxSigno = null;
}

//Opera según función
function operar(){
    if (signos.indexOf(auxSigno) == 0){
        resuelto = parseInt(aux1) * parseInt(aux2);
        //console.log(resuelto + " opc1");
    } else if (signos.indexOf(auxSigno) == 1) {
        resuelto = parseInt(aux1) / parseInt(aux2);
        //console.log(resuelto + " opc2");
    } else if (signos.indexOf(auxSigno) == 2) {
        resuelto = parseInt(aux1) + parseInt(aux2);
        //console.log(resuelto + " opc3")
    } else if (signos.indexOf(auxSigno) == 3){
        resuelto = parseInt(aux1) - parseInt(aux2);
        //console.log(resuelto + " opc4")
    } else {
        //console.log("opc no implementada");
    }
}
