/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict'

var express = require('express');
var AlbumController = require('../controllers/album');
var api = express.Router();

api.get('/album/:id', AlbumController.getAlbum);
api.get('/albums', AlbumController.getAlbums);
api.post('/album', AlbumController.saveAlbum);
api.put('/album/:id', AlbumController.updateAlbum);
api.delete('/album/:id', AlbumController.deleteAlbum);

module.exports = api;

