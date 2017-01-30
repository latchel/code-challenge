'use strict';

myApp.factory('RESTService',
    function ($http, Constants) {
        return {
            getContributors: function (data, repo_owner, repo) {
                return $http.get(Constants.apiUrl+'/repos/'+repo_owner+'/'+repo+'/stats/contributors?' , {params: data}).then(function (res) {
                    return res;
                });
            },
            getFollowers: function (data, user) {
                return $http.get(Constants.apiUrl+'/users/'+user+'/followers' , {params: data}).then(function (res) {
                    return res;
                });
            },
            getFollowing: function (data, user) {
                return $http.get(Constants.apiUrl+'/users/'+user+'/following' , {params: data}).then(function (res) {
                    return res;
                });
            }
        };
    }
);
