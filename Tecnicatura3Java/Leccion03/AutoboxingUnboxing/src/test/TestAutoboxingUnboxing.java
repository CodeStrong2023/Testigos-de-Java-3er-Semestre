package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
           Clases envolventes de tipos primitivos
            
        
            int=la clase envolvente es Integer
            long=la clase envolvente es Long
            float=la clase envolvente es Float
            double=la clase envolvente es double
            boolena= la clase envolvente es Boolean
            byte= la clase envolvente es Byte
            char=la clase envolvente es Character
            short=la calse nvolvente es short
         */
        
        int enteroPrim=10;
        System.out.println("enteroPrimitivo = "+enteroPrim);
        Integer entero=10;//Tipo de object con la clase Integer
        System.out.println("entero = "+ entero.doubleValue());//Autoboxing
        
        int entero2= entero;//Unboxing
        System.out.println("entero2 = " + entero2);
       
    }
}
