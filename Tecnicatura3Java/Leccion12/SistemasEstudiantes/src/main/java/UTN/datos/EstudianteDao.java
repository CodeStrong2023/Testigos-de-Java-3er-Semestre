package UTN.datos;

import  UTN.dominio.Estudiantes;
import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class EstudianteDao {
    //Métod listar
    public List<Estudiante>listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList();
        //Creamos algunos objetos que son necesarios para comunicarnos con la base de datos
        PreparedStatement ps;//Envia la sentencia a la base e datos
        ResultSet rs;//Obtenemos el resultado de la base de datos
        //Creamos un objeto de tipo conexion
        Connection con= getConnection()
        String sql="SELECT * FROM estudiantes2022 ORDER BY idestudiantes2022";
        try {

            while (rs.next()) {
                var estudiante =new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"))
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail. (rs.getString("email"));
                //Falta agregarlo  a la lista
                estudiante.add(estudiante);
            }

        }catch (Exception e){

        }
        finally {
            try{
                con.close();

            }catch (Exception e){
                System.out.println("Ocurrio un error al cerrar la conexión: "+e.getMessage());
            }

        }
        return estudiantes;
    }//Fin meétodo listar

    //Metodo por id -> fin by id
    public boolean buscarEstudiante(String estudiantes){
        PreparedStatement ps;
        ResultSet rs;
        Connection con= getConnection();
        String sql="SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try{
            ps= con.prepareStatement(sql);
            ps.serInt(1, estudiantes.getIdEstudiante());
            rs=ps.executeQuery();
            if (rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //Se encontro un registro
            }//Fin inf
        }catch (Exception e){
            System.out.println("Ocurrio un error al buscar estudiante: "+e.getMessage());
        }
        finally {
            try {
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrrio un errar al cerrar la conexion: "+e.getMessage());
            }
        }
        return false;
    }



    public static void main(String[] args){
      //listar los estudiantes
      var estudianteDao = new EstudianteDao ();
        System.out.println("Listado de estudiantes: ");
        List<Estudiante>estudiantes=estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println);//Función lambda para imprimir

    }


}







