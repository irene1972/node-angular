/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//carga de rutas
var album_routes = require('./routes/album');
var image_routes = require('./routes/image');

app.use(bodyParser());
//deprecated:
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configurar cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    
    next();
});

//rutas base
app.use('/api', album_routes);
app.use('/api', image_routes);

module.exports = app;