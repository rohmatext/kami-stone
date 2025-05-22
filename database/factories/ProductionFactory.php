<?php

namespace Database\Factories;

use App\Models\Source;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Production>
 */
class ProductionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'source_id' => Source::inRandomOrder()->first()->id,
            'production_date' => today()->subDays(fake()->numberBetween(1, 30)),
            'quantity' => fake()->numberBetween(1, 20),
            'notes' => fake()->boolean() ? fake()->sentence() : null,
        ];
    }
}
