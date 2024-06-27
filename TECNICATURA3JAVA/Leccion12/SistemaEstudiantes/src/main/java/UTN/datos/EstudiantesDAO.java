package UTN.datos;

import com.sun.source.tree.TryTree;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class EstudiantesDAO {
    //metodo agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = 'INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES (?,?,?,?)';
        Try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;
        } catch(Exception e){
            System.out.println("Ocurrio un error al agregar estudiante: "+e.getMessage());
        }//Fin cath

        finally{
            try{
                con.close();
            }cath (Exception e){
                System.out.println("Error al cerrar conexion: "+e.getMessage());
            }//Fin cath
        }//Fin finally
        return false;
    }//Fin metodo agregar estudiantes

    public static void main (String[] args) {
        //Listar estudiantes
        var estudianteDao = new EstudianteDAO();
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estuadiantesDao.listarEstudiantes();
        estudiantes.forEach(System.out::println);//Funcion lambda para imprimir


    }    //Buscar por id
    var estudiante1 = new  Estudiante(1);
    System.out.println("Estudiantes antes de la busqueda: "+estudiante1);
    var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
    if(encontrado)
        System.out.println("Estudiante encontrado: "+estudiante1);
    else
        System.out.println("No se encontro el estudiante: "+estudiante1.getIdEstudiante());
}
