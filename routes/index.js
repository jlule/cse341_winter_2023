// Here is where we list all of our routes.
//  Right now we only have one route
const routes = require('express').Router();
 
const myController = require( '../controllers');
routes.get('/', myController.awesomeFunction);

module.exports = routes;