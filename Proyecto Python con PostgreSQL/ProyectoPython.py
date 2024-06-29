import tkinter as tk
from tkinter import simpledialog, messagebox
from conexion_postgresql import insert_data
import numpy as np

class App:
    def main(self):
        messagebox.showinfo("Inicio", "......................:::Arranca con Fuerza:::........................")
        nomus = simpledialog.askstring("Input", "Escriba su nombre:")
        if nomus:
            messagebox.showinfo("Bienvenida", f"Bienvenido {nomus}")
            self.menu()

    def menu(self):
        elemenu = simpledialog.askinteger("Menu",
            "                       MENU\n"
            "\n1. Planes de Pago\n"
            "2. Elegir Turno\n"
            "3. Rutina a entrenar\n"
            "4. Contador de series en el ejercicio\n"
            "5. Salir")
        if elemenu == 1:
            self.planesdepago()
        elif elemenu == 2:
            self.turno()
        elif elemenu == 3:
            self.rut()
        elif elemenu == 4:
            self.cont()
        elif elemenu == 5:
            messagebox.showinfo("Salir", "Gracias por venir purasangre!")
        else:
            messagebox.showerror("Error", "La opción elegida es incorrecta, vuelva a seleccionar otra")
            self.menu()

    def planesdepago(self):
        messagebox.showinfo("Planes de Pago", 
                            "                         PLANES DEL GYM\n"
                            "\n| Lunes | Martes | Miercoles | Jueves | Viernes |\n"
                            "\n1 vez x semana                                 $400\n"
                            "2 veces x semana                             $2000\n"
                            "3 veces x semana                             $3000\n"
                            "5 veces x semana                             $5000\n"
                            "\n¿Desea volver al menu?")
        
        vol = simpledialog.askinteger("Input", 
            "1. Si desea volver coloque 1\n"
            "2. Si desea salir coloque 2")
        
        if vol == 1:
            self.menu()
        elif vol == 2:
            messagebox.showinfo("Salir", "GRACIAS POR VENIR PURA SANGRE")
        else:
            while vol > 2:
                vol = simpledialog.askinteger("Error", "La opción es incorrecta, vuelva a elegir otra opción".upper())
            if vol == 1:
                self.menu()
            else:
                messagebox.showinfo("Salir", "GRACIAS POR VENIR PURA SANGRE")

    def turno(self):
        precios = [400, 2000, 3000, 5000]
        nombre = simpledialog.askstring("Input", "Ingrese su nombre: ")
        apellido = simpledialog.askstring("Input", "Ingrese su apellido: ")
        if nombre and apellido:
            messagebox.showinfo("Precios",
                                "1. 1 dia a la semana son $400\n"
                                "2. 2 dias a la semana son $2000\n"
                                "3. 3 dias a la semana son $3000\n"
                                "4. 5 dias a la semana son $5000")
            dias = i = simpledialog.askinteger("Input", "¿Cuantos dias va a asistir?")
            while i > 4:
                i = simpledialog.askinteger("Error", "La opción es incorrecta, vuelva a elegir el plan")
            if i in [1, 2, 3, 4]:
                messagebox.showinfo("Confirmación",
                                    f"___________________________\n"
                                    f"| Usuario: {nombre+" "+apellido}\n"
                                    f"|--------------------------------|\n"
                                    f"| Dias: {i}\n"
                                    f"|--------------------------------|\n"
                                    f"| Precio: $ {precios[i-1]}\n"
                                    f"|--------------------------------|")
            messagebox.showinfo("Operación", "¿Desea realizar otra operación?".upper())
            insert_data(nombre, apellido, dias)
            self.menu()

    def rut(self):
        rutina = ["Pecho", "Espalda", "Pierna", "Bicep", "Tricep", "Hombro", "Abs"]
        i = simpledialog.askinteger("Input",
                                    "Seleccione su sexo\n"
                                    "1. Mujer\n"
                                    "2. Hombre")
        while i > 2:
            i = simpledialog.askinteger("Error", "Usted eligió una opción incorrecta, vuelva a seleccionar su sexo")
        
        j = simpledialog.askinteger("Input",
                                    "Seleccione los días a trabajar\n"
                                    "1. 1 dia a la semana\n"
                                    "2. 2 dias a la semana\n"
                                    "3. 3 dias a la semana\n"
                                    "4. 5 dias a la semana")
        while j > 4:
            j = simpledialog.askinteger("Error", "Usted eligió una opción incorrecta, seleccione nuevamente su rutina")
        
        if i == 1 and j == 1:       
            messagebox.showinfo("Rutina","           Plan de ejercitación de 1 día\n" 
                      "\nLunes | Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      "nada  |  nada   |   Pierna     |   nada  |   nada  |\n" 
                      "nada  |  nada   |      Abs      |  nada   |  nada    |\n" 
                      "nada  |  nada   |  Espalda   |  nada   |  nada    |\n")
        elif i == 1 and j == 2:
            messagebox.showinfo("Rutina","           Plan de ejercitación de 2 días\n" 
                      "\nLunes | Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      "nada  | Pierna  |     nada     |  Bicep  |   nada   |\n" 
                      "nada  |    Abs   |     nada     |  Pierna |   nada   |\n"
                      "nada  |Espalda |    nada     |Hombro|  nada    |\n")
        elif i == 1 and j == 3:
            messagebox.showinfo("Rutina","           Plan de ejercitación de 3 días\n" 
                      "\nLunes | Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      "Pierna|  nada   |     Bicep    |   nada  |  Pecho  |\n" 
                      "  Abs  |  nada    |    Pierna   |   nada  |  Tricep  |\n" 
                      "Hombro|  nada |  Espalda  |   nada  |  Pierna  |\n")
        elif i == 1 and j == 4:
            messagebox.showinfo("Rutina","           Plan de ejercitación de 5 días\n" 
                      "\nLunes | Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      "Pierna|    Abs   |     Pecho   |    Abs    |  Pecho  |\n" 
                      "  Abs  |   Bicep   |    Pierna   |  Tricep  |Hombro|\n" 
                      "Hombro| Tricep |  Espalda  |   Bicep  |  Pierna |\n")
        elif i == 2 and j == 1:
            messagebox.showinfo("Rutina","           Plan de ejercitación de 1 día\n" 
                      "\nLunes | Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      " nada |  nada   |    Pecho    |  nada   |   nada  |\n" 
                      " nada |  nada   |    Bicep     |  nada   |   nada  |\n" 
                      " nada |  nada   |    Tricep    |  nada   |   nada  |\n")
        elif i == 2 and j == 2:
            messagebox.showinfo("Rutina","           Plan de ejercitación de 2 días\n" 
                      "\nLunes |  Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      " nada |   Pecho  |    nada     |Espalda|   nada   |\n" 
                      " nada |    Bicep  |    nada     | Pierna  |   nada   |\n" 
                      " nada |   Tricep  |    nada     |Hombro|   nada   |\n")
        elif i == 2 and j == 3:
            messagebox.showinfo("Rutina","           Plan de ejercitación de 3 días\n" 
                      "\nLunes | Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      "Pecho |  nada   |  Espalda  |   nada  |    Abs    |\n" 
                      " Bicep |  nada   |    Pierna   |   nada  |   Bicep   |\n" 
                      "Tricep |  nada   |  Hombro  |   nada  |  Pecho  |\n")
        elif i == 2 and j == 4:
            messagebox.showinfo("Rutina","           Plan de ejercitación de 5 días\n" 
                      "\nLunes | Martes | Miercoles | Jueves | Viernes |\n" 
                      "--------------------------------------------------------\n"
                      "Pecho |    Abs   |    Pecho    |    Abs   |  Pecho  |\n" 
                      " Bicep |   Bicep  |    Tricep    |  Tricep |   Tricep  |\n" 
                      "Pierna |Hombro|  Espalda  |Hombro|Hombro|\n")
        
        #messagebox.showinfo("Rutina",)
        self.menu()
        
        
    def cont(self):           
        numseries=simpledialog.askinteger("Input","Ingrese el número de series que va a realizar:")
        numrepeti=simpledialog.askinteger("Input","¿Candidad de repeticiones de la serie?:")
        matriz= np.zeros((numseries,numrepeti),dtype=int)
        #llenar matriz
        for i in range(numseries):
            for j in range(numrepeti):
                matriz[i][j]=simpledialog.askinteger ("Input",f"Numero de serie {i+1} de la {j+1} repeticion:")

        #Imprimir la matriz
        resultado=""
        for i in range(numseries):
            for j in range(numrepeti):
                resultado += str(matriz[i][j])
                resultado += "         "
            resultado +="\n"
        messagebox.showinfo("Repeticiones",f'Repeticiones realizadas\n'+resultado)
        self.menu()

if __name__ == "__main__":
    root = tk.Tk()
    root.withdraw()
    app = App()
    app.main()
