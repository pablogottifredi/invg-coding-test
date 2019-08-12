# Invg Test. Recursion Test

Provide a solution according the follow  [spec](https://github.com/pablogottifredi/invg-coding-test/blob/master/spec-recursion-test-full-stack.md)

## Short anwser
``` 
let data = {"name": "Genero","childs": [{"name": "Rock","childs": [{"name": "Nacional","childs": [{"name": "Viejito","childs": []},{"name": "Moderno","childs": []}]},{"name": "Extranjero","childs": []}]},{"name": "Jazz","childs": []}]};

let dataObj = data;

const search = (node,parent,ar) => {
    for(let i=0;i<node.childs.length;i++){
        let ruta =  node.name+' '+parent;
        search(node.childs[i],ruta,ar);
    }
    if (node.childs == 0){
        ar.push(node.name+' '+parent);
    }
    return ar;
}

let a = search( dataObj, '', [] )
console.log(a.sort());


``` 
