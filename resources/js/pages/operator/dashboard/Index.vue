<script setup lang="ts">
import { Page } from '@/components/ui/page';
import AppLayout from '@/layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout>
        <Page title="Dashboard">
            <p>Dashboard</p>
        </Page>
    </AppLayout>
</template>
