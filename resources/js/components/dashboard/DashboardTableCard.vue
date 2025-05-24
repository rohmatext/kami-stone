<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/vue3';
import { HTMLAttributes } from 'vue';
import { Button } from '../ui/button';

const props = defineProps<{
    title: string;
    navigation?: {
        label: string;
        href: string;
    };
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <Card :class="cn('gap-2', props.navigation ? 'pt-3' : 'pt-5', props.class)">
        <CardHeader :class="cn('px-4 pb-0', !props.navigation && 'pb-3')">
            <div class="flex flex-row items-center justify-between">
                <CardTitle>{{ props.title }}</CardTitle>
                <Button variant="secondary" v-if="props.navigation" as-child>
                    <Link :href="props.navigation.href" class="text-sm"> {{ props.navigation.label }} </Link>
                </Button>
            </div>
        </CardHeader>
        <CardContent class="border-t px-0">
            <slot />
        </CardContent>
    </Card>
</template>
