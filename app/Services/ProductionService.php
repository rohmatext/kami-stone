<?php

namespace App\Services;

use App\Models\Production;
use Carbon\CarbonImmutable;
use Carbon\CarbonPeriodImmutable;

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

    public function getTodayProductions()
    {
        return Production::query()
            ->with('source')
            ->whereDate('production_date', today())
            ->orderByDesc('production_date')
            ->orderByDesc('id')
            ->get();
    }

    public function getMonthlyProductions()
    {
        $period = $this->transformRequestPeriod();

        return Production::query()
            ->with('source')
            ->whereMonth('production_date', $period['month'])
            ->whereYear('production_date', $period['year'])
            ->orderByDesc('production_date')
            ->orderByDesc('id')
            ->get();
    }

    public function getMonthlyProductionsTimeline()
    {
        $period = $this->transformRequestPeriod();

        $createdDate = CarbonImmutable::create($period['year'], $period['month'], 1);
        $startDate = $createdDate->startOfMonth();
        $endDate = $createdDate->toDateTimeImmutable()->format('Ym') == today()->format('Ym') ? today() : $createdDate->endOfMonth();

        $periodDays = CarbonPeriodImmutable::create(
            $startDate,
            $endDate
        );

        $groupedProductions = $this->getMonthlyProductions()
            ->groupBy(fn($production)  => $production->production_date->format('Y-m-d'));

        return collect($periodDays)
            ->sortKeysDesc()
            ->values()
            ->map(fn($date) =>  [
                'date' => $date->format('Y-m-d'),
                'total' => ($productions = optional($groupedProductions)[$date->format('Y-m-d')])?->sum('quantity') ?? 0,
                'productions' => $productions ?? [],
            ]);
    }

    public function getTotalProductions()
    {
        return Production::query()
            ->sum('quantity');
    }

    public function transformRequestPeriod()
    {
        try {
            $period = request()->query('period', today()->format('Y-m'));
            [$year, $month] = explode('-', $period, 2);

            return [
                'year' => $year,
                'month' => $month,
            ];
        } catch (\Throwable $th) {
            return [
                'year' => today()->year,
                'month' => today()->month,
            ];
        }
    }

    public function createProduction(array $data)
    {
        return Production::create([
            'source_id' => $data['source_id'],
            'type' => $data['type'],
            'production_date' => $data['production_date'] ?? today(),
            'quantity' => $data['quantity'],
            'notes' => $data['notes'] ?? null,
        ]);
    }
}
