<?php

namespace Latchel;

use Controller;
use Post;
use User;
use Comment;

class HomeController extends Controller{
    public function index(){
        $posts = $this->getPosts('home');

        return view('template', ['posts' = $posts]);
    }

    public static function getPosts($slug){
        $posts = Post::where('slug', '=', $slug)->get();

        foreach($posts as &$post){
            $post->user = User::find($post->user_id);
        }

        foreach($posts as &$post){
            $post->comments = Comment::where('post_id', '=', $post->post_id)->get();

            foreach($post->comments as &$comment){
                $comment->user = User::find($comment->user_id);
            }
        }

        return $posts;
    }

}