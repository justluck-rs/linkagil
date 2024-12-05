<template>
  <article class="p-2 bg-white shadow-md rounded-lg flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg transition-all w-24">
    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
      <Icon icon="mdi:category" class="text-lg text-blue-500" />
    </div>
    <p class="text-xs font-medium text-gray-700 text-center">
      Psicologia
    </p>
  </article>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style>
.hover\:shadow-lg:hover {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  transform: translateY(-2px);
}
</style>
