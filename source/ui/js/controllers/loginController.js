'use strict';


myApp.controller('LoginController',function($scope, $location, $http, $timeout, AuthService){

    // *****
    // Initialize authentication
    // *****
    $scope.authService = AuthService;

    // text input for login/password (only)
    $scope.loginInput = 'fmbuthia';
    $scope.passwordInput = 'c6619bf042e53c9796a04fd3a486305ed51c79ad';

    $scope.logIn = function () {

        AuthService.login({
            username: $scope.loginInput,
            password: $scope.passwordInput
        }).then(function(res) {
            console.log();
        });
    };

});