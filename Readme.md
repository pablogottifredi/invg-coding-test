# Test
# Result

# Spec
## Section 1. Implementation Test - Coding

### Test 1 . Build an api Restful with the next enpoints:
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

You can access to a live api endpoint in [this link](https://webdemo.cloud.invgate.net/api/v1)
You can use the follow key credentials:
``` 
user: apiuser
token: 75NwxqPmAAEnebWS6PxJ94MH
``` 
There are an endpoint to get the incidents.by.helpdeks by id
```
- usage incidents.by.helpdesk?helpdesk_id=ID
$ curl -X GET https://apiuser:75NwxqPmAAEnebWS6PxJ94MH@webdemo.cloud.invgate.net/api/v1/incidents.by.helpdesk?helpdesk_id=11
```

Response the follow data
```
{
    "status":"OK",
    "info":"Returned a list of the requests related to the given help desk(s)",
    "requestIds":["143","206","276","294","296","297","301","323","345","346","347","348","349","351","106","133","140","182","183","219","220","302","339","136","179","199","295","300","308","320","336","344","4","139","144]
}
```

then you can usage the incident?id enpoint (206 is and ID of previous request)
```
- usage incident?id=206
$ curl -X GET https://apiuser:75NwxqPmAAEnebWS6PxJ94MH@webdemo.cloud.invgate.net/api/v1/incident?id=206
```

Response:
```
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
```

### Test 2. Provide and User Interface to write the text to search and get helpdesk tickets

* Rules & behaviors
    >   Put and helpdeks ID and GET a detailed list of incident according that category
    >   Filter over result in UI

### Test 3. Propose a solution to improve the performance
If the category have too many tickets, propose a solution to improve the performance. Only comment


## Section 2. Data Test - Querying

### Test 1. Compose an sentence
Acording the table customer|city|mout with the next data:

```
customer        city           mount
pepe            olivos         10
pepe            quilmes        15
tito            olivos         14
fede            quilmes        6
carlos          lanus          3
``` 

Compose an SQL Sentences to get and ordered list by city, mount, customer, listing only first customer of each city.
Espected result must be similar than
```
lanus           carlos
olivos          tito
quilmes         pepe
```


#### Test 1. A. Additional example data and espected result
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

### Test 1. Read and print each path of tree
Write a piece of code that list the full path of each categoriy from base node to each sheet (node without childrens), ordererd by sheet name asc

Expected data result
```
Extranjero Rock Genero 
Jazz Genero 
Moderno Nacional Rock Género 
Viejito Nacional Rock Género 
```

### Test 2. Extract data from a file
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
```
AB
BC
AD
DE
DF
FG
AX
```
##### Expected result
```
CBA
EDA
GFDA
XA
```

## Section 4. Modeling a pet
Provide a class design to represent the types and methods required for run a Pet behaviour
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




