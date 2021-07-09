const github = require('./github.js');
const config = require('./config.json');

class App {
	owner = 'nodejs';
	repo = 'node';
	result = null;

	constructor(owner, repo) {
		this.owner = owner;
		this.repo = repo;
	};

	async initialize() {
		this.result = await github.getContributorsStats(this.owner, this.repo);
	};

	mostContributor() {
		try {
			let data = this.result.data;
			data.sort(function(a, b) {
				return b.total - a.total;
			});
			return data[0];
		} catch(error) {
			return error;
		}
	}

	lessContributor() {
		try {
			let data = this.result.data;
			data.sort(function(a, b) {
				return a.total + b.total;
			});
			return data[0];
		} catch(error) {
			return error;
		}
	}
}

async function getMostContributor() {
	const result = new App(config.github.owner, config.github.repo);
	await result.initialize();
	return result.mostContributor();
}

module.exports = {
	getMostContributor
};

// getMostContributor().then(console.log);