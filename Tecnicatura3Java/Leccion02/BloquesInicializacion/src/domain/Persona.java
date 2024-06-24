package domain;

public class Persona {
   private final int IdPersona;
    private static int contadorPersonas;
    
    static{ //Bloque de inicializacion estatico
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona = 10; No es un atributo static por esto hay error
    }
    
    { //Bloque de inicializacion NO static (contexto dinamico)
        System.out.println("Ejecucion de bloque NO estatico");
        this.IdPersona = Persona.contadorPersonas++;    //Incrementamos el atributo
    }
    
    //Los bloques de inicializacion se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecucion del constructor");
    }
    
    public int getidPersona(){
        return this.IdPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "IdPersona=" + IdPersona + '}';
    }  
}
