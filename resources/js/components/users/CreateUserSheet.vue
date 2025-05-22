<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BlockStack } from '@/components/ui/page';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useSidebar } from '@/components/ui/sidebar';
import { useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';
import { computed } from 'vue';
import InputError from '../InputError.vue';

const open = defineModel<boolean>();
const emit = defineEmits<{
    success: [];
}>();

const { isMobile } = useSidebar();

const side = computed(() => (isMobile.value ? 'bottom' : 'right'));

const form = useForm({
    name: '',
    email: '',
});

const handleSubmit = () => {
    form.post(route('admin.users.store'), {
        onSuccess: () => {
            form.reset();
            emit('success');
        },
    });
};
</script>

<template>
    <Sheet v-model:open="open">
        <SheetContent class="lg:w-[400px]" :side="side">
            <SheetHeader>
                <SheetTitle>Tambah pengguna</SheetTitle>
                <SheetDescription />
            </SheetHeader>
            <form @submit.prevent="handleSubmit">
                <BlockStack class="px-4">
                    <BlockStack class="gap-2">
                        <Label for="name">Nama</Label>
                        <Input id="name" v-model="form.name" />
                        <InputError :message="form.errors.name" />
                    </BlockStack>
                    <BlockStack class="gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" v-model="form.email" />
                        <InputError :message="form.errors.email" />
                    </BlockStack>
                    <div class="flex justify-end">
                        <Button type="submit" :disabled="form.processing">
                            <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
                            Simpan
                        </Button>
                    </div>
                </BlockStack>
            </form>
        </SheetContent>
    </Sheet>
</template>
