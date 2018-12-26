/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict'

var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {
    if(err){
        throw err;
    }
    else{
        console.log();
        app.listen(port, function(){
        //console.log("API REST FAVORITOS funcionando en http://localhost:${port}");
        //console.log('API REST FAVORITOS funcionando en http://localhost:${port}');
        //console.log("Hello Word!");
        console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);

});
    }
});


