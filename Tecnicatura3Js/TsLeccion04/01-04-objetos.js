let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.como',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();//Convierte las minusculas a mayusculas
    },
    set lang(lang){
        this.idioma= lang.toUpperCase();
    },
    nombreCompleto: function(){ //método o función en JavaScript
        return this.nombre +' '+this-this.apellido;
    },
    get nombreEdad(){//Este es el metodo get
        return 'El nombre es : '+this.nombre+', Edad '+this.edad;
    }  
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 =new Object();
persona2.nombre='Juan';
persona2.direccion='Salada 14';
persona2.telefono='5492618282821';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']);//Accedemos como si fuera un arregle
console.log('Usamos el ciclo for in');
//fot in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error');
persona.apellida = 'Betancud';//Cambiamos dinamicamente un valor del objeto
delete persona.apellida;//Eliminamos el error
console.log(persona);

//Distinta formas de imprimir un objeto
//Numero 1 : la mas sencilla:concatenar cada valor de cada propiedad
console.log('Distinta formas de imprimir un objeto');
console.log(persona.nombre+', '+persona.apellido);

//Numero 2 : A traves del ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}


//Numero 3: La funcion Object.values()
console.log('Distinta formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numerp 4: Utilizaremos el metodo JSON.stringify
console.log('Distinta forma de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
persona.lang= 'en';
console.log(persona.lang);

function Persona3(nombre,apellido,email){//constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.amail =email;
}
let padre= new Persona3('Leo','Lopez','lopez@mail.com');
padre.nombre='Luis';
console.log(padre);

let madre =new Persona3('Laura','Contrera','contreral@gmail.com');
console.log(madre);