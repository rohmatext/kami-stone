export interface Source {
    id: number;
    name: string;
    location: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}
