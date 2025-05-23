<?php

namespace App\Enums;

enum ProductionTypeEnum: string
{
    case CU = 'cu';
    case PB = 'pb';
    case PBZN = 'pb/zn';

    public function label(): string
    {
        return match ($this) {
            self::CU => 'CU (Tembaga)',
            self::PB => 'PB (Timbal)',
            self::PBZN => 'PB/ZN (Timbal/Zink)',
        };
    }

    public static function values(): array
    {
        return array_map(fn(ProductionTypeEnum $productionType) => [
            'label' => $productionType->label(),
            'value' => $productionType->value,
        ], self::cases());
    }
}
