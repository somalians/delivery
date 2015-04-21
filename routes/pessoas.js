var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pessoa = require('../app/models/pessoa.js')

router.get('/', function(req, res, next) {
	
	Pessoa.find(function (err, pessoas) {
	    if (err) return next(err);
	    res.json(pessoas);
	});

});

router.get('/:id', function(req, res, next){

	Pessoa.findById(req.params.id, function(err, pessoa){
		if(err) return next(err);
		res.json(pessoa);
	})

});

router.post('/', function(req, res, next){
		
	Pessoa.create(req.body, function(err, pessoa){
		if(err)	return next(err);

		res.json(pessoa);
	});
})

router.put('/:id', function(req, res, next){

	Pessoa.findByIdAndUpdate(req.params.id, req.body, function(err, pessoa){
		if(err) return next(err);
		res.json(pessoa);
	});

});


router.delete('/:id', function(req, res, next){

	Pessoa.findByIdAndRemove(req.params.id, req.body, function(err, pessoa){
		if(err) return next(err);
		res.json(pessoa);
	});

});

module.exports = router;