<?php

namespace App\Services;

use App\Models\Production;

class ProductionService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllProductions()
    {
        return Production::query()
            ->with('source')
            ->orderBy('production_date', 'desc')
            ->get();
    }

    public function createProduction(array $data)
    {
        return Production::create([
            'source_id' => $data['source_id'],
            'production_date' => $data['production_date'],
            'quantity' => $data['quantity'],
            'notes' => $data['notes'] ?? null,
        ]);
    }
}
