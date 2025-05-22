<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Source } from '@/types/source';
import { MoreHorizontal } from 'lucide-vue-next';
import { inject } from 'vue';

const props = defineProps<{
    source: Source;
}>();

const edit = inject<(source: Source) => void>('edit');
const inactive = inject<(source: Source) => void>('inactive');

const handleEdit = (source: Source) => {
    edit?.(source);
};

const handleInactive = (source: Source) => {
    inactive?.(source);
};
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
                <button class="w-full cursor-pointer" @click.prevent="handleEdit(props.source)">Edit</button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem as-child variant="destructive" class="!text-destructive dark:focus:!text-white">
                <button class="w-full cursor-pointer" @click.prevent="handleInactive(props.source)">Nonaktifkan</button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
