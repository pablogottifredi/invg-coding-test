import config from '../config';
import agent from '../agents/invgate.api.incidents';
const { body, query, validationResult } = require('express-validator/check')

const validate = (method) => {
    switch (method) {
    case 'get': {
     return [ 
         query('helpdesk_id', 'helpdesk_id mandatory').exists(),
         query('helpdesk_id', 'helpdesk_id invalid').isInt(),
         query('detailed').isIn(['0', '1', undefined]),
         query('text_to_search').escape()
       ]   
    }
  }
}
const read = (req, res, next) => {
    const errors = validationResult( req );
    if (!errors.isEmpty()) return res.status(400).send( { code: '428', message: errors.array() });
    const text_to_search = req.query.text_to_search || '';
    agent.helpdeskById( req.query.helpdesk_id )
        .then( response  => {
            let ids = response.requestIds;
            agent.incidentByIds( ids, ( incidents )=>{
                var t = text_to_search.toLowerCase();
                var f = incidents.filter( (e) =>{ return e.title.toLowerCase().includes(t) || e.description.toLowerCase().includes(t) });
                let detailed = req.query.detailed || 0;
                var m = detailed==0? f.map( (e) => { return  { id: e.id} } ) : f;
                res.status(200).send( m );
            });
            
        })
        .catch(( error => {
            console.error(error);
            res.status(500).send({ code: 500, message: "Internal server error"} );
        }));
 
}

const tags = (req, res, next) =>
    res.status(200).send( [ { tag: "network problem", count: 10}, { tag: "login not connected", count: 8 }, { tag: "file not found", count: 3 }] );

export default { read, tags, validate }
