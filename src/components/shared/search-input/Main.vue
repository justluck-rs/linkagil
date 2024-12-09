<template>
  <section class="left-0 border mt-2 rounded">
    <div class="flex justify-between items-center gap-2 p-1 pr-4">
      <input
        :placeholder="props.placeholder"
        class="flex-1 px-2 py-3 outline-none"
        @input="handleSearch"
      />
      <span class="">
        <Icon :icon="props.icon" class="text-lg" />
      </span>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['search'])

const handleSearch = (event) => {
  emit('search', event.target.value)
}
</script>

<style scoped>
.scroller {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.4) initial;
}

</style>
