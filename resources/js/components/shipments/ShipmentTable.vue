<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shipment } from '@/types/shipment';

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
            <TableRow v-for="shipment in props.shipments" :key="shipment.id">
                <TableCell class="font-medium">
                    {{ shipment.shipment_date }}
                </TableCell>
                <TableCell class="text-right">
                    <Badge variant="outline">
                        {{ shipment.quantity }}
                    </Badge>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
