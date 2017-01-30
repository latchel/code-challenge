'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp',
    [
        'ngRoute',
        'myApp.directives',
        'ui',
        'ngSanitize',
        '720kb.datepicker',
        'angular-loading-bar',
        'LocalStorageModule'
    ]);

var directives = angular.module('myApp.directives', []);

myApp.factory('myAppInterceptor', function(){
    return {
        request: function(config) {
            return config;
        },

        requestError: function(config) {
            return config;
        },

        response: function(res) {
            return res;
        },

        responseError: function(res) {
            alert("Please connect to the internet!");
            return res;
        }
    }
});

// bootstrap angular
myApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('myAppInterceptor');

    $routeProvider.when('/', {
        templateUrl:'partials/users.html'
    });

    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'partials/users.html'
    });

}]);

