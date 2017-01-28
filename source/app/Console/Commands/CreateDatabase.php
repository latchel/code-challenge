<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CreateDatabase extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'db:create';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Create the database';

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
		// create our application's database
		$create_db_statement = 'CREATE DATABASE IF NOT EXISTS ' . env('DB_DATABASE');

		\DB::connection('mysql_initialize')->statement($create_db_statement);

		$this->line('Database \'' . env('DB_DATABASE') . '\' created!');
	}
}
