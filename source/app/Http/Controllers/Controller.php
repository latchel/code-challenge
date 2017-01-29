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
		$repo = Repo::where('name', config('services.github.owner') . '/' . config('services.github.repo'))
			->firstOrFail();

		$user_stats = RepoStatsRepository::get_contributions_by_contributor($repo->id, 4);

		// calculate available capacity by contributor
		$user_current_stats = collect(RepoStatsRepository::get_contributions_by_contributor($repo->id, 0))->keyBy('id')->toArray();
		$user_capacity = [];
		foreach($user_stats as $stats)
		{
			$user_capacity[] = [
				'username' => $stats['username'],
				'avg_contributions' => $stats['avg_contributions'],
				'capacity' => array_key_exists($stats['id'], $user_current_stats) ?
								intval($stats['avg_contributions'] - $user_current_stats[$stats['id']]['total_contributions']) :
								intval($stats['avg_contributions']),
			];
		}
		$user_capacity = collect($user_capacity)->sortByDesc('capacity');

		$bar_chart_stats = [
			'username' =>  $user_capacity->pluck('username')->toArray(),
			'capacity' =>  $user_capacity->pluck('capacity')->toArray(),
		];


		// calculate contribution percentage by contributor
		$pie_chart_stats = collect($user_stats)->transform(function ($item, $key) {
			return [
				'name' => $item['username'],
				'y' => intval($item['total_contributions']),
			];
		});

		return view('engineer_capacity', compact('pie_chart_stats', 'bar_chart_stats'));
	}
}
