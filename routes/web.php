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

Route::get('/', function () {
    return view('welcome');
});
Route::get('basic1', function() {
	return 'Hello World';
});
Route::post('basic2', function() {
	return 'basic2.';
});
Route::match(['get','post'], 'basic3', function() {
	return 'Match';
});

Route::any('multy', function() {
	return 'Multy2';
});
Route::get('user/{id}', function($id) {
	return 'User-' . $id;
});

Route::get('user/{id}/{name?}', function($id, $name = "Jason") {
    return 'User-Id-' . $id;
}) -> where('name', '[A-Za-z]');

