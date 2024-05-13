let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');

//objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();   //Convierte minisculas en mayus
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido
    },
    get nombreEdad(){
        return this.nombre+' edad: '+this.edad;
    }

}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

let persona2 = new Object();    //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '54261828282';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']);    //accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error');
persona.apellido = 'Betancud';  //Cambiamos dinamicamente un valor del objeto
delete persona.apellidos;  //Eliminamos el error
console.log(persona);

//Distinta formas de imprimir un objeto
//Numero 1: la más sencilla: 
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido)

//Numero 2: A traves del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3: La funcion Object.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4 : Utilizaremos el metodo JSON.stringify
console.log('Distinta forma de imprimir un objeto: forma 4')
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; //modificamos el nombre
padre.telefono = '54694262113'
console.log(padre);
console.log(padre.nombreCompleto());
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono);    //no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//caso objeto 1
let miObjeto = new Object();    //opcion formal
//caso objeto 2
let miObjeto2 = {}; //opcion breve y recomendada

//caso String 1
let miCadena1 = new String('Hola'); //sintaxis formal
//caso String 2
let miCadena2 = 'Hola'; //Simplificada y recomendada

//caso con numeros 1
let miNumero = new Number(1); //Es formal no recomendable
//caso con numeros 2
let miNumero2 = 1; //sintaxis recomendada

//caso boolean 1 
let miBoolean1 = new Boolean(false);    //Formal
//caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//caso Arreglos 1
let miArreglo1 = new Array(); // formal 
//caso Arreglo 2
let miArreglo2 = [];    //sintaxis recomendada

//caso funcion 1 
let miFuncion1 = new Function(); //Todo despues de new es considerado objeto
//caso funcion 2
let miFuncion = function(){};   //Notacion simplificada y recomendada

//uso de prototype
Persona3.prototype.telefono = '2617838352';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '2617838352'
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5= {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '543135431638'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5465135168'));

//Metodo Apply
let arreglo = ['Ing.', '5465135168'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));