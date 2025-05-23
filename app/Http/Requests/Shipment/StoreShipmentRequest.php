<?php

namespace App\Http\Requests\Shipment;

use App\Models\Production;
use App\Models\Shipment;
use Illuminate\Foundation\Http\FormRequest;

class StoreShipmentRequest extends FormRequest
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
            'quantity' => ['required', 'numeric', 'min:1', function ($attribute, $value, $fail) {
                $max = Production::query()->sum('quantity') - Shipment::query()->sum('quantity');
                if ($value > $max) {
                    $fail(__('validation.max.numeric', ['attribute' => $attribute, 'max' => $max]));
                }
            }],
            'notes' => ['nullable', 'string', 'max:255'],
        ];
    }
}
