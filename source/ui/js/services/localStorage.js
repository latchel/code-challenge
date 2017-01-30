'use strict';

// simple auth service that can use a lot of work...
myApp.factory('StorageService',
    function (localStorageService) {
        return {
            submit: function(key, val) {
                return localStorageService.set(key, val);
            },
            getItem:function (key) {
                return localStorageService.get(key);
            }
        };
    }
);