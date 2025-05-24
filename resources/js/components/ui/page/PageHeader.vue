<script setup lang="ts">
import { Button } from '@/components/ui/button';
import PageTitle from '@/components/ui/page/PageTitle.vue';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-vue-next';
import { computed } from 'vue';
import type { BackAction } from '.';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    title?: string;
    subtitle?: string;
    backAction?: BackAction | string;
}>();

const url = computed<string>(() => {
    if (typeof props.backAction === 'string') return props.backAction;
    return props.backAction?.url || '';
});

const label = computed<string>(() => {
    if (typeof props.backAction === 'string') return 'Go back';
    return props.backAction?.content || 'Go back';
});

const classes = cn(props.backAction != undefined ? `grid gap-x-4 gap-y-2 [grid-template-areas:'navigation_actions'_'title_title'] md:flex` : 'flex gap-4');
</script>

<template>
    <div class="relative p-4 sm:px-0 sm:py-6">
        <div :class="cn('flex-wrap col-[auto_1fr] justify-between leading-normal', classes)">
            <div class="[grid-area:navigation]" v-if="props.backAction">
                <Button variant="ghost" size="icon" as-child>
                    <Link :href="url" :aria-label="label">
                        <ArrowLeft class="size-5" />
                    </Link>
                </Button>
            </div>
            <div class="self-center [grid-area:title]">
                <PageTitle :title="props.title" :subtitle="props.subtitle">
                    <template v-if="$slots.titleMetadata" #titleMetadata>
                        <slot name="titleMetadata" />
                    </template>
                </PageTitle>
            </div>
            <div class="flex flex-[1_1_auto] content-end items-center justify-end self-start whitespace-nowrap [grid-area:actions]">
                <div class="flex w-full flex-wrap items-center justify-end gap-2 text-right">
                    <slot name="actions" />
                </div>
            </div>
        </div>
    </div>
</template>
