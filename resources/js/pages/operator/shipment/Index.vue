<script setup lang="ts">
import CreateShipmentSheet from '@/components/shipments/CreateShipmentSheet.vue';
import ShipmentTable from '@/components/shipments/ShipmentTable.vue';
import { Button } from '@/components/ui/button';
import { Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { SharedData } from '@/types';
import { Shipment } from '@/types/shipment';
import { Head } from '@inertiajs/vue3';
import { reactive } from 'vue';
import { toast } from 'vue-sonner';

const props = defineProps<SharedData & { shipments: Shipment[] }>();

const open = reactive<{ create: boolean }>({
    create: false,
});

const handleShowCreate = () => {
    open.create = true;
};

const onCreatedSuccess = () => {
    open.create = false;
    toast.success(props.flash.message);
};
</script>

<template>
    <Head title="Pengiriman" />

    <AppLayout title="Pengiriman">
        <Page title="Pengiriman" max-width="md">
            <template #actions>
                <Button @click="handleShowCreate">Buat pengiriman</Button>
            </template>

            <ShipmentTable :shipments="props.shipments" />

            <CreateShipmentSheet v-model="open.create" :route="route('operator.shipments.store')" @success="onCreatedSuccess" />
        </Page>
    </AppLayout>
</template>
