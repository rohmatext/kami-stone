<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Sources\StoreSourceRequest;
use App\Http\Requests\Sources\UpdateSourceRequest;
use App\Models\Source;
use App\Services\SourceService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SourceController extends Controller
{
    public function __construct(
        private SourceService $sourceService
    ) {
        //
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/source/Index', [
            'sources' => $this->sourceService->getAllSources()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSourceRequest $request)
    {
        DB::transaction(function () use ($request) {
            $this->sourceService->createSource($request->validated());

            return to_route('admin.sources.index')->withMessage('Source berhasil ditambahkan');
        });
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSourceRequest $request, Source $source)
    {
        DB::transaction(function () use ($request, $source) {
            $this->sourceService->updateSource($source, $request->validated());

            return to_route('admin.sources.index')->withMessage('Source berhasil diubah');
        });
    }

    public function inactivate(Source $source)
    {
        DB::transaction(function () use ($source) {
            $this->sourceService->updateActive($source, false);

            return to_route('admin.sources.index')->withMessage('Source berhasil dinonaktifkan');
        });
    }
}
