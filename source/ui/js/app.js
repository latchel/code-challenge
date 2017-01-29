'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp',
    [
        'ngRoute',
        'myApp.filters',
        'myApp.directives',
        'ui',
        'ngSanitize',
        '720kb.datepicker'
    ]);


var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);
var constants = angular.module('myApp.config', []);

// bootstrap angular
myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when('/', {
        templateUrl:'partials/users.html'
    });

    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'partials/users.html'
    });

}]);
