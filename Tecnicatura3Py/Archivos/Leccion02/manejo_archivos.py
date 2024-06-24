# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8')   #La w es de write
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras.\n')
    archivo.write('como por ejemplo: accion, ejecucion y produccion.\n')
    archivo.write('las letras son:\n Las letras son: r read, a append, w write, x crea un archivo')
    archivo.write('\nt esta es para texto o text, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n')
    archivo.write('saludos a todos los alumnos de la tecnicatura')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() #Con eso se debe cerrar el archivo
#archivo.write('todo quedo perfecto'): este es un error