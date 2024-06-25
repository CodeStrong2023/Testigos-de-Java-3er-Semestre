# Declaramos una variable
try:
    archivo= open('prueba.txt','w')  #La W es de write que en ingles significa escribir
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() #Con esto se debe cerrar el archivo 