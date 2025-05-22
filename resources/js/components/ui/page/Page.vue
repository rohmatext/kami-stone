<script setup lang="ts">
import PageHeader from '@/components/ui/page/PageHeader.vue';
import { cn } from '@/lib/utils';
import { computed, useSlots, type HTMLAttributes } from 'vue';
import { pageVariants, type BackAction, type PageVariants } from '.';
interface Props {
    title?: string;
    subtitle?: string;
    backAction?: BackAction | string;
    class?: HTMLAttributes['class'];
    maxWidth?: PageVariants['maxWidth'];
}

const props = defineProps<Props>();

const slots = useSlots();

const delegatedProps = computed(() => {
    const { class: _, maxWidth, ...delegated } = props;

    return delegated;
});

const hasHeader = computed(() => props.title || props.subtitle || props.backAction || slots.actions);
</script>

<template>
    <div v-bind="delegatedProps" :class="cn('mx-auto my-0 p-0 sm:px-6', pageVariants({ maxWidth: props.maxWidth }), props.class)">
        <PageHeader v-if="hasHeader" :title="props.title" :subtitle="props.subtitle" :backAction="props.backAction">
            <template v-if="$slots.actions" #actions>
                <slot name="actions" />
            </template>
            <template v-if="$slots.titleMetadata" #titleMetadata>
                <slot name="titleMetadata" />
            </template>
        </PageHeader>
        <div class="px-4 sm:px-0">
            <slot />
        </div>
    </div>
</template>
