<?php

namespace Latchel;

use Latchel\Model;

class User extends Model
{

    protected $table = 'user';

    protected $primaryKey = 'user_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','email'
    ];
}
