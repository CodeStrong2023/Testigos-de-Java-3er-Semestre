class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){//template literals: nos permite insertar codigos dinamicamente
        return `idProducto : ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}//Fin de la clase productos

class Orden{
    static contadorOrdenes = 0;
    static getMAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorproductosagregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.getMAX_PRODUCTOS());
        this._productos.push(producto); //Tenemos 2 tipos de sintaxis: 1
       // this._productos[this._contadorproductosagregados++] = producto; //segunda sintaxis
    }
    else {
        console.log('No se pueden agregar mas productos');
    }//Fin del metodo agregar productos
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }//Fin del ciclo for
        return totalVenta;
    }//Fin del metodo calcular total

    mostrarOrden(){
        let productoOrden = ' ';
        for(let producto of this._productos){
            productoOrden += `\n{`producto.toString()+' }';
        }//Fin del ciclo for
        console.log(`Orden: ${this._idProducto}, Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }//Fin del metodo mostrsando ordenes
}//Fin de la clase orden

let producto1 = new Producto('pantalon', 200);
let producto2 = new Producto('camisa', 150);
let producto3 = new Producto('cinturon', 50);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden1.mostrarOrden();
orden2.mostrarOrden();