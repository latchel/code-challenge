'use strict';

myApp.controller('UsersController',function($scope, RESTService){

    $scope.filterDate = '11/28/2016';

    $scope.contributors = {};

    function getContributors(){
        RESTService.getContributors({
            access_token: 'c6619bf042e53c9796a04fd3a486305ed51c79ad'
        }).then(function(res) {
            $scope.contributors = res;
        });
    }

    getContributors();

});