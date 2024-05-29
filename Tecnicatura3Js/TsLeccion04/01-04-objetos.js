let x = 10; //variable de tipo primitiva
console.log(x.length);

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

let persona2 =new Object();
persona2.nombre='Juan';
persona2.direccion='Salada 14';
persona2.telefono='5492618282821';
console.log(persona2.telefono);

console.log(persona['apellido']);//Accedemos como si fuera un arregle

//fot in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
persona.apellida = 'Betancud';//Cambiamos dinamicamente un valor del objeto
delete persona.apellida;//Eliminamos el error
console.log(persona);
