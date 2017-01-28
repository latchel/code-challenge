'use strict';

myApp.controller('UsersController',function($scope, RESTService){

    $scope.contributors = {};

    $scope.getHtmlUrl = function(author) {
        return author.html_url;
    };

    $scope.getUserLogin = function(author) {
        return author.login;
    };

    $scope.getAuthorAvatarUrl = function(author) {
        return author.avatar_url;
    };

    $scope.getTotalAdditions = function(weeks) {
        var additions = 0;
        for(var ta = 0; ta < weeks.length; ta++) {
            additions += weeks[ta].a;
        }
        return additions;
    };

    $scope.getTotalDeletions = function(weeks) {
        var deletions = 0;
        for(var td = 0; td < weeks.length; td++) {
            deletions += weeks[td].d;
        }
        return deletions;
    };

    $scope.getTotalCommits = function(weeks) {
        var commits = 0;
        for(var tc = 0; tc < weeks.length; tc++) {
            commits += weeks[tc].c;
        }
        return commits;
    };

    $scope.getStartDate = function() {
        return
    };

    $scope.getEndDate = function() {
        return
    };

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