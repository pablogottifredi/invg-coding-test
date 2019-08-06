#Invgate test

## Section 1. Implementation Test - Coding

### Test 1 

Build an api Restful with the next enpoints:
* Over the model ***incidents.by.helpdeks*** provide a GET operation with next parameters:
    - helpdesk_id: Mandatory. Reference to a helpdesk ID to filter
    - text_to_search: Optional. An string to search inside ticket body. The text info are in ***incidents*** model
    - detailed: Optional. 0 (onlyid) 1 (fulldetailed)


    Rules
    >    Filter text according field ***incidents.description*** using a %like%
    >    Detailed 0 return only incidents.id field filled
    >    Detailed 1 return full incidents fields filled

* Over the movel ***incidents.by.helpdeks*** provide a GET operation with next parameters:
    - helpdeks_id: Optional. Reference to a helpdesk ID to filter
    
    Rules
    >   Return top 5 of most searched string by id
    >   If helpdeks_id is null or undefined, return top 5 most key searched globaly
    >   Propose a database to persist key searched

### Test 2

Provide and User Interface to write the text to search and get helpdesk tickets. 
Compliance the next behaviors:

* Put and helpdeks ID and GET a detailed list of incident according that category
* Filter over result in UI

### Test 3
If the category have too many tickets, propose a solution to improve the performance. Only comment

## Section 2. Data Test - Querying

### Test 1
Acording the table customer|city|mout with the next data:

```
customer        city           mount
pepe            olivos         10
pepe            quilmes        15
tito            olivos         14
fede            quilmes        6
carlos          lanus          3
``` 

* Compose an SQL Sentences to get and ordered list by city, mount, customer, listing only first customer of each city.
Espected result must be similar than
```
lanus           carlos
olivos          tito
quilmes         pepe
```


#### A. Additional example data and espected result
##### Data
```
customer        city          mount
pepe            olivos        10
pepe            quilmes       15
tito            olivos        14
fede            quilmes       15
carlos          lanus         3
```

##### Espected result must be similar than
```
lanus           carlos
olivos          tito
quilmes         fede
```

#### B. Additional example data and espected result
##### Data
```
customer        city          mount
toto            olivos        8
pepe            olivos        10
fede            quilmes       6
pepe            quilmes       15
tito            olivos        14
fede            quilmes       6
carlos          lanus         3
fede            quilmes       6
toto            olivos        7
```

##### Espected result must be similar than
```
lanus           carlos
olivos          toto
quilmes         fede
```

## Section 3. Object oriented programming and recursion - Coding
There are a tree of categories, each node can have one or more children, and their children's also can have descendants successively
Example of data

* Genero
   * Rock
       * Nacional
           * Viejito
           * Moderno
       * Extranjero
   * Jazz

### Test 1
Write a piece of code that list the full path of each categoriy from base node to each sheet (node without childrens), ordererd by sheet name asc

Expected data result
```
Extranjero Rock Genero 
Jazz Genero 
Moderno Nacional Rock Género 
Viejito Nacional Rock Género 
```

### Test 2
In the same source code, get the tree from a file with rows of tuples of parent-children node, in one level of descendant
Data example
```
Genero Rock
Genero Jazz
Rock Nacional
Rock Extranjero
Nacional Viejito
Nacional Moderno
```

Ensure that piece of code writed in Test 1 obtain a result according the next sample data and outuut
#### Aditional data and expected result
* A
  * X
  * B
    * C
  * D
    * E
    * F
      * G

##### Data in file
AB
BC
AD
DE
DF
FG
AX

##### Expected result
CBA
EDA
GFDA
XA


### Section 4. Modeling a pet
Provide a class design to represent the types and methods required for run pet behaviour
Optionaly provide a source code with the design proposed

#### Espected behaviour

* The Pet has a name and kind/species
* Each kind of Pet has fear to another kinds of pets, but not with himself
* The Pet has functions like
    * Made noise
    * Move
    * Wake up
    * Sleep
