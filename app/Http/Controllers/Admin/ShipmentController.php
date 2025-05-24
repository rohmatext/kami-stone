<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ShipmentService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShipmentController extends Controller
{
    public function __construct(
        protected ShipmentService $shipmentService
    ) {
        //
    }

    public function index()
    {
        return Inertia::render('admin/shipment/Index', [
            'shipments' => $this->shipmentService->getAllShipments()
        ]);
    }
}
