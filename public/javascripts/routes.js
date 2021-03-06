angular.module('routes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/pessoas', {
            templateUrl: 'views/pessoa.html',
            controller: 'PessoaController'
        })

        .when('/estabelecimento', {
        	templateUrl: 'views/admin/estabelecimento/cadastro.html'
        })

        .when('/localidade', {
        	templateUrl: 'views/admin/estabelecimento/cadastro.html'
        })

        ;

    //$locationProvider.html5Mode(true);

}]);