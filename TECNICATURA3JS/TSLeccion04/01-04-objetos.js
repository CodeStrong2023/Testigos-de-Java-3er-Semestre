let x = 10; //variable de tipo primitiva
console.log(x.length);

//objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'ES',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang (lang){
        this.idioma = lang.toUpperCase();//convierte minusculas en mayusculas
    },
    nombreCompleto : function () { 
        return this.nombre + ' ' + this.apellido;
    },
    get nombreEdad(){ // Este es el metodo get
      return 'El nombre es: ' + this.nombre + 'edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object(); //debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5495618282821'
console.log(persona2.telefono);

console.log(persona['apellido']); //se accede como si fuera un arreglo

//for in y accedemos al objeto como si fuera un arreglo
for (propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

persona.apellido = 'Bentancud'; //cambiamos dimnamicamente el valor de un objeto
delete persona.apellido; //eliminamos el error
console.log(persona);

//distintas formas de imprimir un objeto
//numero1: la mas sencilla: concatenar cada valor de cada propiedad
console.log('Distintas formas de imprimir un objeto: forma 1');
console.log(persona.nombre+' '+persona.apellido);

//numero2: atravez del ciclo for in
console.log('Distintas formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//numero3: la funcion objet.values()
console.log('Distintas formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//numero4: Utilizaremos el metodo JSON.stringify
console.log('Distintas formas de imprimir un objeto: forma 4');
let personaString = JSON.stringify;

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function persona3(nombre, apellido, email){ //constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
    
}
let padre = new persona3 ('Leo', 'lopez', 'lopezl@gmail.com'); 
padre.nombre = 'luis'; //Cambiamos el nombre
padre.telefono = '5492618282821';
console.log(padre);
console.log(padre.nombreCompleto());//Usamos la funcion
let madre = new persona3('Laura', 'Contrera', 'Contreral@gmail.com');
console.log(madre)
console.log(madre.telefono);//propiedad no definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos   
//Caso Objeto1
let miObjeto = new Object(); //opcion formal
//caso Objeto2
let miObjeto2 = {}; //es breve y recomendada

//caso String1
let miCadenna1 = new String('Hola');//sintaxis formal
//caso String2
let miCadenna2 = 'Hola'; //sintaxis simplificada y recomendada

//Caso con numero1
let miNumero = new Number(1); //Formal no recomendable
//caso con numero2
let miNumero2 = 1; //sintaxis recomendada

//Caso boolean1
let miBoolean = new Boolean(false); //Formal
//Caso boolean2
let miBoolean2 = false; //sintaxis recomendable

//caso arreglos1
let miArreglo = new Array();//Formal
//caso arreglos2
let miArreglo2= [];//sintaxis recomendada

//Caso function1
let miFuncion1 = new function(){}; //todo despues de NEW es considerado objeto
//caso function2
let miFuncion2 = function(){};//Notaacion simplificada y recomendada

//uso de prototype
persona3.prototype.telefono = '2618383832';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '5492618383832';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+ ' '+ telefono;
    }
}

let persona5 = {
     nombre: 'Carlos',
     apellido: 'Lara',

}

console.log(persona4.nombreCompleto2('Lic.', '5492618383836'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5492618585856'));

//Metodo apply
let arreglo = ['Ing.', '5492618686865'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));