import config from '../config';
import agent from '../agents/invgate.api.incidents';
const { body, query, validationResult } = require('express-validator/check')

const validate = (method) => {
    switch (method) {
    case 'get': {
     return [ 
         query('helpdesk_id', 'helpdesk_id mandatory').exists(),
         query('helpdesk_id', 'helpdesk_id invalid').isInt({min:0}),
         query('detailed').isIn(['0', '1', undefined]),
         query('text_to_search').escape()
       ]   
    }
  }
}
const read = (req, res, next) => {
    const errors = validationResult( req );
    if (!errors.isEmpty()) return res.status(428).send( { code: '428', message: errors.array({onlyFirstError:true})[0].msg });
    const text_to_search = req.query.text_to_search || '';
    agent.helpdeskById( req.query.helpdesk_id )
        .then( response  => {
            let ids = response.requestIds;
            agent.incidentByIds( ids, ( incidents )=>{
                var t = text_to_search.toLowerCase();
                var f = incidents.filter( (e) =>{ return e.title.toLowerCase().includes(t) || e.description.toLowerCase().includes(t) });
                let detailed = req.query.detailed || 0;
                var m = detailed==0? f.map( (e) => { return  { id: e.id, title: '', description: ''} } ) : f;
                res.status(200).send( m );
            });
            
        })
        .catch(( error => {
            if (error.code == 428) console.error('API invgate','error', 'incidents', "unespected preconditions errors");
            let errorExposed = (error.code && error.code != 428)?{ code: 500, message: 'internal server error'}:{ code: error.code, message: error.message };
            res.status( errorExposed.code ).send( errorExposed);
        }));
 
}

const tags = (req, res, next) =>
    res.status(200).send( [ { tag: "network problem", count: 10}, { tag: "login not connected", count: 8 }, { tag: "file not found", count: 3 }] );

export default { read, tags, validate }
