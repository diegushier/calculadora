var input;
var signos = ['*', '/', '+', '-'];
var exp = [/\d+\*\d+/, /\d+\/\d+/, /\d+\+\d+/, /\d+\-\d+/];
var cursor;
var aux1 = "";
var aux2 = "";
var auxSigno = "";
var resuelto;
var encontrado = false;


function lectura(){
  //Pensar como recorrer todos los caracteres
    input = document.getElementById("ans").value;
    
    for(i = 0; i < exp.length; i++){
        cursor = new RegExp(exp[i]);
        resuelto = cursor.exec(input);

        console.log(resuelto);
        console.log("Valor 1" + RegExp.$1);
        console.log("Valor 2" + RegExp.$2);

        resuelto = null;
    }
}

//function comparar(caracter){
//    if(signos.indexOf(caracter) > -1){
//        return false;
//    } else{
//        return true;
//    }
//}


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
