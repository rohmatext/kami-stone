<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { resetPassword } from '@/routes/admin/users';
import { User } from '@/types';
import { Link } from '@inertiajs/vue3';
import { MoreHorizontal } from 'lucide-vue-next';

const props = defineProps<{
    user: User;
}>();
</script>

<template>
    <DropdownMenu :modal="false">
        <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon" class="size-8">
                <MoreHorizontal />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem as-child>
                <Link :href="resetPassword.url(props.user.id)" method="post">Reset password</Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
