'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp',
    [
        'ngRoute',
        'myApp.directives',
        'ui',
        'ngSanitize',
        '720kb.datepicker',
        'angular-loading-bar'
    ]);

var directives = angular.module('myApp.directives', []);

// bootstrap angular
myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl:'partials/users.html'
    });

    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'partials/users.html'
    });

}]);
