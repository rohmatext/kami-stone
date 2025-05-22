import { LayoutGrid, Pickaxe, Rows2, Truck } from 'lucide-vue-next';

export const useOperatorMenu = () => {
    return [
        {
            title: 'Dashboard',
            href: '/operator',
            icon: LayoutGrid,
        },
        {
            title: 'Produksi',
            href: '/operator/productions',
            icon: Pickaxe,
        },
        {
            title: 'Pengiriman',
            href: '/operator/shipments',
            icon: Truck,
        },
        {
            title: 'Sumber',
            href: '/operator/sources',
            icon: Rows2,
        },
    ];
};
