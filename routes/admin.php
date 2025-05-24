<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProductionController;
use App\Http\Controllers\Admin\ShipmentController;
use App\Http\Controllers\Admin\SourceController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
});

Route::prefix('users')->name('users.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('index');
    Route::post('/', [UserController::class, 'store'])->name('store');
    Route::post('{user}/reset-password', [UserController::class, 'resetPassword'])->name('reset-password');
});

Route::name('sources.')->prefix('sources')->group(function () {
    Route::get('/', [SourceController::class, 'index'])->name('index');
    Route::post('/', [SourceController::class, 'store'])->name('store');
    Route::patch('{source}', [SourceController::class, 'update'])->name('update');
    Route::patch('{source}/inactivate', [SourceController::class, 'inactivate'])->name('inactivate');
});

Route::name('productions.')->prefix('productions')->group(function () {
    Route::get('/', [ProductionController::class, 'index'])->name('index');
});

Route::name('shipments.')->prefix('shipments')->group(function () {
    Route::get('/', [ShipmentController::class, 'index'])->name('index');
});
