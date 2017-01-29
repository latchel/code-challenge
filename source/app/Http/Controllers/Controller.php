<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use App\Models\Repo;
use App\Classes\RepoStatsRepository;

class Controller extends BaseController
{
	/**
	 * Show Sprint Velocity (homepage)
	 *
	 * GET /
	 */
	public function showSprintVelocity()
	{
		$repo = Repo::where('name', config('services.github.owner') . '/' . config('services.github.repo'))
				->firstOrFail();

		// calculate historic sprint velocity
		$weekly_stats = RepoStatsRepository::get_contributions_by_week($repo->id);
		$velocity_chart_stats = [
			'dates' => array_pluck($weekly_stats, 'week_as_date'),
			'contributions' => array_pluck($weekly_stats, 'total_contributions'),
		];

		// calculate available capacity for the current week
		$current_week_stats = array_pop($weekly_stats);
		$avg_weekly_contribution = intval(collect($weekly_stats)->avg('total_contributions'));
		$gauge_stats = [
			'avg_velocity' => $avg_weekly_contribution,
			'capacity' => $current_week_stats['total_contributions'],
		];

		return view('sprint_velocity', compact('velocity_chart_stats', 'gauge_stats'));
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
