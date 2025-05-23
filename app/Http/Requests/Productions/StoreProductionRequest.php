<?php

namespace App\Http\Requests\Productions;

use App\Enums\ProductionTypeEnum;
use App\Models\Source;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProductionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'source_id' => [
                'required',
                Rule::exists(Source::class, 'id')
                    ->withoutTrashed()
                    ->where('is_active', true),
            ],
            'quantity' => [
                'required',
                'numeric',
                'min:1'
            ],
            'type' => [
                'required',
                Rule::in(array_column(ProductionTypeEnum::cases(), 'value'))
            ],
            'notes' => [
                'nullable',
                'string',
                'max:255'
            ],
        ];
    }
}
