<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contributor extends Model
{
	use SoftDeletes;

	protected $table = 'contributors';

	protected $fillable = [
		'username',
		'avatar_url',
	];
}
