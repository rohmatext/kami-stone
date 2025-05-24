<script setup lang="ts">
import ShipmentTable from '@/components/shipments/ShipmentTable.vue';
import { Card, CardContent } from '@/components/ui/card';
import { Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { SharedData } from '@/types';
import { Shipment } from '@/types/shipment';
import { Head } from '@inertiajs/vue3';

const props = defineProps<SharedData & { shipments: Shipment[] }>();
</script>

<template>
    <Head title="Pengiriman" />

    <AppLayout title="Pengiriman">
        <Page title="Pengiriman" max-width="md">
            <Card class="p-0">
                <CardContent class="p-0">
                    <ShipmentTable :shipments="props.shipments" />
                </CardContent>
            </Card>
        </Page>
    </AppLayout>
</template>
