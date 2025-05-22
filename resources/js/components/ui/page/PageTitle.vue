<script setup lang="ts">
const props = defineProps<{
    title?: string;
    subtitle?: string;
}>();
</script>
<template>
    <div class="flex flex-wrap items-center gap-2 p-0.5">
        <h1 v-if="props.title" class="mr-2 inline [&>*]:inline">
            <span class="text-xl font-semibold">
                {{ props.title }}
            </span>
        </h1>
        <div v-if="$slots.titleMetadata" class="my-1">
            <slot name="titleMetadata" />
        </div>
    </div>
    <div v-if="props.subtitle" class="mt-0.5">
        <p class="text-muted-foreground text-sm">{{ props.subtitle }}</p>
    </div>
</template>
