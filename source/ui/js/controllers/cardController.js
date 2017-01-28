'use strict';

myApp.controller('CardsController',function($scope){

    $scope.init = function(contributor) {
        $scope.authorAvatarUrl = getAuthorAvatarUrl(contributor.author);
        $scope.userLogin = getUserLogin(contributor.author);
        $scope.
    };

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

});