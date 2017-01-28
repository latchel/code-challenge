<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
	/**
	 * Show Sprint Velocity (homepage)
	 *
	 * GET /
	 */
	public function showSprintVelocity()
	{
		return view('sprint_velocity');
	}


	/**
	 * Show Engineer Capacity
	 *
	 * GET /engineer-capacity/
	 */
	public function showEngineerCapacity()
	{
		return view('engineer_capacity');
	}
}
