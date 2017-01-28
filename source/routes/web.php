<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['as' => 'sprint_velocity', 'uses' => 'Controller@showSprintVelocity']);
Route::get('/engineer-capacity/', ['as' => 'engineer_capacity', 'uses' => 'Controller@showEngineerCapacity']);
