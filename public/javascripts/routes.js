angular.module('routes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/pessoas', {
            templateUrl: 'views/pessoa.html',
            controller: 'PessoaController'
        })

        .when('/cadastrar-estabelecimento', {
        	templateUrl: 'views/estabelecimento/cadastro.html'
        })

        ;

    //$locationProvider.html5Mode(true);

}]);