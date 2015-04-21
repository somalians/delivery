angular.module('routes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/pessoas', {
            templateUrl: 'views/pessoa.html',
            controller: 'PessoaController'
        });


    //$locationProvider.html5Mode(true);

}]);