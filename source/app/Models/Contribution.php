<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contribution extends Model
{
	use SoftDeletes;

	protected $table = 'contributions';

	protected $fillable = [
		'contributor_id',
		'repo_id',
		'week',
		'additions',
		'deletions',
		'commits',
	];

	protected $casts = [
		'contributor_id' => 'integer',
		'repo_id' => 'integer',
		'additions' => 'integer',
		'deletions' => 'integer',
		'commits' => 'integer',
	];
}
