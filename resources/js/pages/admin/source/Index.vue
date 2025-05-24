<script setup lang="ts">
import CreateSourceSheet from '@/components/sources/CreateSourceSheet.vue';
import EditSourceSheet from '@/components/sources/EditSourceSheet.vue';
import InactiveSourceDialog from '@/components/sources/InactiveSourceDialog.vue';
import SourceTable from '@/components/sources/SourceTable.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { SharedData } from '@/types';
import { Source } from '@/types/source';
import { Head, usePage } from '@inertiajs/vue3';
import { provide, reactive } from 'vue';
import { toast } from 'vue-sonner';

const page = usePage<SharedData>();

const props = defineProps<SharedData & { sources: Source[] }>();

interface Props {
    create: boolean;
    edit: Source | null;
    inactive: Source | null;
}

const show = reactive<Props>({
    create: false,
    edit: null,
    inactive: null,
});

const handleShowCreate = () => {
    show.create = true;
};

const handleShowEdit = (source: Source) => {
    show.edit = source;
};

const handleShowInactive = (source: Source) => {
    show.inactive = source;
};

provide('edit', handleShowEdit);
provide('inactive', handleShowInactive);

const onCreated = () => {
    show.create = false;
    toast.success(page.props.flash.message);
};

const onUpdated = () => {
    show.edit = null;
    toast.success(page.props.flash.message);
};

const onInactivated = () => {
    show.inactive = null;
    toast.success(page.props.flash.message);
};
</script>

<template>
    <Head title="Sumber" />

    <AppLayout>
        <Page title="Sumber" max-width="sm">
            <template #actions>
                <Button @click="handleShowCreate">Tambah</Button>
            </template>

            <Card class="p-0">
                <CardContent class="p-0">
                    <SourceTable :sources="props.sources" />
                </CardContent>
            </Card>

            <CreateSourceSheet :route="route('admin.sources.store')" v-model="show.create" @success="onCreated" />
            <EditSourceSheet :route="route('admin.sources.update', { source: show.edit?.id || 0 })" v-model="show.edit" @success="onUpdated" />
            <InactiveSourceDialog
                :route="route('admin.sources.inactivate', { source: show.inactive?.id || 0 })"
                v-model="show.inactive"
                @success="onInactivated"
            />
        </Page>
    </AppLayout>
</template>
