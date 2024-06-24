miFuncion(8, 2); //ESTO SE CONOCE COMO HOSTING
function miFuncion(a, b){
    console.log("Sumamos: "+(a+b));
}

//Llamando a la funcion
miFuncion(5, 4);
let resultado = miFuncion(6, 7);
console.log(resultado);
//declaramos una funcion de tipo expresion
let x = function(a, b){return a + b};
resultado= x (5,6);
console.log(resultado);

//funciones de tipo selfo invoking
(function(a, b){
    console.log('ejecutando la funcion: '+ (a, b));
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}
miFuncionDos(5, 7, 3, 6)

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//funciones flecha
const sumarFuncionesFlecha = (a, b) => a + b;
resultado = sumarFuncionesFlecha(3, 7); //se asigna un valor a la variable
console.log(resultado);

//funcion tipo expresion
let sumar = function(a =4 ,b = 8){
    console.log(arguments[0]); //muestra el parametro de: a
    console.log(arguments[1]); //muestra el parametro de: b
    console.log(arguments[2]);
    return a + b + arguments [2]
}
resultado = sumar(3, 2, 9);
console.log(resultado);

//sumar todos los argumentos
let respuesta = sumarTodo(5 , 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma +=arguments[i];//argunments es para arreglos
    }
    return suma;
}

//tipos primitivos
let k = 10;
function cambiarValor(a){ //paso por valor
    a=20;
}
cambiarValor(k);
console.log(k);

//paso por referencia
const persona = {
    nombre: 'juan',
    apellido: 'lopez'
}

function cambiarValorObjeto(p1){
    p1.nombre  = 'ignacio';
    p1.apellido = 'perez';
}
cambiarValorObjeto(persona);
console.log(persona);