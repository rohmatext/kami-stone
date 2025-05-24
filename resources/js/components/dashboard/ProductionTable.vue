<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { nf } from '@/lib/utils';
import { Production } from '@/types/production';

const props = defineProps<{ productions: Production[] }>();
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead class="px-4">Sumber</TableHead>
                <TableHead class="w-8 px-4 text-center">Jenis</TableHead>
                <TableHead class="w-24 px-4 text-right">Jumlah</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="props.productions.length > 0">
                <TableRow v-for="production in props.productions" :key="production.id">
                    <TableCell class="px-4">{{ production.source?.name }}</TableCell>
                    <TableCell class="px-4 text-center">
                        <Badge variant="secondary">{{ production.type }}</Badge>
                    </TableCell>
                    <TableCell class="px-4 text-right">{{ nf(production.quantity) }}</TableCell>
                </TableRow>
            </template>
            <TableEmpty v-else :colspan="3"> Tidak ada data </TableEmpty>
        </TableBody>
    </Table>
</template>
