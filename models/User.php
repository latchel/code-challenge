<?php
<?php
//Models  live in the app\Models
//php artisan make:model Comment to generate
// use this
//namespace App\Models;

//use Illuminate\Database\Eloquent\Model;

//take off
namespace Latchel;

// take off
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
       // make public  so we may add on to it
    protected $fillable = [
        'name','email'
    ];
}
