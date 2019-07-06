AUTOR:KEVIN PILLAJO
DESCRIPCION:calular el palindromo

var reversaDeNumber =  function (numero){
    var numeroAString = numero.toString();//se crea una varibale para transformar un numero a texto
   //console.log('el numero ingresado es '+numeroAString); para conocer el numero ingresado por la multiplicacion
    var cadenaDeString =  numeroAString.split("");//convertira la cadena de string en un Array
//console.log(cadenaDeString);

//para revertir la Array

var reversaArray = cadenaDeString.reverse();
//console.log(reversaArray);

var union = reversaArray.join(""); // se convertira un Array a una cadena de string
//console.log('el numero al reves es '+union); para saber si como el es resultado de la reversa

var stringANummber = parseInt(union);//se convierte string a number
return stringANummber;
}


var comprobar=function(digitos){
    var max = (10 ** digitos);
    var palindromo=0;
    //nos pide el problema un numero palindormo de n cantidad de digitos
    for(var primerNumero=1; primerNumero<max; primerNumero++){
        for(var segundoNumero=1; segundoNumero<max; segundoNumero++){
        var multiplicacion = primerNumero * segundoNumero;
        //console.log('la multiplicacion es '+ multiplicacion); para saber el resultado de la operacion
        var multiplicacionAlReves = reversaDeNumber(multiplicacion);
        if(multiplicacion===multiplicacionAlReves){
            
        if(multiplicacion>palindromo){
            palindromo=multiplicacion;
        }
        }
    }
        }
        return palindromo;
        
}
console.log('este es el palindromo mas grande '+ comprobar(3));
