export interface Shipment {
    id: number;
    shipment_date: string;
    quantity: number;
    notes: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}
