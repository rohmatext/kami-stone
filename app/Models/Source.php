<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Source extends Model
{
    use SoftDeletes;

    protected $fillable = ['name', 'location', 'is_active'];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }

    public function productions(): HasMany
    {
        return $this->hasMany(Production::class);
    }

    #[Scope]
    protected function active(Builder $query, bool $value = true): Builder
    {
        return $query->where('is_active', $value);
    }
}
