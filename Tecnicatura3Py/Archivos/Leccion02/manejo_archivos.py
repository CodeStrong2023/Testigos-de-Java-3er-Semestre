# Declaramos una variable
try:
    archivo= open('prueba.txt','w',encoding='utf8')  #La W es de write que en ingles significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo:acción,ejecución y pruducción\n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() #Con esto se debe cerrar el archivo 
#archivo.write('Todo quedo perfecto'):este es un error