/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = Schema({
    title: String,
    picture: String,
    album: { type: Schema.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model( 'Image', ImageSchema );

