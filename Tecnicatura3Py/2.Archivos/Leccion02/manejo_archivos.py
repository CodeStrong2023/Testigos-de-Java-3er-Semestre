try:
    archivo = open("prueba.txt", "w", encoding="utf8")
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("Con esto terminamos")
except Exception as e :
    print(e)
finally:
    archivo.close()        