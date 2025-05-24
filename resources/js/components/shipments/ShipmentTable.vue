<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shipment } from '@/types/shipment';
import { useDateFormat } from '@vueuse/core';

const props = defineProps<{ shipments: Shipment[] }>();
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Tanggal</TableHead>
                <TableHead class="w-12 text-right">Total</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="props.shipments.length > 0">
                <TableRow v-for="shipment in props.shipments" :key="shipment.id">
                    <TableCell class="font-medium">
                        {{ useDateFormat(shipment.shipment_date, 'DD MMMM YYYY', { locales: 'id' }) }}
                    </TableCell>
                    <TableCell class="text-right">
                        <Badge variant="outline">
                            {{ shipment.quantity }}
                        </Badge>
                    </TableCell>
                </TableRow>
            </template>
            <TableEmpty v-else :colspan="2"> Tidak ada data </TableEmpty>
        </TableBody>
    </Table>
</template>
