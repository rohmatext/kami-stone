<?php

namespace App\Http\Requests\Productions;

use App\Models\Source;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProductionRequest extends FormRequest
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
            'notes' => [
                'nullable',
                'string',
                'max:255'
            ],
        ];
    }
}
