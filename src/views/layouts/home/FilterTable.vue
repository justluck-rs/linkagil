<!-- FilterTable.vue -->
<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>{{ tableHeader }}</TableHead>
        <TableHead class="w-[100px] text-right">Selecionar</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="item in filters" :key="item.value">
        <TableCell>{{ item.label }}</TableCell>
        <TableCell class="text-right">
          <Checkbox :checked="isSelected(item.value)" @click="toggleFilter(item.value)" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup>
import { defineProps } from 'vue';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

const props = defineProps({
  filters: Array,
  tableHeader: String,
  selectedFilters: Object,
  toggleFilter: Function
});

const isSelected = (value) => {
  return props.selectedFilters.includes(value);
};
</script>
