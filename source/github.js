const config = require('./config.json');
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: config.github.token });

async function createRepo(name){
	const result = await octokit.repos.create({name});
	return result;
}

async function deleteRepo(owner, repo){
	const result = await octokit.repos.delete({owner, repo});
	return result;
}

async function getRepoCommits(owner, repo){
	const result = await octokit.repos.getCommits({owner, repo});
	return result;
}

async function getFileContent(owner, repo, path){
	const result = await octokit.repos.getContent({owner, repo, path}); // ref optional parameter to pass branch name
	return result;
}

async function getContributorsStats(owner, repo){
	const result = await octokit.repos.getContributorsStats({owner, repo});
	return result;
}

async function getPRs(owner, repo){
	let state = 'all';
	const result = await octokit.pullRequests.getAll({owner, repo, state});
	// console.log(result);
	return result;
}

async function getOpenPRs(owner, repo){
	const result = await octokit.pullRequests.getAll({owner, repo});
	// console.log(result);
	return result;
}

async function getPRDetails(owner, repo, number){
	const result = await octokit.pullRequests.get({owner, repo, number});
	// console.log(result);
	return result;
}

async function  getForUser(username){
	const result = await octokit.users.getForUser({username})
	return result;
}

async function  getPullRequests(owner, repo){
	const state = 'open';
	const result = await octokit.pullRequests.getAll({owner, repo, state});
	return result;
}

async function  getCommitStatuses(owner,repo,ref){
	const result = await octokit.repos.getStatuses({owner, repo, ref});
	return result;
}

module.exports = {
	createRepo: createRepo,
	getRepoCommits: getRepoCommits,
	getFileContent: getFileContent,
	getContributorsStats: getContributorsStats,
	deleteRepo: deleteRepo,
	getForUser: getForUser,
	getPullRequests: getPullRequests,
	getCommitStatuses:getCommitStatuses,
	getPRs: getPRs,
	getOpenPRs: getOpenPRs,
	getPRDetails: getPRDetails,
};
