from NumerosIgualesException import NumerosIgualesException


resultado = None


try:
    a = int(input("Digite el primer numero: "))
    b = int(input("Digite el segundo numero: "))
    if a == b:
        raise NumerosIgualesException("Son numeros igualñes")
        
    resultado = a / b
except TypeError as e:
    print(f"TyperError - Ocurrio un error: {type(e)}")
except ZeroDivisionError as e:
    print(f"Ocurrio un error: {e}")
except Exception as e:
    print(f"Exception - Ocurrio un error: {type(e)}")    
else:
    print("No se arrojo ninguna excepcion")
finally:
    print("Ejecucion de este bloque finally")


print(f"El resultado es: {resultado}")
print("seguimos...")

