<?php

namespace Tests\Feature;

use Tests\TestCase;

class SmokeTests extends TestCase
{
	/**
	 * Make sure the 'Team Stats' page loads
	 *
	 * @return void
	 */
	public function testTeamPageLoads()
	{
		$response = $this->get('/');
		$response->assertStatus(200);
	}

	/**
	 * Make sure the 'Engineer Stats' page loads
	 *
	 * @return void
	 */
	public function testEngineerPageLoads()
	{
		$response = $this->get(route('engineer_capacity'));
		$response->assertStatus(200);
	}
}
