miFuncion(8,2);//Esto se le conoce como hosting

function miFuncion(a, b){
    //console.log("Sumamos: "+ (a+b));
    return a + b;
}
//Llamando la función
miFuncion(5,4);

let resultado =miFuncion(6,7);
console.log(resultado);

//Declaramos una funcion de tipo expresión o anonima
let x = function(a, b){return a + b};//necesita cierre con punto y coma
resultado = x (5 , 6);//al llamarla se pone la variable y parentesis 
console.log(resultado);

//Funciones de tipo self y invoking
(function(a,b){
    console.log('Ejecutando la función:'+(a+b));
})(9,6);

console.log(typeof miFuncion);
function miFuncionDos(a,b){
    console.log (arguments.length);
}

miFuncionDos(5,7,3,6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a , b ) => a + b ;
resultado = sumarFuncionFlecha(3 , 7);
console.log(resultado);


