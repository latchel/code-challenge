<?php

namespace App\Classes;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


/**
 * Class RepoStatsRepository
 *
 * Class to handle data access for repository stats
 */
class RepoStatsRepository
{
	/**
	 * Get aggregated repository contribution data by user for a specified number of weeks in the past
	 *
	 * @param int $repo_id
	 * @param int $weeks The number of weeks back to return data
	 * @return array
	 */
	public static function get_contributions_by_contributor($repo_id, $weeks = 4)
	{
		$stats = DB::table('contributions')
			->join('contributors', 'contributors.id', '=', 'contributions.contributor_id')
			->select(
				'contributors.id', 'contributors.username', 'contributors.avatar_url',
				DB::raw('SUM(contributions.additions) as total_additions, ' .
						'SUM(contributions.deletions) as total_deletions, ' .
						'SUM(contributions.commits) as total_commits, ' .
						'SUM(contributions.additions) + SUM(contributions.deletions) as total_contributions, ' .
						'ROUND((SUM(contributions.additions) + SUM(contributions.deletions)) / count(1)) as avg_contributions'

				)
			)
			->where('repo_id', $repo_id)
			->where('week','>=',Carbon::now()->startOfWeek()->subWeeks($weeks)->subDay()->timestamp)
			->where('commits', '>', 0)
			->groupBy('contributor_id')
			->get();

		return json_decode(json_encode($stats), true);
	}



	/**
	* Get aggregated repository contribution data by week, for a specified number of weeks in the past
	*
	* @param int $repo_id
	* @param int $weeks The number of weeks back to return data
	* @return array
	*/
	public static function get_contributions_by_week($repo_id, $weeks = 4)
	{
		$stats = DB::table('contributions')
			->select(DB::raw(
					'week, FROM_UNIXTIME(week, \'%Y-%m-%d\') as week_as_date, ' .
					'SUM(contributions.additions) as total_additions, ' .
					'SUM(contributions.deletions) as total_deletions, ' .
					'SUM(contributions.commits) as total_commits, ' .
					'SUM(contributions.additions) + SUM(contributions.deletions) as total_contributions '

				)
			)
			->where('repo_id', $repo_id)
			->where('week','>=',Carbon::now()->startOfWeek()->subWeeks($weeks)->subDay()->timestamp)
			->where('commits', '>', 0)
			->groupBy('week')
			->get();

		return json_decode(json_encode($stats), true);
	}
}
?>