
myApp.factory('RESTService',
    function ($http) {
        return {
            getContributors: function (data) {
                return $http.get('https://api.github.com/repos/nodejs/node/stats/contributors?' , {params: data}).then(function (res) {
                    return res;
                });
            },
            getFollowers: function (data, user) {
                return $http.get('https://api.github.com/users/'+user+'/followers' , {params: data}).then(function (res) {
                    return res;
                });
            },
            getFollowing: function (data, user) {
                return $http.get('https://api.github.com/users/'+user+'/following' , {params: data}).then(function (res) {
                    return res;
                });
            },
            post: function (data) {
                return $http.post('/auth' , {params: data}).then(function (res) {
                    return res;
                });
            }
        };
    }
);
