var should = require( 'should' );

describe('basic', function(){
	it('a soma de uma mais um deve retornar 2', function(){
		var soma = 1 + 1;
		soma.should.be.equal(2);
	})
});
