app.config(function($routeProvider, $locationProvider, $httpProvider) {

    var viewDir = 'app/views/';

    $routeProvider

    .when('/', {
        templateUrl : viewDir+'home/home-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/contact', {
        templateUrl : viewDir+'home/contact-view.html',
        controller  : 'ConCtrl'
    })

    .when('/about', {
        templateUrl : viewDir+'home/about-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/reviews', {
        templateUrl : viewDir+'home/reviews-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/support', {
        templateUrl : viewDir+'home/support-view.html',
        controller  : 'HomeCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});
