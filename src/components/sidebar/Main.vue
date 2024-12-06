<template>
  <div
    :class="[
      'fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out',
      isExpanded ? 'w-64' : 'w-20'
    ]"
  >
    <SidebarToggle
      :is-expanded="isExpanded"
      @toggle="toggleSidebar"
    />
    <SidebarMenu :is-expanded="isExpanded" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarToggle from './SidebarToggle.vue'
import SidebarMenu from './SidebarMenu.vue'

const isExpanded = ref(false)

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}
</script>
