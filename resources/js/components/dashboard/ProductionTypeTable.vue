<script setup lang="ts">
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { nf } from '@/lib/utils';
import { Production, ProductionType } from '@/types/production';
import { computed } from 'vue';

interface Result {
    type: string;
    quantity: number;
}

const props = defineProps<{ productions: Production[]; types: ProductionType[] }>();

function groupByType(data: Production[]): Result[] {
    const grouped: Record<string, number> = data.reduce(
        (acc, curr) => {
            const key = curr.type;
            acc[key] = (acc[key] || 0) + curr.quantity;
            return acc;
        },
        {} as Record<string, number>,
    );

    return Object.entries(grouped).map(([type, quantity]) => ({
        type,
        quantity,
    }));
}

const groups = computed(() => groupByType(props.productions));
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead class="px-4">Jenis</TableHead>
                <TableHead class="w-24 px-4 text-right">Jumlah</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="groups.length > 0">
                <TableRow v-for="production in groups" :key="production.type">
                    <TableCell class="px-4 uppercase">{{ production.type }}</TableCell>
                    <TableCell class="px-4 text-right">{{ nf(production.quantity) }}</TableCell>
                </TableRow>
            </template>
            <TableEmpty v-else :colspan="2"> Tidak ada data </TableEmpty>
        </TableBody>
    </Table>
</template>
