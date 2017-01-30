'use strict';

myApp.controller('UsersController',function($scope, RESTService, Constants){

    $scope.filterDate = '11/28/2016';
    $scope.contributors = {};
    $scope.repo_owner = 'nodejs';
    $scope.repo = 'node';

    $scope.updateTotal = function(index, total) {
        if(!$scope.contributors.data || !$scope.contributors.data[index] || !$scope.contributors.data[index].total) return;
        $scope.contributors.data[index].total = total;
    };

    $scope.getContributors = function(){
        RESTService.getContributors({
            access_token: Constants.access_token
        },$scope.repo_owner,$scope.repo).then(function(res) {
            if(res.status == 200){
                $scope.contributors = res;
            } else if(res.status == 202){
                alert('The statistics you requested are not available try again in a moment');
            } else if(res.status == 3333) {
                $scope.contributors = res.payload;
            }
        });
    };

    $scope.getContributors();

});