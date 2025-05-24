<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ProductionTypeEnum;
use App\Http\Controllers\Controller;
use App\Services\ProductionService;
use App\Services\ShipmentService;
use App\Services\SourceService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductionController extends Controller
{
    public function __construct(
        protected ProductionService $productionService,
        protected SourceService $sourceService,
        protected ShipmentService $shipmentService
    ) {
        //        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productions = $this->productionService->getMonthlyProductionsTimeline();

        return Inertia::render('admin/production/Index', [
            'productions' => $productions,
            'types' => ProductionTypeEnum::values(),
            'sources' => $this->sourceService->getAllSources(true),
            'period' => $this->productionService->transformRequestPeriod(),
            'total' => [
                'productions' => $this->productionService->getTotalProductions(),
                'shipments' => $this->shipmentService->getTotalShipments(),
            ],
        ]);
    }
}
