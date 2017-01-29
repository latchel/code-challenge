'use strict';

myApp.controller('CardsController',function($scope){

    $scope.init = function(contributor) {
        $scope.authorAvatarUrl = getAuthorAvatarUrl(contributor.author);
        $scope.userLogin = getUserLogin(contributor.author);
        $scope.userData =  getWeeksData(contributor.weeks);
    };

    function getHtmlUrl(author) {
        return author.html_url;
    }

    function getUserLogin(author) {
        return author.login;
    }

    function getAuthorAvatarUrl(author) {
        return author.avatar_url;
    }

    function getlastDate() {
        return new Date("11/21/2015").getTime();
    }

    function getWeeksData(weeks) {
        var lastDate = getlastDate();
        var additions = 0;
        var deletions = 0;
        var commits = 0;
        var first_week = null;
        for(var ta = 0; ta < weeks.length; ta++) {
            var weekms = weeks[ta].w * 1000;
            if(weekms > lastDate) {
                additions += weeks[ta].a;
                deletions += weeks[ta].d;
                commits += weeks[ta].c;
                if(weekms < first_week || !first_week) {
                    first_week = weekms;
                }
            }
        }
        return { first_week: first_week, additions: additions, deletions: deletions, commits: commits, last_week: (weeks[weeks.length - 1].w * 1000)};
    }

});