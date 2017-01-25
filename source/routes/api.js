var express = require('express');
var router = express.Router();

// Request NPM module that can help us make our API call to Github
var request = require('request');

// Async NPM module for helping us avoid callback mess
var async = require('async');

// API Cache NPM module to help create a nice little cache
// for the routes as a middleware, allow us to avoid some of the
// Github restrictions on API calls using basic authentication
var apicache = require('apicache');
var cache = apicache.middleware;

/* Get Github data from Github */
router.get('/github-data', cache('10 minutes'), function (req, res, next) {
	var baseUrl = "https://api.github.com"
	var endpointUrl = "/repos/nodejs/node/stats/contributors"

	var rawData = {};
	// Request to hit the Github endpoint for user contributors
	async.series({

		// Make call to Github endpoint
		githubCall: function (callback) {
			request({
				method: 'GET',
				uri: baseUrl + endpointUrl,
				headers: {
					'User-Agent': 'wilbertthelam'
				}
			}, function (error, response, body) {
				if (response.statusCode === 200){
					console.log('Github data retrieved');
					rawData['statusCode'] = 200;
					rawData['data'] = JSON.parse(body);
					callback(null);
				} else if (response.statusCode === 202) {
					console.log('Github creating cache right now, try again.');
					rawData['statusCode'] = 202;
					rawData['errorMessage'] = error;
					return res.json(rawData)
				} else {
					console.log('error: '+ response.statusCode)
					console.log(body)
					rawData['statusCode'] = statusCode;
					rawData['errorMessage'] = error;
					return res.json(rawData);
				}
			});
		},

		// Create list of data that we actually want:
		// Return in the following schema:
		/* User: {
				login,
				id,
				avatarUrl,
				htmlUrl,
				commits
			}
		*/
		createUsableData: function (callback) {
			console.log('retrieved data');
			var userData = [];
			var statusCode = 200;

			// For each user, we create am object that holds
			// the categories and push into an array to return
			for (var i = 0; i < rawData.data.length; i++) {
				var newUserData = {};
				var user = rawData.data[i]

				// Include number of commits by a user
				if (user.hasOwnProperty('total')) {
					newUserData['commits'] = user.total;
				} else {
					statusCode = 404;
					return res.json({
						statusCode: statusCode,
						errorMessage: 'Invalid commit property found.',
						data: []
					});
				}

				var author = user.author;

				// Check to see if each of these properties is available
				// If not, then we just want to return an error message.
				// These are the user information data.
				var propertiesList = ['login', 'id', 'avatar_url', 'html_url'];
				for (var j = 0; j < propertiesList.length; j++) {
					var property = propertiesList[j];
					if (!author.hasOwnProperty(property)) {
						statusCode = 404;
						return res.json({
							statusCode: statusCode,
							errorMessage: 'Invalid properties found: ' + property,
							data: []
						});
					}
				}

				newUserData['login'] = author.login;
				newUserData['id'] = author.id;
				newUserData['avatarUrl'] = author.avatar_url;
				newUserData['htmlUrl'] = author.html_url;

				console.log(newUserData);
				userData.push(newUserData);
			}
			console.log('end data');
			
			return res.json({
				statusCode: statusCode,
				errorMessage: '',
				data: userData
			});
		}
	});
});

module.exports = router;
