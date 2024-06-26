import psycopg2 #Esto es para conectarnos en Postgre

conexion= psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database='rest_db'
)

curso= conexion.cursor()
sentencia= 'SELECT * FROM persona'
cursor .execute