const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController');

// Home Routes
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);

//Contact Routes
route.get('/contact', contactController.initialPage);

module.exports = route;