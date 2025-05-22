<?php

namespace App\Http\Controllers\Operator;

use App\Http\Controllers\Controller;
use App\Http\Requests\Productions\StoreProductionRequest;
use App\Http\Requests\Productions\UpdateProductionRequest;
use App\Models\Production;
use App\Services\ProductionService;
use Carbon\Carbon;
use Carbon\CarbonPeriodImmutable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductionController extends Controller
{
    public function __construct(
        protected ProductionService $productionService
    ) {
        //        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->productionService->getAllProductions();
        return Inertia::render('operator/production/Index', [
            'productions' => $this->productionService->getAllProductions(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductionRequest $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductionRequest $request, Production $production)
    {
        //
    }
}
