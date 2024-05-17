archivo = open('prueba.txt', 'r',
               encoding='utf8')  #Las letras son: 'r' read, 'a' append, 'w' write, 'x' 
# print(archivo.read())
#print(archivo.read(16))
#print(archivo.read(10)) #continuamos desde la linea anterior
#print(archivo.readline())
#print(archivo.readline())

# vamos a iterar el archivo, cada una de las lineas
#for linea in archivo:
   # print(linea):   iteramos todos los elementos del archivo
   # print(archivo.readline()): accedemos al archivo como si fuera una lista
#print(archivo.readlines()[7]) #Accedemos al archivo como si fuera una lista
# Anexamos informacion, copiamos a otro
archivo2 = open('copia.txt', 'a', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() #Cerramos el archivo
archivo2.close()    #Cerramos el 2do archivo

print('Se ha terminado el proceso de leer y copiar archivos')