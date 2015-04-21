angular.module('PessoaCtrl', ['PessoaService']).controller('PessoaController', function($scope, Pessoa) {

	Pessoa.get().success(function(data){
        $scope.pessoas = data;
      }).error(function(data, status){
        console.log(data, status);
        $scope.pessoas = [];
      });


    

});