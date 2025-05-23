<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProductionTimeline } from '@/types/production';
import { ChevronDown, ChevronRight } from 'lucide-vue-next';
import { ref } from 'vue';
import { Badge } from '../ui/badge';

const props = defineProps<{ productions: ProductionTimeline[] }>();

const isExpanded = ref<boolean[]>(props.productions.map(() => false));
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Tanggal</TableHead>
                <TableHead class="w-12 text-right">Total</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="props.productions.length > 0">
                <template v-for="(row, index) in props.productions" :key="row.date">
                    <TableRow @click="isExpanded[index] = !isExpanded[index]">
                        <TableCell class="font-medium">
                            <div class="flex items-center gap-2">
                                <ChevronDown class="size-4" v-if="isExpanded[index]" />
                                <ChevronRight class="size-4" v-else />
                                <span>
                                    {{ row.date }}
                                </span>
                            </div>
                        </TableCell>
                        <TableCell class="text-right">
                            <Badge variant="outline">
                                {{ row.total }}
                            </Badge>
                        </TableCell>
                    </TableRow>
                    <TableRow v-if="isExpanded[index]">
                        <TableCell :colspan="2">
                            <Table class="bg-accent/30 rounded-md" v-if="row.productions.length > 0">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Sumber</TableHead>
                                        <TableHead class="text-right">Jumlah</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow v-for="col in row.productions" class="border-secondary border-dashed" :key="col.id">
                                        <TableCell class="p-2 text-left">
                                            {{ col.source?.name }}
                                        </TableCell>
                                        <TableCell class="p-2 text-right">
                                            {{ col.quantity }}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div v-else class="bg-accent rounded-md p-4 text-center">Tidak ada data</div>
                        </TableCell>
                    </TableRow>
                </template>
            </template>
        </TableBody>
    </Table>
</template>
