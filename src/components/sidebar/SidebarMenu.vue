<template>
  <nav class="mt-16 px-4">
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="mb-2 flex items-center hover:bg-gray-100 rounded-lg p-2 transition"
      >
        <Icon
          :icon="item.icon"
          class="w-6 h-6 mr-3 text-gray-600"
        />
        <span
          v-if="isExpanded"
          class="text-sm font-medium text-gray-700"
        >
          {{ item.label }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  isExpanded: Boolean
})

const menuItems = [
  {
    icon: 'mdi:home',
    label: 'Dashboard'
  },
  {
    icon: 'mdi:account',
    label: 'Perfil'
  },
  {
    icon: 'mdi:cog',
    label: 'Configurações'
  }
]
</script>
