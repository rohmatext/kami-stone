<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

const handleShowCreate = () => {};

const opens = ref<boolean[]>([false, false, false, false, false]);
</script>

<template>
    <Head title="Produksi" />

    <AppLayout>
        <Page title="Produksi" max-width="md">
            <template #actions>
                <Button @click="handleShowCreate">Tambah</Button>
            </template>

            <Collapsible v-for="(_, index) in opens" v-model:open="opens[index]" :key="index">
                <CollapsibleTrigger>Can I use this in my project? {{ index }}</CollapsibleTrigger>
                <CollapsibleContent> Yes. Free to use for personal and commercial projects. No attribution required. </CollapsibleContent>
            </Collapsible>
        </Page>
    </AppLayout>
</template>
