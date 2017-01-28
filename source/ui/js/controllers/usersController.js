'use strict';


myApp.controller('UsersController',function($scope, RESTService){

    $scope.contributors = {};

    function getStars(){
        RESTService.getStars({
            access_token: 'c6619bf042e53c9796a04fd3a486305ed51c79ad'
        }).then(function(res) {
            $scope.contributors = res;
            console.log($scope.contributors);
        });
    }

    getStars();

});