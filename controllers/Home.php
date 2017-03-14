<?php

namespace Latchel;

use Controller;

class HomeController extends Controller{
    public function index(){
        return view('template');
    }
}