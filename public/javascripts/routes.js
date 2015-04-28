angular.module('routes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/pessoas', {
            templateUrl: 'views/pessoa.html',
            controller: 'PessoaController'
        })

        .when('/admin', {
        	templateUrl: 'views/admin.html'
        })

        ;




    //$locationProvider.html5Mode(true);

}]);