var app = angular.module('app',[]);

app.controller('MainController', ['$scope', function($scope) {

	$scope.userData = [
		{
			name: 'wilbertthelam',
			commits: 24
		}, {
			name: 'MADLinsen',
			commits: 13
		}, {
			name: 'davydlee',
			commits: 112
		}, {
			name: 'TheStupendousYan',
			commits: 3
		}
	];

}]);