<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Production extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'source_id',
        'production_date',
        'type',
        'quantity',
        'notes'
    ];

    protected function casts(): array
    {
        return [
            'production_date' => 'datetime:Y-m-d',
        ];
    }

    public function source(): BelongsTo
    {
        return $this->belongsTo(Source::class);
    }
}
