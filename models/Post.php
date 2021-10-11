<?php

namespace Latchel;

use Latchel\Model;

class Post extends Model
{

    protected $table = 'post';

    protected $primaryKey = 'post_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'html', 'slug', 'user_id'
    ];
}