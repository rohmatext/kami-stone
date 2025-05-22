<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BlockStack } from '@/components/ui/page';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useSidebar } from '@/components/ui/sidebar';
import { Source } from '@/types/source';
import { useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';
import { computed, toRef, watch } from 'vue';
import InputError from '../InputError.vue';

const source = defineModel<Source | null>();
const emit = defineEmits<{
    success: [];
}>();
const { isMobile } = useSidebar();

const open = toRef<boolean>(!!source.value);
const side = computed(() => (isMobile.value ? 'bottom' : 'right'));

const form = useForm({
    name: '',
    location: '',
});

const handleUpdateOpen = (value: boolean) => {
    if (!value) {
        form.reset();
        source.value = null;
    }
};

const handleSubmit = () => {
    form.patch(route('operator.sources.update', { source: source.value }), {
        onSuccess: () => {
            handleUpdateOpen(false);
            emit('success');
        },
    });
};

watch(source, () => {
    open.value = !!source.value;
    if (source.value) {
        form.name = source.value.name;
        form.location = source.value.location || '';
    }
});
</script>

<template>
    <Sheet v-model:open="open" @update:open="handleUpdateOpen">
        <SheetContent class="lg:w-[400px]" :side="side">
            <SheetHeader>
                <SheetTitle>Edit sumber</SheetTitle>
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
                        <Label for="location">Lokasi (opsional)</Label>
                        <Input id="location" v-model="form.location" />
                        <InputError :message="form.errors.location" />
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
