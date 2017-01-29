<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Classes\GitHubClient;

class GitHubClientTest extends TestCase
{
	/**
	 * Test a basic API call through the GitHub client
	 *
	 * @return void
	 */
	public function testBasicApiCall()
	{
		$client = new GitHubClient();
		$response = $client->get_statistics('boromake', 'laravel5-boilerplate');

		$this->assertTrue(is_array($response));
	}
}
