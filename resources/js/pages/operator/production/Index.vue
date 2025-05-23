<script setup lang="ts">
import CreateProductionSheet from '@/components/productions/CreateProductionSheet.vue';
import ProductionTable from '@/components/productions/ProductionTable.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlockStack, Page } from '@/components/ui/page';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/AppLayout.vue';
import { nf } from '@/lib/utils';
import { SharedData } from '@/types';
import { ProductionTimeline, ProductionType } from '@/types/production';
import { Source } from '@/types/source';
import { Head, router } from '@inertiajs/vue3';
import { ShoppingBag } from 'lucide-vue-next';
import { reactive, watch } from 'vue';
import { toast } from 'vue-sonner';

interface Props {
    productions: ProductionTimeline[];
    sources: Source[];
    types: ProductionType[];
    period: {
        month: number;
        year: number;
    };
    total: {
        productions: number;
        shipments: number;
    };
}

const props = defineProps<SharedData & Props>();

const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const years = Array.from({ length: new Date().getFullYear() - 2024 + 1 }, (_, index) => 2024 + index);

const period = reactive<{
    month: number;
    year: number;
}>({
    month: Number(props.period.month),
    year: Number(props.period.year),
});

const open = reactive<{
    create: boolean;
}>({
    create: false,
});

const updatePeriod = () => {
    router.get(
        route('operator.productions.index'),
        {
            period: `${period.year}-${String(period.month).padStart(2, '0')}`,
        },
        {
            preserveScroll: true,
            preserveState: true,
        },
    );
};

const handleShowCreate = () => {
    open.create = true;
};

const onCreatedSuccess = () => {
    open.create = false;
    toast.success(props.flash.message);
};

watch(() => period, updatePeriod, { deep: true });
</script>

<template>
    <Head title="Produksi" />

    <AppLayout>
        <Page title="Produksi" max-width="md">
            <template #actions>
                <Button @click="handleShowCreate">Tambah</Button>
            </template>

            <BlockStack>
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

                <div class="rounded-lg border">
                    <BlockStack class="flex-row gap-2 border-b p-2">
                        <div>
                            <Select v-model="period.month">
                                <SelectTrigger class="w-32">
                                    <SelectValue placeholder="Pilih Bulan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="(row, index) in months" :key="index" :value="index + 1"> {{ row }} </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select v-model="period.year">
                                <SelectTrigger class="w-24">
                                    <SelectValue placeholder="Pilih Tahun" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="(row, index) in years" :key="index" :value="row"> {{ row }} </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </BlockStack>

                    <ProductionTable :productions="props.productions" />
                </div>
            </BlockStack>
        </Page>

        <CreateProductionSheet
            v-model="open.create"
            :sources="props.sources"
            :types="props.types"
            :route="route('operator.productions.store')"
            @success="onCreatedSuccess"
        />
    </AppLayout>
</template>
