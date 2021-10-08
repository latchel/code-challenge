<?php

namespace Latchel;

use Latchel\Model;

class Comment extends Model
{

    protected $table = 'comment';

    protected $primaryKey = 'comment_id';
    // why use commet_id for a primary key? instead id

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id', 'user_id', 'comment'
    ];
}
