<script setup lang="ts">
import { Button } from '@/components/ui/button';
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

            <UserTable :users="props.users" />
            <CreateUserSheet v-model="show.create" @success="onSaved" />
        </Page>
    </AppLayout>
</template>
