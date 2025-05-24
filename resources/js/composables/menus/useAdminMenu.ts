import { LayoutGrid, Pickaxe, Rows2, Truck, UserRound } from 'lucide-vue-next';

export const useAdminMenu = () => {
    return [
        {
            title: 'Dashboard',
            href: '/admin',
            icon: LayoutGrid,
        },
        {
            title: 'Produksi',
            href: '/admin/productions',
            icon: Pickaxe,
        },
        {
            title: 'Pengiriman',
            href: '/admin/shipments',
            icon: Truck,
        },
        {
            title: 'Sumber',
            href: '/admin/sources',
            icon: Rows2,
        },
        {
            title: 'Pengguna',
            href: '/admin/users',
            icon: UserRound,
        },
    ];
};
