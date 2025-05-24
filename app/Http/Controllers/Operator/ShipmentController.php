<?php

namespace App\Http\Controllers\Operator;

use App\Http\Controllers\Controller;
use App\Http\Requests\Shipment\StoreShipmentRequest;
use App\Services\ShipmentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ShipmentController extends Controller
{
    public function __construct(
        protected ShipmentService $shipmentService
    ) {
        //
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('operator/shipment/Index', [
            'shipments' => $this->shipmentService->getAllShipments()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreShipmentRequest $request)
    {
        DB::transaction(function () use ($request) {
            $this->shipmentService->createShipment($request->validated());
            session()->flash('message', 'Data berhasil disimpan');
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
