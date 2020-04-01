const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/sessions', SessionController.create); 

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); 

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index); 
routes.post('/incidents', IncidentController.create); 
routes.delete('/incidents/:id', IncidentController.delete); 

module.exports = routes;


/**
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos (enviados na rota após "/:" )
 * Request Body: Corpo da requisição, utilizado par criar ou alterar recursos
 */
