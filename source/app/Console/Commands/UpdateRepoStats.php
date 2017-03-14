<?php

namespace App\Console\Commands;

use App\Models\Contribution;
use App\Models\Contributor;
use App\Models\Repo;
use Illuminate\Console\Command;
use App\Classes\GitHubClient;

class UpdateRepoStats extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'latchel:update-repo-stats';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Pull latest stats from repo and persist locally';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function handle()
	{
		$this->line('Starting...');

		// pull stats from repo's api
		$repo_client = new GitHubClient();
		$repo_statistics = $repo_client->get_statistics(config('services.github.owner'), config('services.github.repo'));

		$repo = Repo::firstOrNew(['name' => config('services.github.owner') . '/' . config('services.github.repo')]);
		$repo->save();

		$i = 0;
		foreach($repo_statistics as $contributor => $stats)
		{
			// output percentage complete
			$this->line(intval($i / count($repo_statistics) * 100) . '%...');

			// save or update a contributor
			$contributor = Contributor::firstOrNew(['username' => array_get($stats, 'author.login')]);
			$contributor->avatar_url = array_get($stats, 'author.avatar_url', null);
			$contributor->save();

			// for each contributor, save their weekly contributions to the repo
			if(array_key_exists('weeks', $stats))
			{
				foreach($stats['weeks'] as $week)
				{
					$contribution = Contribution::firstOrNew([
						'contributor_id' => $contributor->id,
						'repo_id' => $repo->id,
						'week' => array_get($week, 'w'),
					]);

					$contribution->additions = array_get($week, 'a', 0);
					$contribution->deletions = array_get($week, 'd', 0);
					$contribution->commits = array_get($week, 'c', 0);

					$contribution->save();
				}
			}

			$i++;
		}

		$this->line('Update complete!');
	}
}
