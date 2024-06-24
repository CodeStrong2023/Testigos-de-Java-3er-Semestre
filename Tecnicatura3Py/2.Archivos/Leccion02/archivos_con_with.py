from ManejoArchivos import ManejoArchivos

#MANEJO DE CONTEXTO WITH: sintaxis simplificada, abre y cierra el archivo
#with open("prueba.txt", "r", encoding="utf8") as archivo:
    #print(archivo.read())

with ManejoArchivos("prueba.txt") as archivo:
    print(archivo.read())