* The Pet can be sleeping or awake
* If the Pet is awake
    * When run the move function, they moving
    * When run the noise function, they snarl
* If the Pet is sleeping
    * When run the move function, they ignoring the instruction
    * When run the noise function, they snore
* The Pet has several kinds of snarl, severals melodies, with a certain duration and decibel

#### Desired design features
Additionaly to awake or sleep state, the pet must have a feel property, like happy/sad/other.
If the feel property is setted in happy, when run the noise function, they laught
If the feel property is setted in sad, when run the noise function, they cries







Se tiene un arbol de categorias, donde una categoría puede tener uno o más hijos, que a su vez pueden tener uno o más hijos y así sucesivamente:

Genero ->
Rock ->
Nacional ->
Viejito


->
Moderno

->
Extranjero

       ->
Jazz



Aquí la categoría género tiene dos categorías hijas: Rock y Jazz. Rock tiene dos hijas: Nacional y Extranjero. Nacional, tiene 2 subcategorías Viejito y Moderno.

Se pide obtener todos los caminos de las categorías hoja (es decir, las que no tienen ninguna categoría hija) hasta las categorías raices, ordenados alfabéticamente.
En este ejemplo, se espera que se devuelvan

Extranjero Rock Genero 
Jazz Genero 
Moderno Nacional Rock Género 
Viejito Nacional Rock Género 



Su programa debe recibir por parámetro el nombre de un file que tendrá una línea por cada relación padre hijo, es decir que el árbol anterior vendría en un archivo de la siguiente manera
Genero Rock
Genero Jazz
Rock Nacional
Rock Extranjero
Nacional Viejito
Nacional Moderno

Puede asumir que las palabras no tienen espacios y que hay por lo menos una línea

Otro ejemplo
A 	-> X

-> B 	-> C

-> D	 -> E
 -> F	 -> G
  

podría venir en un archivo como:
A B
B C
A D
D E
D F
F G
A X

y la salida esperada es:

C B A
E D A
G F D A
X A


Puede utilizar el lenguaje que prefiera, aunque preferimos que la solución sea orientada a objetos. Indique cómo ejecutar su solución.




Parte 3)
Si la categoría tiene muchos tickets, cargarlos uno a uno para buscar tarda mucho. ¿Qué alternativas se le ocurre para resolver esta situación? Comente cómo implementaría dicha solución.


Realizar un UI donde se pueda traer los tickets por helpdesk y luego realizar la búsqueda desde el browser. Es decir la UI debería permitirle al usuario:
1) Cargar un id de help desk y obtener la lista detallada de incidentes en esa categoría
2) Escribir en otro cuadro un texto y filtrar mediante Javascript la lista obtenida realizando una búsqueda del texto ingresado




2. El otro endpoint toma como parámetro un helpdesk_id  y devuelve los 5 textos más buscados para ese helpdesk. Si no se manda parámetro helpdesk_id, hay que devolver los 5 textos más buscados globalmente. Para este endpoint esperamos que la solución use algún tipo de base de datos para persistir los resultados.

    



Se pide construir una api con 2 endpoints json :
    1. Un endpoint que tome 3 parámetros:
helpdesk_id: Id de una mesa de ayuda a considerar
text_to_search: Un string a buscar en la description de los incidentes de la mesa de ayuda
detailed:  si el parámetro está en cero, o no está; la respuesta debe tener sólo los ids de los incidentes que concuerden con la búsqueda, mientras que si el valor es uno se deben devolver los incidentes completos (es decir, todos sus campos). Cualquier otro valor, es considerado inválido.

Este endpoint debe devolver la lista de los incidentes (ids o todo la data según el parámetro detailed) de la helpdesk cuyo id se pasó por parámetro.



En https://webdemo.cloud.invgate.net/api/v1
se encuentra una api de una instancia de Service Desk que provee, entre otros, 2 endpoints:

- incidents.by.helpdesk?helpdesk_id=ID
que permite obtener la lista de incidentes que pertenece a la mesa de ayuda con id = ID

