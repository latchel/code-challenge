<?php

// should use 
// namespace App\Http\Controllers; 
// for extends

// take this off
namespace Latchel;

//try using App\ in this like
//use  App\Http\Controllers\Controller;

// take Controller out
use Controller;

//try using Models\ in this like
// use models\Post;
// so the app can find it
use Post;
//try using Models\ in this like
// use models\User;
// so the app can find it
use User;
//try using Models\ in this like
// use models\Comment;
// so the app can find it
use Comment;

// use view facade here
// use Illuminate\Support\Facades\View;


class HomeController extends Controller
{

    // I like  public function __invoke() for Single Action Controllers instead of index
    public function index()
    {
        $posts = $this->getPosts('home');


        //update this to return View::make('template', ['posts' => 'posts']);
        return view('template', ['posts' = $posts]);
    }

    public static function getPosts($slug)
    {
        //should be DB::table('Post')->where('slug',  $slug)->get(); = only use on joins
        $posts = Post::where('slug', '=', $slug)->get();

        // the & may change the last value in the array
        foreach ($posts as &$post) {
            //should be DB::table('User')->find($post->user_id);
            $post->user = User::find($post->user_id);
        }
        // the & may change the last value in the array
        foreach ($posts as &$post) {
            //should be DB::table('Comment')->where('post_id', $post->post_id)->get();; = only use on joins
            $post->comments = Comment::where('post_id', '=', $post->post_id)->get();
            // the & may change the last value in the array
            foreach ($post->comments as &$comment) {
                //should be DB::table('User')->find($comment->user_id), 
                $comment->user = User::find($comment->user_id);
            }
        }

        return $posts;
    }
}
