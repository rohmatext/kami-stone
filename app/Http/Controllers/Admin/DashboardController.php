<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ProductionService;
use App\Services\ShipmentService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct(
        protected ProductionService $productionService,
        protected ShipmentService $shipmentService,
    ) {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/dashboard/Index', [
            'total' => [
                'productions' => $this->productionService->getTotalProductions(),
                'shipments' => $this->shipmentService->getTotalShipments(),
            ],
        ]);
    }
}
