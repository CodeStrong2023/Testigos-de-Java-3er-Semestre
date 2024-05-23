
package accesodatos;

public class ImplementacionOracle implements IAccesoDatos{

    @Override
    public void insertar() {
        System.out.println("Insertar en Oracle");
    }

    @Override
    public void listar() {
        System.out.println("Listar en Oracle");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar en Oracle");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar en Oracle");
    }
    
}
