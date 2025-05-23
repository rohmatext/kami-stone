<?php

namespace App\Http\Controllers\Operator;

use App\Enums\ProductionTypeEnum;
use App\Http\Controllers\Controller;
use App\Services\ProductionService;
use App\Services\ShipmentService;
use App\Services\SourceService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct(
        protected ProductionService $productionService,
        protected ShipmentService $shipmentService,
        protected SourceService $sourceService
    ) {
        //
    }

    public function index()
    {
        return Inertia::render('operator/dashboard/Index', [
            'productions' => $this->productionService->getTodayProductions(),
            'shipments' => $this->shipmentService->getLastShipments(),
            'sources' => $this->sourceService->getAllSources(true),
            'types' => ProductionTypeEnum::values(),
            'total' => [
                'productions' => $this->productionService->getTotalProductions(),
                'shipments' => $this->shipmentService->getTotalShipments(),
            ],
        ]);
    }
}
