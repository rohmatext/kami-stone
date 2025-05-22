import { LayoutGrid, UserRound } from 'lucide-vue-next';

export const useAdminMenu = () => {
    return [
        {
            title: 'Dashboard',
            href: '/admin',
            icon: LayoutGrid,
        },
        {
            title: 'Pengguna',
            href: '/admin/users',
            icon: UserRound,
        },
    ];
};
