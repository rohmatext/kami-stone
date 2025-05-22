<?php

use Illuminate\Support\Facades\Route;

Route::redirect('/', '/login')->name('home');

Route::get('dashboard', function () {
    return request()->user()->hasRole('admin')
        ? to_route('admin.dashboard.index')
        : to_route('operator.dashboard.index');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
