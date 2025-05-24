<script setup lang="ts">
import DashboardCards from '@/components/dashboard/DashboardCards.vue';
import DashboardTableCard from '@/components/dashboard/DashboardTableCard.vue';
import ProductionTable from '@/components/dashboard/ProductionTable.vue';
import ProductionTypeTable from '@/components/dashboard/ProductionTypeTable.vue';
import ShipmentTable from '@/components/dashboard/ShipmentTable.vue';
import CreateProductionSheet from '@/components/productions/CreateProductionSheet.vue';
import CreateShipmentSheet from '@/components/shipments/CreateShipmentSheet.vue';
import { Button } from '@/components/ui/button';
import { BlockStack, Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { SharedData } from '@/types';
import { Production, ProductionType } from '@/types/production';
import { Shipment } from '@/types/shipment';
import { Source } from '@/types/source';
import { Head } from '@inertiajs/vue3';
import { Grid2x2Plus, PackagePlus } from 'lucide-vue-next';
import { reactive } from 'vue';
import { toast } from 'vue-sonner';

interface Props {
    productions: Production[];
    shipments: Shipment[];
    sources: Source[];
    types: ProductionType[];
    total: {
        shipments: number;
        productions: number;
    };
}

const props = defineProps<SharedData & Props>();

const create = reactive<{ production: boolean; shipment: boolean }>({
    production: false,
    shipment: false,
});

const handleShowCreate = (type: 'production' | 'shipment') => {
    create[type] = true;
};

const onProductionCreatedSuccess = () => {
    create.production = false;
    toast.success(props.flash.message);
};

const onShipmentCreatedSuccess = () => {
    create.shipment = false;
    toast.success(props.flash.message);
};
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout>
        <Page title="Dashboard" max-width="lg">
            <template #actions>
                <Button class="cursor-pointer" variant="secondary" @click="handleShowCreate('shipment')">
                    <PackagePlus />
                    Pengiriman
                </Button>
                <Button class="cursor-pointer" variant="default" @click="handleShowCreate('production')">
                    <Grid2x2Plus />
                    Produksi
                </Button>
            </template>

            <BlockStack>
                <DashboardCards v-bind="props" />

                <BlockStack class="lg:flex-row">
                    <DashboardTableCard
                        class="flex-1"
                        title="Produksi hari ini"
                        :navigation="{ label: 'Semua produksi', href: route('operator.productions.index') }"
                    >
                        <ProductionTable :productions="props.productions" />
                    </DashboardTableCard>

                    <BlockStack class="flex-1">
                        <DashboardTableCard title="Jenis produksi hari ini">
                            <ProductionTypeTable :productions="props.productions" :types="props.types" />
                        </DashboardTableCard>
                        <DashboardTableCard
                            title="Pengiriman terbaru"
                            :navigation="{ label: 'Semua pengiriman', href: route('operator.shipments.index') }"
                        >
                            <ShipmentTable :shipments="props.shipments" />
                        </DashboardTableCard>
                    </BlockStack>
                </BlockStack>
            </BlockStack>
        </Page>

        <CreateProductionSheet
            v-model="create.production"
            :sources="props.sources"
            :types="props.types"
            :route="route('operator.productions.store')"
            @success="onProductionCreatedSuccess"
        />

        <CreateShipmentSheet v-model="create.shipment" :route="route('operator.shipments.store')" @success="onShipmentCreatedSuccess" />
    </AppLayout>
</template>
