<template>
  <svg 
    :width="width" 
    :height="height" 
    :viewBox="viewBox" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    :class="className"
  >
    <path 
      :d="path" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 24
  },
  height: {
    type: [Number, String],
    default: 24
  },
  viewBox: {
    type: String,
    default: '0 0 24 24'
  },
  path: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: 'h-4 w-4'
  }
})
</script>
