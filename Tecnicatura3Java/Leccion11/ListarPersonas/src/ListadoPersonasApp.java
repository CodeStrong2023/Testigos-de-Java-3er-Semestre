import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //Empezamos con el menu
        var salir = false;
        while (!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            }catch (Exception e){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }//Fin while
    }//Fin metodo main

    private static void mostrarMenu(){
        //mostramos las opciones
        System.out.print("""
                ******* Listado de Persona *******
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Escriba una de las opciones: ");
    }//Fin mostrarMenu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revisamos la opcion a traves de Switch
        switch (opcion){
            case 1 -> {//Agregar persona a lista
                System.out.print("Escriba el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Escriba el telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Escriba el correo: ");
                var email = entrada.nextLine();
                //creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene : "+personas.size()+" elementos");
            }// Fin caso 1
            case 2 -> {// Listar personas
                System.out.println("Listado de personas: ");
                //Mejoras con lambda y el metodo de referencia
                //personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println);
            }//Fin caso 2
            case 3 -> {//Salir del ciclo
                System.out.println("Hasta pronto...");
                salir = true;
            }//Fin del caso 3
            default -> System.out.println("Opcion incorrecta: "+opcion);

        }//Fin del switch
        return salir;
    }//Fin metodo ejecutar Operacion
}//Fin clase ListadoPersona