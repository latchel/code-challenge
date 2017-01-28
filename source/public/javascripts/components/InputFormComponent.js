
angular.module('app').component('inputForm', {
	template:
		'<form>' + 
			'<div class="form-group">' +
				'<label for="description">Yo, try out your repo by looking up owner and repo name.</label>' +
				'<div>' +
					'<label for="description">Owner</label>' +
					'<input type="text" class="form-control" id="repo-form" ng-model="$ctrl.input.owner" placeholder="Github owner">' +
				'</div>' +
				'<div>' +
					'<label for="description">Repo</label>' +
					'<input type="text" class="form-control" id="name-form" ng-model="$ctrl.input.repo" placeholder="Github repo">' +
				'</div>' +
				'<button type="submit" class="btn btn-default" ng-click="$ctrl.searchRepo($ctrl.input.repo, $ctrl.input.owner)">Check out</button>' +
			'</div>' +
		'</form>',

	controller: function InputFormController($http) {
		var self = this;
		console.log('find this');

		var prevRepo = '';
		var prevOwner = '';
		
		// Holds the controller scope variables for the repo and the owner
		self.input = {
			repo: 'node',
			owner: 'nodejs'
		};

		// On search click for the repo, update the screen
		self.searchRepo = function (repo, owner) {
			// Only update if there is a change in the repo/owner
			// to avoid having to make network call
			if (prevRepo !== repo || prevOwner !== owner) {
				prevRepo = repo;
				prevOwner = owner;

				httpCall(self, repo, owner);
			}
		};

		// HTTP POST call to get the user data, then emit to
		// the user-list component for display
		function httpCall(self, repo, owner) {
			$http({
				method: 'POST',
				url: '/api/github-data',
				data: { repo: repo, owner: owner }
			}).then(function (response) {
				if (response.data.statusCode === 200) {
					console.log('success!');
					gitUserData = response.data.data;
				} else {
					console.log('fail!');
					gitUserData = '';
				}

				// Emit event to the root to it can be
				// received by UsersComponent to display
				// the data
				self.onViewChange({
					$event: {
						gitUserData: gitUserData
					}
				});
			});
		}

		// On startup, default to the default owner/repo
		self.searchRepo(self.input.repo, self.input.owner);


	},
	bindings: {
		onViewChange: '&'
	}
});