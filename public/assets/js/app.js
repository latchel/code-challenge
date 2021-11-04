angular
  .module("CodeReviewApp", [])
  //.controller code here
  .controller("Controller", [
    "$scope",
    function ($scope) {
      $scope.customer = {
        name: "Naomi",
        address: "1600 Amphitheatre",
      };
    },
  ])
  // no [] need for function
  .directive("post", [
    function () {
      return {
        // try restrict: 'C', for class declaration style
        restrict: "A",
        replace: true,
        transclude: true,
        template:
          '<a ng-href="/posts/{{postid}}">' +
          '<div class="post__user" ng-click="toggleCollapse()">{{username}}</div>' +
          '<div class="post" ng-class="{\'post--collapsed\': collapsed}"></div>' +
          "</a>",
        scope: {
          postid: "@",
          username: "@",
        },
        controller: [
          "$scope",
          function ($scope) {
            $scope.collapsed = true;

            //function must return a value
            $scope.toggleCollapse = function () {
              $scope.collapsed = !$scope.collapsed;
            };
          },
        ],
      };
    },
  ]);
