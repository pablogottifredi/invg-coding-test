# Data querying test spec. Fullstack developer
## Goals
Write here

## Spec

### Test 1. Compose an sentence
Acording the table customer|city|mount with the next info:

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