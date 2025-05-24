<script setup lang="ts">
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { nf } from '@/lib/utils';
import { Shipment } from '@/types/shipment';

const props = defineProps<{ shipments: Shipment[] }>();
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead class="px-4">Tanggal</TableHead>
                <TableHead class="w-24 px-4 text-right">Jumlah</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="props.shipments.length > 0">
                <TableRow v-for="shipment in props.shipments" :key="shipment.id">
                    <TableCell class="px-4">{{ shipment.shipment_date }}</TableCell>
                    <TableCell class="px-4 text-right">{{ nf(shipment.quantity) }}</TableCell>
                </TableRow>
            </template>
            <TableEmpty v-else :colspan="2"> Tidak ada data </TableEmpty>
        </TableBody>
    </Table>
</template>
