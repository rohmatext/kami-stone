<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Page } from '@/components/ui/page';
import CreateUserSheet from '@/components/users/CreateUserSheet.vue';
import UserTable from '@/components/users/UserTable.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { SharedData, User } from '@/types';
import { Head } from '@inertiajs/vue3';
import { reactive } from 'vue';
import { toast } from 'vue-sonner';

interface Props {
    create: boolean;
}

const props = defineProps<SharedData & { users: User[] }>();

const show = reactive<Props>({
    create: false,
});

const handleShowCreate = () => {
    show.create = !show.create;
};

const onSaved = () => {
    show.create = false;
    toast.success(props.flash.message);
};
</script>

<template>
    <Head title="Kelola pengguna" />

    <AppLayout>
        <Page title="Kelola pengguna" max-width="md">
            <template #actions>
                <Button @click="handleShowCreate">Tambah</Button>
            </template>

            <Card class="p-0">
                <CardContent class="p-0">
                    <UserTable :users="props.users" />
                </CardContent>
            </Card>
        </Page>

        <CreateUserSheet v-model="show.create" @success="onSaved" />
    </AppLayout>
</template>
