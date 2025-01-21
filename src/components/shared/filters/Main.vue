<template>
  <section class="col-span-3 grid grid-cols-5 gap-3">
    <Card class="p-4 col-span-1 mb-4 flex items-center" v-for="category in CategoriesFilter(props.categories)" :key="category.id">
      <Icon class="mr-4" :icon="category.icon" width="24" height="24" />
      {{ category.name }}
    </Card>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import { Card } from "@/components/ui/card"
import { Icon } from '@iconify/vue'

const props = defineProps({
  filters: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['apply-filters', 'clear-filters'])

const selectedFilters = ref({
  specialty: [],
  motivation: [],
  category: [],
  language: [],
  academicFormation: [],
  price: [],
  ethnicity: [],
})

function CategoriesFilter(categorie) {
  return categorie.filter(category => category.id <= 5)
};

const isSelected = (ref, group) => {
  return selectedFilters.value[group]?.includes(ref);
};

const toggleFilter = (value, group) => {
  const groupFilters = selectedFilters.value[group] || [];
  const index = groupFilters.indexOf(value);
  if (index > -1) {
    selectedFilters.value[group].splice(index, 1);
  } else {
    selectedFilters.value[group].push(value);
  }
};

function clearAllFilters() {
  selectedFilters.value = {}
  emit('clear-filters')
}

function applyFilters() {
  emit('apply-filters', selectedFilters.value)
}

function handleCategorySelect(category){
  // console.log('Selected category:', category)
}

function handleSearch(searchTerm){
  // console.log('Search term:', searchTerm)
}

defineExpose({
  isSelected,
  toggleFilter,
  clearAllFilters,
  applyFilters,
  handleCategorySelect,
  handleSearch
})

</script>

<style scoped>
.scroller {
  scrollbar-width: none;
  scrollbar-color: rgba(0, 0, 0, 0.4) initial;
}

</style>
