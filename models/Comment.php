<?php

namespace Latchel;

use Latchel\Model;

class Comment extends Model
{

    protected $table = 'comment';

    protected $primaryKey = 'comment_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id', 'user_id', 'comment'
    ];
}
