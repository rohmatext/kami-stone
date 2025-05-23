<?php

use App\Http\Controllers\Operator\DashboardController;
use App\Http\Controllers\Operator\ProductionController;
use App\Http\Controllers\Operator\ShipmentController;
use App\Http\Controllers\Operator\SourceController;
use Illuminate\Support\Facades\Route;

Route::name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
});

Route::name('sources.')->prefix('sources')->group(function () {
    Route::get('/', [SourceController::class, 'index'])->name('index');
    Route::post('/', [SourceController::class, 'store'])->name('store');
    Route::patch('{source}', [SourceController::class, 'update'])->name('update');
    Route::patch('{source}/inactivate', [SourceController::class, 'inactivate'])->name('inactivate');
});

Route::name('productions.')->prefix('productions')->group(function () {
    Route::get('/', [ProductionController::class, 'index'])->name('index');
    Route::post('/', [ProductionController::class, 'store'])->name('store');
    Route::patch('{production}', [ProductionController::class, 'update'])->name('update');
});

Route::name('shipments.')->prefix('shipments')->group(function () {
    Route::get('/', [ShipmentController::class, 'index'])->name('index');
    Route::post('/', [ShipmentController::class, 'store'])->name('store');
});
