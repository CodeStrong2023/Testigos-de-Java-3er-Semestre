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
