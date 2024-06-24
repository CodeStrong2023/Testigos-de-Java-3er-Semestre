from NumerosIgualesException import NumerosIgualesException

resultado = None   #nada

try: 
    a = int(input('Escriba un numero: '))
    b = int(input('Escriba el segundo numero: '))
    if a == b:
        raise NumerosIgualesException('Son numeros iguales')
    resultado = a/b #Modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f' ZeroDivisionError - Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error: {type(e)}')
else: 
    print('No se arrojo ninguna excepcion')
finally:    #Siempre se va a ejecutar finally
    print('Ejecucion de este bloque finally')
    
print(f'El resultado es: {resultado}')
print('seguimos...')