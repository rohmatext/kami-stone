<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Role, User } from '@/types';
import RowAction from './RowAction.vue';

const props = defineProps<{ users: User[] }>();
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Pengguna</TableHead>
                <TableHead class="w-24">Role</TableHead>
                <TableHead class="w-8 text-right"></TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="user in props.users" :key="user.id">
                <TableCell class="font-medium">
                    <div class="grid gap-0.5">
                        <div class="text-sm font-medium">
                            {{ user.name }}
                        </div>
                        <div class="text-muted-foreground text-xs">
                            {{ user.email }}
                        </div>
                    </div>
                </TableCell>
                <TableCell>
                    <Badge variant="outline" class="capitalize">{{ (user.roles as Role[])[0].name }}</Badge>
                </TableCell>
                <TableCell class="text-right">
                    <RowAction :user="user" />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
