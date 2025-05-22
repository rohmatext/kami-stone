<script setup lang="ts">
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Production } from '@/types/production';
import { Badge } from '../ui/badge';

const props = defineProps<{ productions: Production[] }>();
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Sumber</TableHead>
                <TableHead class="w-12">Status</TableHead>
                <TableHead class="w-8 text-right"></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <template v-if="props.productions.length > 0">
                <TableRow v-for="source in props.productions" :key="source.id">
                    <TableCell class="font-medium">
                        <div>
                            {{ source.name }}
                        </div>
                        <div class="text-muted-foreground text-xs font-normal">
                            {{ source.location }}
                        </div>
                    </TableCell>
                    <TableCell class="w-12">
                        <Badge :variant="source.is_active ? 'secondary' : 'destructive'" class="capitalize">
                            {{ source.is_active ? 'Aktif' : 'Tidak Aktif' }}
                        </Badge>
                    </TableCell>
                    <TableCell class="text-right"> </TableCell>
                </TableRow>
            </template>
            <TableEmpty v-else :colspan="3">Belum ada sumber</TableEmpty>
        </TableBody>
    </Table>
</template>
