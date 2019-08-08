import config from '../config';
 
const create = (req, res, next) => {
    if(req.errors) return res.status(400).send({error: req.errors});
    else return res.status(201).send( { id: Math.random()*(100-1)+1, name: req.body.name });
}

const read = (req, res, next) => {
   if (req.params.id == -1) return res.status(404).send( { code:404, message:"item not found"} );
   else return res.status(200).send( { id: 1, name: "one" } );
}
const update = (req, res, next) => {
    if(req.errors) return res.status(400).send({error: req.errors});
    else return res.status(200).send( { id: req.params.id, name: req.body.name });
}

const del = (req, res, next) =>
    res.status(204).send();

const list = (req, res, next) =>
    res.status(200).send( [ { id: 1, name: "one"}, { id: 2, name: "two"}] );

export default { create, read, update, del, list }
