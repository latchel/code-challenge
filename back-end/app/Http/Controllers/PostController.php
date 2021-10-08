<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $posts = Post::all();
            return response()->json(['posts' => $posts], 200);
        } catch (\Throwable $th) {
            throw $th;
        }
     }
}
