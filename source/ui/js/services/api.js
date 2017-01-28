
myApp.factory('RESTService',
    function ($http) {
        return {
            login: function (data) {
                return $http.get('/?' , {params: data}).then(function (res) {
                    return res;
                });
            },
            getStars: function (data) {
                return $http.get('https://api.github.com/repos/nodejs/node/stats/contributors?' , {params: data}).then(function (res) {
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
