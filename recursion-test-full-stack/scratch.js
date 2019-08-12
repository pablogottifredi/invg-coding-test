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

