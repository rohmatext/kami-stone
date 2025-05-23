<script setup lang="ts">
import ProductionTable from '@/components/dashboard/ProductionTable.vue';
import ShipmentTable from '@/components/dashboard/ShipmentTable.vue';
import CreateProductionSheet from '@/components/productions/CreateProductionSheet.vue';
import CreateShipmentSheet from '@/components/shipments/CreateShipmentSheet.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlockStack, Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { nf } from '@/lib/utils';
import { SharedData } from '@/types';
import { Production, ProductionType } from '@/types/production';
import { Shipment } from '@/types/shipment';
import { Source } from '@/types/source';
import { Head, Link } from '@inertiajs/vue3';
import { Pickaxe, ShoppingBag, Truck } from 'lucide-vue-next';
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
                    <Truck />
                    Pengiriman
                </Button>
                <Button class="cursor-pointer" variant="default" @click="handleShowCreate('production')">
                    <Pickaxe />
                    Produksi
                </Button>
            </template>

            <BlockStack>
                <BlockStack class="-mx-2 flex-row flex-wrap gap-0">
                    <div class="w-1/2 p-2 lg:w-1/4">
                        <Card class="gap-0">
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">Tersedia</CardTitle>
                                <ShoppingBag class="text-muted-foreground size-5" />
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">{{ nf(props.total.productions - props.total.shipments) }}</div>
                                <p class="text-muted-foreground text-xs">Karung</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div class="w-1/2 p-2 lg:w-1/4">
                        <Card class="gap-0">
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">Produksi hari ini</CardTitle>
                                <Pickaxe class="text-muted-foreground size-5" />
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">
                                    {{ nf(props.productions.map((production) => production.quantity).reduce((a, b) => a + b, 0)) }}
                                </div>
                                <p class="text-muted-foreground text-xs">Karung</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div class="w-1/2 p-2 lg:w-1/4">
                        <Card class="gap-0">
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">Total pengiriman</CardTitle>
                                <Truck class="text-muted-foreground size-5" />
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">{{ nf(props.total.shipments) }}</div>
                                <p class="text-muted-foreground text-xs">Karung</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div class="w-1/2 p-2 lg:w-1/4">
                        <Card class="gap-0">
                            <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle class="text-sm font-medium">Total produksi</CardTitle>
                                <Pickaxe class="text-muted-foreground size-5" />
                            </CardHeader>
                            <CardContent>
                                <div class="text-2xl font-bold">{{ nf(props.total.productions) }}</div>
                                <p class="text-muted-foreground text-xs">Karung</p>
                            </CardContent>
                        </Card>
                    </div>
                </BlockStack>

                <BlockStack class="md:flex-row">
                    <div class="flex-1">
                        <Card class="gap-2 pt-3">
                            <CardHeader class="px-4 pb-0">
                                <div class="flex flex-row items-center justify-between">
                                    <CardTitle>Produksi Hari ini</CardTitle>
                                    <Button variant="secondary" as-child>
                                        <Link :href="route('operator.productions.index')" class="text-sm"> Lihat semua </Link>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent class="border-t px-0">
                                <ProductionTable :productions="props.productions" />
                            </CardContent>
                        </Card>
                    </div>
                    <div class="flex-1">
                        <Card class="gap-2 pt-3">
                            <CardHeader class="px-4 pb-0">
                                <div class="flex flex-row items-center justify-between">
                                    <CardTitle>Pengiriman terbaru</CardTitle>
                                    <Button variant="secondary" as-child>
                                        <Link :href="route('operator.shipments.index')" class="text-sm"> Lihat semua </Link>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent class="border-t px-0">
                                <ShipmentTable :shipments="props.shipments" />
                            </CardContent>
                        </Card>
                    </div>
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
