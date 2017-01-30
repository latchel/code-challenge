'use strict';

myApp.controller('CardsController',function($scope, RESTService){

    var _contributor = {};
    var _index = -1;
    var _repo_owner = 'nodejs';
    var _repo = 'node';

    $scope.init = function(index, contributor, repo_owner, repo) {
        _contributor = contributor;
        _repo_owner = repo_owner;
        _index = index;
        _repo = repo;
        $scope.authorAvatarUrl = getAuthorAvatarUrl();
        $scope.userLogin = getUserLogin();
        $scope.userData =  getWeeksData();
        getFollowers();
        getFollowing();
    };

    $scope.goToUserHome = function() {
      window.open("https://github.com/"+$scope.userLogin);
    };

    $scope.goToCommits = function() {
        window.open('https://github.com/'+_repo_owner+'/'+_repo+'/commits?author='+$scope.userLogin);
    };

    function getHtmlUrl(author) {
        return author && author.html_url;
    }

    function getUserLogin() {
        return _contributor.author && _contributor.author.login;
    }

    function getAuthorAvatarUrl() {
        return _contributor.author && _contributor.author.avatar_url;
    }

    function getFollowers() {
        RESTService.getFollowers({
            access_token: 'c6619bf042e53c9796a04fd3a486305ed51c79ad'
        },getUserLogin()).then(function(res) {
            $scope.followers = res.data.length;
        });
    }

    function getFollowing() {
        RESTService.getFollowing({
            access_token: 'c6619bf042e53c9796a04fd3a486305ed51c79ad'
        }, getUserLogin()).then(function(res) {
            $scope.following = res.data.length;
        });
    }

    function getlastDate() {
        return new Date($scope.filterDate).getTime();
    }

    function getWeeksData() {
        var _weeks = _contributor.weeks;
        var lastDate = getlastDate();
        var additions = 0;
        var deletions = 0;
        var commits = 0;
        var first_week = null;
        for(var ta = 0; ta < _weeks.length; ta++) {
            var weekms = _weeks[ta].w * 1000;
            if(weekms > lastDate) {
                additions += _weeks[ta].a;
                deletions += _weeks[ta].d;
                commits += _weeks[ta].c;
                if(weekms < first_week || !first_week) {
                    first_week = weekms;
                }
            }
        }
        $scope.$parent.updateTotal(_index, commits);
        return { first_week: first_week, additions: additions, deletions: deletions, commits: commits, last_week: (_weeks[_weeks.length - 1].w * 1000)};
    }

    $scope.$watch(
        function() { return $scope.filterDate; },
        function(newValue, oldValue) {
            if(new Date(newValue).getTime() == new Date(oldValue).getTime()) return;
            try {
                var lastDate = getlastDate();
            } catch(e) {}

            if (!lastDate) {
                $scope.error = true;
            } else {
                $scope.userData =  getWeeksData();
            }
        }
    );

});