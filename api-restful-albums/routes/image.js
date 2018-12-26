/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict'

var express = require('express');
var ImageController = require('../controllers/image');
var api = express.Router();

var multipart =require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

api.get('/image/:id', ImageController.getImage);
api.get('/images/:album?', ImageController.getImages);
api.post('/image', ImageController.saveImage);
api.put('/image/:id', ImageController.updateImage);
api.delete('/image/:id', ImageController.deleteImage);
api.post('/upload-image/:id', multipartMiddleware, ImageController.uploadImage);
api.get('/get-image/:imageFile', ImageController.getImageFile);

module.exports = api;

