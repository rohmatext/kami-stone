<?php

namespace Database\Factories;

use App\Enums\ProductionTypeEnum;
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
            'production_date' => today()->subDays(fake()->numberBetween(0, 30)),
            'type' => fake()->randomElement(array_column(ProductionTypeEnum::cases(), 'value')),
            'quantity' => fake()->numberBetween(1, 20),
            'notes' => fake()->boolean() ? fake()->sentence() : null,
        ];
    }
}
