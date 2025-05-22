<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Source } from '@/types/source';
import { useForm } from '@inertiajs/vue3';
import { LoaderCircle } from 'lucide-vue-next';
import { toRef, watch } from 'vue';

const source = defineModel<Source | null>();
const emit = defineEmits<{
    success: [];
}>();

const open = toRef<boolean>(!!source.value);

const form = useForm({});

const handleUpdateOpen = (value: boolean) => {
    if (!value) {
        form.reset();
        source.value = null;
    }
};

const handleSubmit = () => {
    form.patch(route('operator.sources.inactivate', { source: source.value }), {
        onSuccess: () => {
            handleUpdateOpen(false);
            emit('success');
        },
    });
};

watch(source, () => {
    open.value = !!source.value;
});
</script>

<template>
    <Dialog v-model:open="open" @update:open="handleUpdateOpen">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Nonaktifkan Sumber</DialogTitle>
                <DialogDescription>Apakah Anda yakin ingin menonaktifkan sumber ini?</DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button variant="secondary">Batal</Button>
                <Button variant="destructive" :disabled="form.processing" @click="handleSubmit">
                    <LoaderCircle v-if="form.processing" class="h-4 w-4 animate-spin" />
                    Nonaktifkan
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
