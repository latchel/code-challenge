<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTables extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		// CONTRIBUTORS
		//
		Schema::create('contributors', function (Blueprint $table) {
			$table->increments('id');
			$table->string('username')->unique();
			$table->string('avatar_url')->nullable();

			$table->timestamps();
			$table->softDeletes();
		});




		//
		// REPOS
		//
		Schema::create('repos', function (Blueprint $table) {
			$table->increments('id');
			$table->string('name')->unique(); // example: nodejs/node

			$table->timestamps();
			$table->softDeletes();
		});




		//
		// CONTRIBUTIONS
		//
		Schema::create('contributions', function (Blueprint $table) {
			$table->increments('id');

			$table->integer('contributor_id', false, true);
			$table->integer('repo_id', false, true);
			$table->integer('week', false, true);
			$table->mediumInteger('additions', false, true)->nullable();
			$table->mediumInteger('deletions', false, true)->nullable();
			$table->smallInteger('commits', false, true)->nullable();

			$table->timestamps();
			$table->softDeletes();

			$table->foreign('contributor_id')
				->references('id')->on('contributors')
				->onUpdate('cascade');

			$table->foreign('repo_id')
				->references('id')->on('repos')
				->onUpdate('cascade');

			$table->index('week');
		});
	}




	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('contributions');
		Schema::dropIfExists('repos');
		Schema::dropIfExists('contributors');
	}
}