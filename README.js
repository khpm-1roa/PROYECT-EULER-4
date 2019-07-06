AUTOR:KEVIN PILLAJO
DESCRIPCION:calular el palindromo

var reversaDeNumber =  function (numero){
    var numeroAString = numero.toString();
  
    var cadenaDeString =  numeroAString.split("");//convertira la cadena de string en un Array


var reversaArray = cadenaDeString.reverse();

var union = reversaArray.join(""); 

var stringANummber = parseInt(union);
return stringANummber;
}


var comprobar=function(digitos){
    var max = (10 ** digitos);
    var palindromo=0;

    for(var primerNumero=1; primerNumero<max; primerNumero++){
        for(var segundoNumero=1; segundoNumero<max; segundoNumero++){
        var multiplicacion = primerNumero * segundoNumero;
     
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
