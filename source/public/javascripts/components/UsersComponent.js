var app = angular.module('app',[]);

app.component('userList', {
	template:
		'<div id="users-list">' +
			'<div  class="panel panel-primary" ng-repeat="user in $ctrl.users | orderBy : \'-commits\' : reverse">' +
				'<div class="panel-header">' +
						'<h3 class="panel-title">{{ user.commits }}</h3>' +
				'</div>' + 
				'<div class="panel-body">' +
					'<div class="row">' +
						'<div class="col-md-4">' +
							'<img ng-src="{{ user.avatarUrl }}" />' +
						'</div>' +
						'<div class="col-md-4">' +
							'<p>{{ user.login }}</p>' +
						'</div>' +
						'<p>{{ user.htmlUrl }}</p>' +
						'<p>{{ user.id }}</p>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>',
	controller: function UserController($http) {
		var self = this;

		$http.get('/api/github-data').then(function (response) {
			console.log(JSON.stringify(response));
			if (response.data.statusCode === 200) {
				console.log('success!');
				self.users = response.data.data;
			} else {
				console.log('fail!');
				self.users = '';
			}
		});
	}
});