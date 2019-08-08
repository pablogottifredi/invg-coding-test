import { join } from 'path';

const uuid = require('uuid/v1');
const request = require('request-promise');
const Joi = require('@hapi/joi');

const ENDPOINT_BASE_ROUTE = 'https://webdemo.cloud.invgate.net/api/v1';
const ENDPOINT_INCIDENTS_BY_HELDESK = '/incidents.by.helpdesk';
const ENDPOINT_INCIDENTS_BY_ID = '/incident';
const ENDPOINT_COMMON_AUTH = { auth: { user: 'apiuser', pass: '75NwxqPmAAEnebWS6PxJ94MH', sendImmediately: true }};


var helpdeskById = ( helpdesk_id ) => {
    return new Promise((resolve,reject) =>{
        const optR = {
            method: 'GET',
            uri: ENDPOINT_BASE_ROUTE + ENDPOINT_INCIDENTS_BY_HELDESK,
            qs: { 
                helpdesk_id: helpdesk_id
            }
        };
        const options = {...optR,...ENDPOINT_COMMON_AUTH}
        const responseSchema = Joi.object().keys( {
            status: Joi.string().required(),
            info: Joi.string().required(),
            requestIds: Joi.array().items(Joi.number())
        });
        const trnx = uuid(options);
        console.log('request', 'start', trnx,  process.env.LOG_LEVEL=='verbose'?options:options.uri);
        request( options ) 
            .then(function(response){
                console.log('request', 'response', trnx, process.env.LOG_LEVEL=='verbose'?response:'');
                Joi.validate( response, responseSchema, (err,value)=>{
                    if (err) {
                        console.error({ code: 500, message: "agent schema invalid"} );
                        reject( { code: 500, message: "agent schema invalid"} );
                    } else {
                        resolve(JSON.parse(response));
                    }
                });
                
            })
            .catch(function(err){
                console.error('request', 'error', trnx, process.env.LOG_LEVEL=='verbose'?err:err.statusCode || 500);
                reject( { code: err.statusCode || 500, message: err }  );
            });
    });
};

const incidentByIds = async ( arrayOfIncidents, resolve ) => {
    var promiseArray = [];
    var acc = [];
    var accerr = [];
    arrayOfIncidents.forEach( id => {
        var p = incidentById( id )
        .then(  (data)=>{
            acc.push({ id: data.id, title: data.title, description: data.description} );      
        })
        .catch( (err)=>{
            accerr.push( err );
        });
        promiseArray.push(p);
    } );
    await Promise.all( promiseArray )
            .then(()=>{
            
            } )
            .catch(()=>{

            })
            .finally( () =>{
                resolve( acc );                    
            });

};

const incidentById = ( incident_id ) => {
    return new Promise((resolve,reject) =>{
        const optR = {
            method: 'GET',
            uri: ENDPOINT_BASE_ROUTE + ENDPOINT_INCIDENTS_BY_ID,
            qs: { 
                id: incident_id
            }
        };
        const options = {...optR,...ENDPOINT_COMMON_AUTH}
        const trnx = uuid(options);
        console.log('request', 'start', trnx,  process.env.LOG_LEVEL=='verbose'?options:options.uri);
        request( options ) 
            .then(function(response){
                console.log('request', 'response', trnx, process.env.LOG_LEVEL=='verbose'?response:'');
                resolve( JSON.parse(response) );
            })
            .catch(function(err){
                console.error('request', 'error', trnx, process.env.LOG_LEVEL=='verbose'?err:'');
                reject( { code: 500, message: JSON.stringify(err.error) } );
            });
    });
};

export default { helpdeskById, incidentById, incidentByIds }
