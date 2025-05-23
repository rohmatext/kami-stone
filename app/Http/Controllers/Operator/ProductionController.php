<?php

namespace App\Http\Controllers\Operator;

use App\Enums\ProductionTypeEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Productions\StoreProductionRequest;
use App\Http\Requests\Productions\UpdateProductionRequest;
use App\Models\Production;
use App\Services\ProductionService;
use App\Services\SourceService;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Carbon\CarbonPeriodImmutable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductionController extends Controller
{
    public function __construct(
        protected ProductionService $productionService,
        protected SourceService $sourceService
    ) {
        //        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productions = $this->productionService->getMonthlyProductionsTimeline();

        return Inertia::render('operator/production/Index', [
            'productions' => $productions,
            'types' => ProductionTypeEnum::values(),
            'sources' => $this->sourceService->getAllSources(true),
            'period' => $this->productionService->transformRequestPeriod()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductionRequest $request)
    {
        DB::transaction(function () use ($request) {
            $this->productionService->createProduction($request->validated());
            session()->flash('message', 'Data berhasil disimpan');
        });
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductionRequest $request, Production $production)
    {
        //
    }
}
