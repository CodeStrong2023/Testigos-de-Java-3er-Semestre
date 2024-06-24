from Pelicula import Pelicula


opcion = None
while opcion != 4:
    try:
        print("Opciones: ")
        print("1.Agregar Pelicula")
        print("2.Listar las Peliculas")
        print("3.Eliminar catalogo de peliculas")
        print("4.Salir")
        opcion = int(input("Digite una opcion de Menu (1-4): "))
        if opcion == 1:
            nombre_pelicula = input("Digite el nombre de la pelicula: ")
            pelicula = Pelicula(nombre_pelicula)              
    except Exception as e:
        print(f"Ocurrio un error de tipo: {e}")
        opcion= None

    else:
        print("Salimos del programa")


