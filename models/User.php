<?php

namespace Latchel;

use Latchel\Model;

class User extends Model
{

    protected $table = 'user';

    protected $primaryKey = 'user_id';
     // why use user_id for a primary key?, instead id

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','email'
    ];
}
