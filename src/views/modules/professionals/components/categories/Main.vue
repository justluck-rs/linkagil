<template>
  <section class=" flex lg:flex-wrap gap-2 flex-shrink-1 overflow-x-hidden overflow-x-auto col-span-3 lg:col-span-1 mt-4">
    <div
      v-for="cat in props.categories"
      :key="cat.id"
      class="min-w-[170px] lg:w-full bg-white text-slate-700 font-bold text-md p-4 shadow rounded cursor-pointer "
      @click="selectCategory(cat)"
    >
      <div class="flex flex-col-reverse lg:flex-row justify-end items-center lg:justify-between">
        <span>{{ cat.name }}</span>
        <Icon :icon="cat.icon" class="text-2xl"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

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
