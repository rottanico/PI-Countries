

# Individual Project - Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Elementos del proyecto:


- [ ]  Barra de navegacion: botones para poder cambiar el ordenamiento de los paises( por nombre o por poblacion ), botones para filtrar por actividad turistica relacionadas al        pais.
- [ ]  Home: renderiza cartas de paises que incluyen una foto, nombre, continente y un boton para acceder a mas detalle del pais.
- [ ]  Detalle del pais seleccionado: incluye todos los datos del pais ( poblacion, area, continente, imagen, capital, subregion y las actividades turisticas creadas para ese          pais )
- [ ]  Formulario de creacion: Crea una actividad turistica para uno o mas paises con sus respectivos datos (nombre, duracion, dificultad, temporada) para luego almacenarla en          la base de datos


## Tecnologías utilizadas:

- [ ] React 
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres




# Opcion para desarrolladores: 

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.


## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `countries`

## Enunciado

La idea general es crear una aplicación en la cual se pueda ver información de  distintos paises utilizando la api externa [restcountries](https://restcountries.eu/) y a partir de ella poder, entre otras cosas:

  - Buscar paises
  - Filtrarlos / Ordenarlos
  - Crear actividades turísticas


#### Tecnologías utilizadas:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend


__Pagina inicial__: contiene los siguientes items
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene los siguientes items
- [ ] Input de búsqueda para encontrar países por nombre
- [ ] Área donde se verá el listado de países. Al iniciar renderiza los primeros resultados obtenidos desde la ruta `GET /countries` 
- [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- [ ] Paginado para ir buscando y mostrando los siguientes paises

__Ruta de detalle de país__: debe contener
- [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- [ ] Código de país de 3 letras (id)
- [ ] Capital
- [ ] Subregión
- [ ] Área (Mostrarla en km2)
- [ ] Población
- [ ] Actividades turísticas con toda su información asociada

__Ruta de creación de actividad turística__: contiene los siguientes items
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [ ] Posibilidad de seleccionar/agregar varios países en simultaneo
- [ ] Botón/Opción para crear una nueva actividad turística

#### Base de datos

El modelo de la base de datos contiene las siguientes entidades:

- [ ] País con las siguientes propiedades:
  - ID (Código de 3 letras) 
  - Nombre 
  - Imagen de la bandera 
  - Continente 
  - Capital 
  - Subregión
  - Área
  - Población
- [ ] Actividad Turística con las siguientes propiedades:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

La relación entre ambas entidades es de muchos a muchos ya que un país puede contener varias actividades turísticas y, a su vez, una actividad turística puede darse en múltiples países. Por ejemplo una actividad podría ser "Ski" que podría ocurrir en Argentina y también en Estados Unidos, pero a su vez Argentina podría también incluir "Rafting".

#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:


- [ ] __GET /countries__:
  - Envia un listado de los primeros 10 países
- [ ] __GET /countries/{idPais}__:
  - Envia el detalle de un país en particular
  - Envia solo los datos pedidos en la ruta de detalle de país
  - Incluye las Actividades Turisticas
- [ ] __GET /countries?name="..."__:
  - Obtiene y envia los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
- [ ] __POST /activity__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Crea una actividad turística en la base de datos


#### Testing
- [ ] Testeo de un componente
- [ ] Testeo de una ruta
- [ ] Testeo de un modelo

