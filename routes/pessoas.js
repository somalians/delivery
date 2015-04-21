var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pessoa = require('../app/models/pessoa.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	Pessoa.find(function (err, pessoas) {
	    if (err) return next(err);
	    res.json(pessoas);
	});

});

module.exports = router;
