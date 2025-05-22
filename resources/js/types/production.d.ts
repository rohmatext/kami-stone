import { Source } from './source';

export interface Production {
    id: number;
    source_id: number;
    production_date: string;
    quantity: number;
    notes: string | null;
    source?: Source;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}
