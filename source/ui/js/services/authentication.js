'use strict';

// simple auth service that can use a lot of work... 
myApp.factory('AuthService',
    function (RESTService) {
        var currentUser = null;
        var authorized = false;
        return {
            login:function (data) {
                return RESTService.login(data);
            },
            logout:function () {
                currentUser = null;
                authorized = false;
            },
            isLoggedIn:function () {
                return authorized;
            },
            currentUser:function () {
                return currentUser;
            }
        };
    }
);