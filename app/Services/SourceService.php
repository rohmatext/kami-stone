<?php

namespace App\Services;

use App\Models\Source;

class SourceService
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllSources(?bool $active = null)
    {
        return Source::query()
            ->when(is_bool($active), fn($query) => $query->active($active))
            ->orderBy('name')
            ->get();
    }

    public function createSource(array $data)
    {
        return Source::create([
            'name' => $data['name'],
            'location' => $data['location'],
            'is_active' => true,
        ]);
    }

    public function updateSource(Source $source, array $data)
    {
        return tap($source)->update([
            'name' => $data['name'],
            'location' => $data['location'],
        ]);
    }

    public function updateActive(Source $source, ?bool $active = null)
    {
        return tap($source)->update([
            'is_active' => is_null($active) ? !$source->is_active : $active,
        ]);
    }

    public function deleteSource(Source $source)
    {
        return $source->delete();
    }
}
