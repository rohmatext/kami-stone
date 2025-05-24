<script setup lang="ts">
import DashboardCards from '@/components/dashboard/DashboardCards.vue';
import DashboardTableCard from '@/components/dashboard/DashboardTableCard.vue';
import ProductionTable from '@/components/dashboard/ProductionTable.vue';
import ProductionTypeTable from '@/components/dashboard/ProductionTypeTable.vue';
import ShipmentTable from '@/components/dashboard/ShipmentTable.vue';
import { BlockStack, Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { SharedData } from '@/types';
import { Production, ProductionType } from '@/types/production';
import { Shipment } from '@/types/shipment';
import { Source } from '@/types/source';
import { Head } from '@inertiajs/vue3';

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
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout>
        <Page title="Dashboard" max-width="lg">
            <BlockStack>
                <DashboardCards v-bind="props" />

                <BlockStack class="lg:flex-row">
                    <DashboardTableCard
                        class="flex-1"
                        title="Produksi hari ini"
                        :navigation="{ label: 'Semua produksi', href: route('admin.productions.index') }"
                    >
                        <ProductionTable :productions="props.productions" />
                    </DashboardTableCard>

                    <BlockStack class="flex-1">
                        <DashboardTableCard title="Jenis produksi hari ini">
                            <ProductionTypeTable :productions="props.productions" :types="props.types" />
                        </DashboardTableCard>
                        <DashboardTableCard
                            title="Pengiriman terbaru"
                            :navigation="{ label: 'Semua pengiriman', href: route('admin.shipments.index') }"
                        >
                            <ShipmentTable :shipments="props.shipments" />
                        </DashboardTableCard>
                    </BlockStack>
                </BlockStack>
            </BlockStack>
        </Page>
    </AppLayout>
</template>
