angular.module('PessoaService', []).factory('Pessoa', ['$http', function($http) {

    return {
        // call to get all pessoas
        get : function() {
            return $http.get('/api/pessoas');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new pessoa
        create : function(pessoaData) {
            return $http.post('/api/pessoas', pessoaData);
        },

        // call to DELETE a pessoa
        delete : function(id) {
            return $http.delete('/api/pessoas/' + id);
        },

        update: function(id, data){
            return $http.put('/api/pessoas/' + id, data);  
        }
    }       

}]);
