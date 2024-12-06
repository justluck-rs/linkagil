<template>
  <button
    @click="$emit('toggle')"
    class="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-gray-100 transition"
  >
    <Icon
      :icon="isExpanded ? 'mdi:menu-open' : 'mdi:menu'"
      class="w-6 h-6 text-gray-600"
    />
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  isExpanded: Boolean
})

defineEmits(['toggle'])
</script>
