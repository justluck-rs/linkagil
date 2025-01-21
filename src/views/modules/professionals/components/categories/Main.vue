<template>
  <section class=" flex lg:flex-wrap gap-2 flex-shrink-1 overflow-x-hidden overflow-x-auto col-span-3 lg:col-span-1 mt-4">
    <div
      v-for="categorie in props.categories"
      :key="categorie.id"
      class="min-w-[170px] lg:w-full bg-white text-slate-700 font-bold text-md p-4 shadow rounded cursor-pointer "
      @click="selectCategory(categorie)"
    >
      <div class="flex flex-col-reverse lg:flex-row justify-end items-center lg:justify-between">
        <span>{{ categorie.name }}</span>
        <Badge variant="secondary" class="p-2">
          fdfsfs
          <!-- <Icon :icon="categorie.icon" class="text-2xl"/> -->
        </Badge>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { Badge } from '@/components/ui/badge'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['category-select'])

const selectCategory = (category) => {
  emit('category-select', category)
}
</script>
<style scoped>
.scroller {
  scrollbar-width: none;
  scrollbar-color: rgba(0, 0, 0, 0.4) initial;
}

</style>
