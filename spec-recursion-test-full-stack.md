# Invg Test. Recursion Test
Instruction for oriented programming and recursion test. Fullstack developer profile
Related to [main document](../readme.md) 

## Goals
Write here

## Spec
There are a tree of categories, each node could have one or more children, and their children's also can have descendants successively

Example of data

* Genero
   * Rock
       * Nacional
           * Viejito
           * Moderno
       * Extranjero
   * Jazz

### Test 1. Read and print each path of tree
Write a piece of code that lists the full path of each category from base node to each sheet (node without children), ordered by sheet-node name ascendent

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

Ensure that piece of code written in Test 1 obtain a result according to the next sample data and output
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
