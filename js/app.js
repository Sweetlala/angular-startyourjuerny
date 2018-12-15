var app = angular.module('flyApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templetes/home.html',
            controller: 'HomeCtrl'
        })
        .when('/fly', {
            templateUrl: 'templetes/fly.html',
            controller: 'flyCtrl'
        })
       .when('/fly-results/:dep/:arriv/:date1/:pass', { //: is a parameter and it can be whatever we call it the key
            templateUrl: 'templetes/fly-results.html',
            controller: 'flyResultsCtrl'
        });

});