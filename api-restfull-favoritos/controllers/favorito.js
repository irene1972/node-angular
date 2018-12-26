/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict'

var Favorito = require('../models/favorito');

function prueba(req, res){
    var nombre = req.params.nombre ? req.params.nombre : "???";
    res.status(200).send(   {
                            data: [2, 3, 4],
                            message: "Hola mundo con NodeJS y Express - " + nombre
                            });
}

function getFavorito(req, res){
    var id = req.params.id;
    
    Favorito.findById(id, function (err, favorito){
        if(err){
            res.status(500).send({message: 'Error al recuperar el marcador'});
        }
        else{
            if(!favorito){
                res.status(400).send({message: 'No hay marcador'});
            }
            else{
                res.status(200).send({favorito});
            }
        }
    });
    //res.status(200).send({data: id});
}

function getFavoritos(req, res){
    Favorito.find({}).sort('-_id').exec((err, favoritos) => {
        if(err){
            res.status(500).send({message: 'Error al recuperar los marcadores'});
        }
        else{
            if(!favoritos){
                res.status(400).send({message: 'No hay marcadores'});
            }
            else{
                res.status(200).send({favoritos});
            }
        }
    });
}

function saveFavorito(req, res){
    //res.status(200).send({favorito: params});
    
    var favorito = new Favorito();
    var params = req.body;
    
    favorito.titulo = params.titulo;
    favorito.descripcion = params.descripcion;
    favorito.url = params.url;
    
    favorito.save((err, favoritoStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el marcador'});
        }
        else{
            res.status(200).send({favorito: favoritoStored});
        }
    });
}

function updateFavorito(req, res){
    var id = req.params.id;
    var update = req.body;
    
    //res.status(200).send({update:true, favorito: params});
    //console.log(id);
    //console.log(update);
    
    Favorito.findByIdAndUpdate(id, update, (err, favoritoUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al actualizar el marcador'});
        }
        else{
            res.status(200).send({favoritoUpdated});
        }
    });
}

function deleteFavorito(req, res){
    var id = req.params.id;
    
    //res.status(200).send({delete:true, data: id});
    
    Favorito.findById(id, function (err, favorito){
        if(err){
            res.status(500).send({message: 'Error al recuperar el marcador'});
        }
        else{
            if(!favorito){
                res.status(400).send({message: 'No hay marcador'});
            }
            else{
                favorito.remove(err => {
                    if(err){
                        res.status(500).send({message: 'Error al eliminar'});
                    }
                    else{
                        res.status(200).send({message: 'El marcador se ha eliminado correctamente'});
                    }
                });
            }
        }
    });
    
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}