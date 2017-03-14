<?php

namespace App\Classes;

use GuzzleHttp\Client;

/**
 * Class GitHubClient
 *
 * A simple GitHub API client
 */
class GitHubClient
{
	private $base_uri;
	private $http_client;


	/**
	 * GitHubClient constructor
	 *
	 * @param string|null $base_uri Base uri to the Github API
	 */
	public function __construct($base_uri = null)
	{
		$this->base_uri = !empty($base_uri) ? $base_uri : config('services.github.base_uri');
		$this->http_client = new Client(['base_uri' => $this->base_uri]);
	}

	/**
	 * Get contributors list with additions, deletions, and commit counts
	 *
	 * @see https://developer.github.com/v3/repos/statistics/#get-contributors-list-with-additions-deletions-and-commit-counts
	 *
	 * @param string $owner The repo owner
	 * @param string $repo  The repo name
	 *
	 * @return array
	 */
	public function get_statistics($owner, $repo)
	{
		$response = $this->http_client->request('GET', "repos/{$owner}/{$repo}/stats/contributors");

		return json_decode($response->getBody()->getContents(), true);
	}
}
?>