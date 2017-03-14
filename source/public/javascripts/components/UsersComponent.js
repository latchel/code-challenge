var app = angular.module('app',[]);

angular.module('app').component('userList', {
	template:
		'<div id="users-list">' +
			'<div ' +
				'class="user-row" ng-repeat="user in $ctrl.gitUserData | orderBy : \'-commits\' : reverse" ' +
				'ng-class="{\'first\': $first}" >' + 
				'<div class="">' +
					'<div class="row">' +
						'<div class="col-md-3" style="text-align: right;">' +
							'<div>' +
								'<span id="commits">{{ user.commits }}</span>' +
							'</div>' +
							'<div>' +
								'<span id="commits-label">commits</span>' +
							'</div>' +

						'</div>' +
					
						'<div class="col-md-9">' +
							'<div class="singlerow">' +
								'<div>' +
									'<a href="{{ user.htmlUrl }}"><img ng-src="{{ user.avatarUrl }}" /></a>' +
								'</div>' +
								'<div>' + 
									'<p class="name">{{ user.login }}</p>' +
									'<p>' +
										'<a href="{{ user.htmlUrl }}">{{ user.htmlUrl }}</a>' +
									'</p>' +
								'</div>' +
							'</div>' +
						'</div>' +
						
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>',

	controller: function UserController($http) {
		var self = this;
		console.log('find this');
		console.log();
		
	},
	bindings: {
		// Binding that brings in the gitUserData when we
		// update the repo/owner name we search for from Git
		gitUserData: '<'
	}
});