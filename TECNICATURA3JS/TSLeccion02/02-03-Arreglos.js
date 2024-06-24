// Creacion de Array o arreglos
//let autos = new Array('Ferrari', 'Renault', 'BMW'); SINTAXIS VIEJA
const autos =['Ferrari', 'Renault', 'BMW'];
console.log(autos);
//Recorremos  los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);
for(let i = 0; i < autos.length; ii++){
    console.log(i+' : '+autos[i]);
}
//Modificamos los elementos de arreglo
autos[1] = 'Volvo';
console.log(autos[1]);
//Agregamos nuevos valores al arreglo
autos.push('Audi'); //agregamos elementos al final del arreglo
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche';
console.log(autos);

//tercera forma de agregar elementos teniendo cuidado
autos[6] = 'Renault';
console.log(autos);

//Como preguntar si es un Array o un arreglo?
console.log(Array.isArray(autos)); //devguelve un booleano

console.log(autos instanceof Array); //Preguntamos si la instancia es una variable de tipo array 