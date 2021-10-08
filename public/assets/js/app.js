angular.module('CodeReviewApp', []).directive('post', [
    function () {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            template:
                '<a ng-href="/posts/{{postid}}">' +
                '<div class="post__user" ng-click="toggleCollapse()">{{username}}</div>' +
                '<div class="post" ng-class="{\'post--collapsed\': collapsed}"></div>' +
                '</a>',
            scope: {
                postid: '@',
                username: '@',
            },
            controller: [
                '$scope',
                function ($scope) {
                    $scope.collapsed = true;

                    $scope.toggleCollapse = function () {
                        $scope.collapsed = !$scope.collapsed;
                    };
                },
            ],
        };
    },
]);

// I'm make a toggleCollapse in react app with material UI.
