<template>
        <section class="rounded-lg px-4 flex flex-col gap-3 col-span-3 lg:col-span-1">
          <!-- <Separator label="Filtros" class="mt-2" /> -->
          <article class="mb-2">
            <div class="relative w-full max-w-sm items-center">
              <Input id="search" type="text" placeholder="Search..." class="pl-10 bg-white" />
              <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                <Icon icon="lucide:search" class="text-lg" />
              </span>
            </div>
            <section class="left-0 mt-1 text-lg">
              <Sheet>
                <SheetTrigger as-child>
                    <Button variant="link" class="pl-1">
                      Mais filtros <Icon icon="lucide:filter" class="text-lg" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right"
                  class="min-w-[100%] md:min-w-[70%] xl:min-w-[50%] h-screen overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filtrar Profissionais</SheetTitle>
                    <SheetDescription>
                      Utilize os filtros abaixo para encontrar o profissional ideal.
                    </SheetDescription>
                  </SheetHeader>

                  <div class="grid gap-6 mt-6 lg:grid-cols-2">
                    <div v-for="(filterGroup, index) in props.filters" :key="index" class="p-2">
                      <h3 class="text-lg font-semibold mb-4">{{ filterGroup.name }}</h3>
                      <div class="scroller overflow-y-auto max-h-60 p-2">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Opção</TableHead>
                              <TableHead class="w-[100px] text-right">Selecionar</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody class="cursor-pointer">
                            <TableRow v-for="(filter, i) in filterGroup.filters" :key="i">
                              <TableCell><Label :for="i">{{ filter.label }}</Label></TableCell>
                              <TableCell class="text-right">
                                <Checkbox :id="i" :checked="isSelected(filter.value, filterGroup.ref)"
                                  @click="toggleFilter(filter.value, filterGroup.ref)" />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>

                  <SheetFooter class="mt-6 flex justify-between items-center gap-2">
                    <Button variant="outline" @click="clearAllFilters" class="w-full">
                      Limpar Filtros
                    </Button>
                    <SheetClose as-child>
                      <Button class="w-full" @click="applyFilters">
                        Aplicar Filtros
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </section>
          </article>
          <Separator label="Categorias" />
          <CategoriesList :categories="props.categories" />
        </section>
</template>

<script setup>

import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

import CategoriesList from '@/views/modules/professionals/components/categories/Main.vue'

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
