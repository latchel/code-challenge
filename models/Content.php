<?php

namespace Latchel;

use Latchel\Model;

class Content extends Model
{

    protected $table = 'content';

    protected $primaryKey = 'content_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'html', 'slug'
    ];
}
