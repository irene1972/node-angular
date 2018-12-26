/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict'

var mongoose = require ('mongoose');
var app = require ('./app');
var port = process.env.PORT || 3700;

mongoose.connect('mongodb://localhost:27017/app_albums', (err, res)=>{
    if( err ){
        throw err;
    }
    else{
        console.log('Base de datos funcionando correctamente...');
        
        app.listen(port,()=>{
            console.log('Api RESTful de albums escuchado...');
        });
    }
});



