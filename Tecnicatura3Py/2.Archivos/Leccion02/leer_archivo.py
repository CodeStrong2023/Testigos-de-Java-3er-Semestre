archivo = open("prueba.txt", "r", encoding="utf8")
#print(archivo.readline())
#print(archivo.readline())
#print(archivo.readline()[3])
#Anexamos informacion, copiamos a otro
archivo2 = open("copia.txt", "a", encoding="utf8")
archivo2.write(archivo.read())
archivo.close()
archivo2.close()

print("Se ha terminado el proceso de leer y copiar archivos")




