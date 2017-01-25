var app = angular.module('app',[]);

app.component('userList', {
	template:
		'<div id="users-list">' +
			'<div ' +
				'class="user-row" ng-repeat="user in $ctrl.users | orderBy : \'-commits\' : reverse" ' +
				'ng-class="{\'first\': $first}" >' + 
				'<div class="">' +
					'<div class="row">' +
						'<div class="col-md-2" style="text-align: right;">' +
							'<span id="commits">{{ user.commits }}</span>' +
						'</div>' +
					
						'<div class="col-md-1">' +
							'<img ng-src="{{ user.avatarUrl }}" />' +
						'</div>' +
						'<div class="col-md-8">' +
							'<p class="name">{{ user.login }}</p>' +
							'<p>{{ user.htmlUrl }}</p>' +
						'</div>' +
						
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>',
	controller: function UserController($http) {
		var self = this;

		$http.get('/api/github-data').then(function (response) {
			// console.log(JSON.stringify(response));
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