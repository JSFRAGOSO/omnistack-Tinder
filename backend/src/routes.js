const express = require('express');
const DevController = require('./controllers/DevController');
const LikedDevsController = require('./controllers/LikedDevsController');
const LikeController = require('./controllers/LikeController');
const DisLikeController = require('./controllers/DisLikeController');
const routes = express.Router();

routes.get('/devs',DevController.index);
routes.get('/like',LikedDevsController.index);
routes.post('/devs',DevController.store);
routes.post('/devs/:idDev/like',LikeController.store);
routes.post('/devs/:idDev/dislike',DisLikeController.store);

module.exports = routes;