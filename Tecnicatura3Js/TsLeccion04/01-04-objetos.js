let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.como',
    edad: 30,
    nombreCompleto: function(){ //método o función en JavaScript
        return this.nombre +' '+this-this.apellido;
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