Por ejemplo:
https://apiuser:75NwxqPmAAEnebWS6PxJ94MH@webdemo.cloud.invgate.net/api/v1/incidents.by.helpdesk?helpdesk_id=11
devuelve el json:

{
    "status":"OK",
    "info":"Returned a list of the requests related to the given help desk(s)",
    "requestIds":[
        "143",
        "206",
        "276",
        "294",
        "296",
        "297",
        "301",
        "323",
        "345",
        "346",
        "347",
        "348",
        "349",
        "351",
        "106",
        "133",
        "140",
        "182",
        "183",
        "219",
        "220",
        "302",
        "339",
        "136",
        "179",
        "199",
        "295",
        "300",
        "308",
        "320",
        "336",
        "344",
        "4",
        "139",
        "144"
    ]
}


Y los ids dentro de requestIds son ids de incidentes que pertenece a dicha mesa.

incident?id=206
Que devuelve los detalles del incidente de id 206

https://apiuser:75NwxqPmAAEnebWS6PxJ94MH@webdemo.cloud.invgate.net/api/v1/incident?id=206

{
    "id":"206",
    "title":"Screen broken",
    "category_id":"11",
    "description":"<p>Hi my laptop fell from my desk. The screen is broken.<\/p>\r\n",
    "priority_id":"1",
    "user_id":"12",
    "creator_id":"12",
    "assigned_id":null,
    "assigned_group_id":"11",
    "date_ocurred":"1409931780",
    "source_id":"2",
    "status_id":"1",
    "type_id":"1",
    "created_at":"1409931849",
    "last_update":"1409931850",
    "process_id":null,
    "solved_at":null,
    "closed_at":null,
    "closed_reason":null,
    "data_cleaned":null,
    "attachments":[

    ]
}


apiuser es el usuario para basic auth y 75NwxqPmAAEnebWS6PxJ94MH es el password de dicho usuario.

Parte 1)

Se pide construir una api con 2 endpoints json :
    1. Un endpoint que tome 3 parámetros:
helpdesk_id: Id de una mesa de ayuda a considerar
text_to_search: Un string a buscar en la description de los incidentes de la mesa de ayuda
detailed:  si el parámetro está en cero, o no está; la respuesta debe tener sólo los ids de los incidentes que concuerden con la búsqueda, mientras que si el valor es uno se deben devolver los incidentes completos (es decir, todos sus campos). Cualquier otro valor, es considerado inválido.

Este endpoint debe devolver la lista de los incidentes (ids o todo la data según el parámetro detailed) de la helpdesk cuyo id se pasó por parámetro.

2. El otro endpoint toma como parámetro un helpdesk_id  y devuelve los 5 textos más buscados para ese helpdesk. Si no se manda parámetro helpdesk_id, hay que devolver los 5 textos más buscados globalmente. Para este endpoint esperamos que la solución use algún tipo de base de datos para persistir los resultados.

Nos gustaría ver prácticas de programación defensiva, ie: Validación de parámetros, manejo y logueo de errores (puede no haber internet, puede no existir la categoría, puede fallar la api de webdemo, etc) y tests unitarios sobre su código.

Puede utilizar el lenguaje que quiera. Si quiere utilizar algún framework o library por favor documentar que usa y como podemos correr el código. En el caso en el que utilice un framework, quisiéramos poder recibir por separado el código de su autoría para diferenciarlo del código del framework.

Parte 2)

Realizar un UI donde se pueda traer los tickets por helpdesk y luego realizar la búsqueda desde el browser. Es decir la UI debería permitirle al usuario:
1) Cargar un id de help desk y obtener la lista detallada de incidentes en esa categoría
2) Escribir en otro cuadro un texto y filtrar mediante Javascript la lista obtenida realizando una búsqueda del texto ingresado

Parte 3)
Si la categoría tiene muchos tickets, cargarlos uno a uno para buscar tarda mucho. ¿Qué alternativas se le ocurre para resolver esta situación? Comente cómo implementaría dicha solución.
