<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shipment extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'shipment_date',
        'quantity',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'shipment_date' => 'datetime:Y-m-d',
        ];
    }
}
