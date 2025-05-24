<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlockStack } from '@/components/ui/page';
import { nf } from '@/lib/utils';
import { Production, ProductionType } from '@/types/production';
import { Shipment } from '@/types/shipment';
import { Source } from '@/types/source';
import { Pickaxe, ShoppingBag, Truck } from 'lucide-vue-next';

const props = defineProps<{
    productions: Production[];
    shipments: Shipment[];
    sources: Source[];
    types: ProductionType[];
    total: {
        shipments: number;
        productions: number;
    };
}>();
</script>

<template>
    <BlockStack class="-mx-2 flex-row flex-wrap gap-0">
        <div class="w-full p-2 sm:w-1/2 xl:w-1/4">
            <Card class="gap-0">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">Tersedia</CardTitle>
                    <ShoppingBag class="text-muted-foreground size-5" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ nf(props.total.productions - props.total.shipments) }}</div>
                    <p class="text-muted-foreground text-xs">Kilogram</p>
                </CardContent>
            </Card>
        </div>

        <div class="w-full p-2 sm:w-1/2 xl:w-1/4">
            <Card class="gap-0">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">Produksi hari ini</CardTitle>
                    <Pickaxe class="text-muted-foreground size-5" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">
                        {{ nf(props.productions.map((production) => production.quantity).reduce((a, b) => a + b, 0)) }}
                    </div>
                    <p class="text-muted-foreground text-xs">Kilogram</p>
                </CardContent>
            </Card>
        </div>

        <div class="w-full p-2 sm:w-1/2 xl:w-1/4">
            <Card class="gap-0">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">Total pengiriman</CardTitle>
                    <Truck class="text-muted-foreground size-5" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ nf(props.total.shipments) }}</div>
                    <p class="text-muted-foreground text-xs">Kilogram</p>
                </CardContent>
            </Card>
        </div>
        <div class="w-full p-2 sm:w-1/2 xl:w-1/4">
            <Card class="gap-0">
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium">Total produksi</CardTitle>
                    <Pickaxe class="text-muted-foreground size-5" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{{ nf(props.total.productions) }}</div>
                    <p class="text-muted-foreground text-xs">Kilogram</p>
                </CardContent>
            </Card>
        </div>
    </BlockStack>
</template>
