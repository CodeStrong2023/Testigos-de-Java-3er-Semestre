import java.util.Scanner;


public class CalculadoraTestigos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(true){
            System.out.println("Calculadora LOS TESTIGOS DE JAVA");
            System.out.println("1. Suma\n" + "2. Resta\n" + "3. Multiplicacion\n" + "4. Division\n" + "5. Salir\n");

            System.out.println("Que operacion va a realizar?");
            int choice = Integer.parseInt(scanner.nextLine());

            if(choice >= 1 && choice <= 4) {
                System.out.println("Ingrese el primer numero:");
                var num1 = Integer.parseInt(scanner.nextLine());
                System.out.println("Ingrese el segundo numero:");
                var num2 = Integer.parseInt(scanner.nextLine());

                int result;
                switch (choice) {
                    case 1:
                        result = num1 + num2;
                        System.out.println("Resultado: " + num1 + " + " + num2 + " = " + result);
                        break;
                    case 2:
                        result = num1 - num2;
                        System.out.println("Resultado: " + num1 + " - " + num2 + " = " + result);
                        break;
                    case 3:
                        result = num1 * num2;
                        System.out.println("Resultado: " + num1 + " * " + num2 + " = " + result);
                        break;
                    case 4:
                        if (num2 != 0) {
                            result = num1 / num2;
                            System.out.println("Resultado: " + num1 + " / " + num2 + " = " + result);
                        } else {
                            System.out.println("Error: Division por cero no permitida.");
                        }
                }
            }
            // Validar la elecciÃ³n para asegurarse de que sea una opciÃ³n vÃ¡lida
            else if(choice == 5) {
                System.out.println("Gracias por usar Los Testigos de Java. Hasta luego!");
            }
            else{
                System.out.println("Opcion equivocada: "+choice);
            }
        }
    }

}

