package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{//Bloque de inicializacion estatico
        System.out.println("Ejecucion del bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona=10;No es un atributo estático, por esto tenemos un error
    }
    { //Bloque de inicializacion NO estatico (contexto dinamico)
        System.out.println("Ejecucion del bloque NO estatico");
        this.idPersona=Persona.contadorPersonas++; //Inccrementamos el atributo 
    }
    
    //Los bloques de incializacion se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecución del constructor");
    }
    public int getidPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
}
