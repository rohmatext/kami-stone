<?php

namespace App\Services;

use App\Models\Shipment;

class ShipmentService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get all shipments.
     */
    public function getAllShipments()
    {
        return Shipment::query()
            ->latest('created_at')
            ->get();
    }

    public function getTotalShipments()
    {
        return Shipment::query()
            ->sum('quantity');
    }

    /**
     * Create a new shipment.
     */
    public function createShipment(array $data)
    {
        return Shipment::create([
            'shipment_date' => today(),
            'quantity' => $data['quantity'],
            'notes' => $data['notes'] ?? null,
        ]);
    }
}
