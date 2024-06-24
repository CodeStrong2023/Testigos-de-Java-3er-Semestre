

from capa_datos_persona.cursor_del_pool import CursorDelPoll
















#Definimos los metodos de clase
@classmethod
def seleccionar(cls):
    with CursorDelPool() as cursor:
        cursor.execute(cls._SELECCIONAR)
        registros= cursor.fetchall()
        personas=[]#creamos una lista
        for registro in registros:
            persona=Persona(registro[0],registro[1],registro[2],registro[3])
            personas.append(persona)
        return personas
    
@classmethod
def insertar (cls,persona):
    with CursorDelPoll () as cursor:
        valores=(persona.nombre,persona.apellido,persona.email)
        cursor.execute(cls.INSERTAR, valores)
        log.debug(f'Persona Insertada:{persona}')
        return cursor.rowcount
    
@classmethod
def actualizar(cls,persona):
    with CursorDelPoll() as cursor:
        valores=(persona.nombre,persona.apellido,persona.email,persona.id_persona)
        cursor.execute(cls._ACTULIZAR,Valores)
        log.debug(f'Persona actuliaza:{persona}')
        return cursor.rowcount
    
@classmethod 
def eliminar(cls,persona):
    with CursorDelPoll() as cursor:
        valores =(persona.id_pesona,)
        cursor.execute(cls._ELIMINAR,valores)
        log.debug(f'Los objetos eliminados son:{persona}')
        return cursor.rowcount



if __name__ == '__main__':
    #Eliminar un registro
    persona1 =Persona (id_persona=18)
    personas_eliminadas= PersonaDAO.eliminar(persona1)
    log.debug(f'Personas eliminadas:{personas_eliminadas}')

    # Actualizar un registro
    persona1=Persona(1,'Juan','Pena','jpena@mail.com')
    personas_actualizadas=PerosnaDao.actualizar(persona1)
    log.debug(f'Perosnas actualizadas:{personas.actualizadas}')

    # Insetar un registro
    persona1= Persona(nombre='Mateo',apellido='Torres',email='tmateo@mail.com')
    personas_insertadas= PersonaDAO.insertar(persona1)
    log.debug(f'Personas insertdas:{personas_insertadas}')

