var mongoose = require('mongoose');

var PessoaSchema = new mongoose.Schema({
	nome: String,
	cpf: String,
	updated_at: {type: Date, default: Date.new}
})

module.exports = mongoose.model('Pessoa', PessoaSchema);