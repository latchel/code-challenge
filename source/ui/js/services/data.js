myApp.factory('UserData',
    function () {

        var userData = {};

        function setData(user) {
            userData = user;
        }

        function getHtmlUrl(user) {
            return user.author.html_url;
        }

        function getUserLogin() {

        }

        function getAuthorAvatarUrl(user) {
            return user.author.avatar_url;
        }

        return {
            setData: setData,
            getHtmlUrl: getHtmlUrl,
            getUserLogin: getUserLogin,
            getAuthorAvatarUrl: getAuthorAvatarUrl

        };
    }
);
