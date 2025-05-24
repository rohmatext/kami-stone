<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BlockStack } from '@/components/ui/page';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useSidebar } from '@/components/ui/sidebar';
import { useForm } from '@inertiajs/vue3';
import { LoaderCircleIcon } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps<{
    route: string;
}>();

const open = defineModel<boolean>();

const emit = defineEmits<{
    success: [];
}>();

const form = useForm({
    quantity: '',
    notes: '',
});

const { isMobile } = useSidebar();

const side = computed(() => (isMobile.value ? 'bottom' : 'right'));

const handleSubmit = () => {
    form.post(props.route, {
        onSuccess: () => {
            form.reset();
            open.value = false;
            emit('success');
        },
    });
};
</script>

<template>
    <Sheet v-model:open="open">
        <SheetContent class="lg:w-[400px]" :side="side">
            <SheetHeader>
                <SheetTitle>Buat pengiriman</SheetTitle>
                <SheetDescription />
            </SheetHeader>
            <form @submit.prevent="handleSubmit">
                <BlockStack class="px-4">
                    <BlockStack class="gap-2">
                        <Label for="quantity">Jumlah (karung)</Label>
                        <Input id="quantity" inputmode="numeric" v-model="form.quantity" />
                        <InputError :message="form.errors.quantity" />
                    </BlockStack>
                    <BlockStack class="gap-2">
                        <Label for="notes">Catatan (opsional)</Label>
                        <Input id="notes" v-model="form.notes" />
                        <InputError :message="form.errors.notes" />
                    </BlockStack>
                    <div class="flex justify-end">
                        <Button type="submit" :disabled="form.processing">
                            <LoaderCircleIcon v-if="form.processing" class="h-4 w-4 animate-spin" />
                            Simpan
                        </Button>
                    </div>
                </BlockStack>
            </form>
        </SheetContent>
    </Sheet>
</template>
