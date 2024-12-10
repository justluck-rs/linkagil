<template>
  <div class="col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 overflow-y-auto scroller">
    <ProfessionalCard
      :professionals="props.professionals"
      @view-profile="viewProfile"
      @send-message="sendMessage"
    />
  </div>
</template>

<script setup>
import ProfessionalCard from '../card/Main.vue'

const props = defineProps({
  professionals: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['view-profile', 'send-message'])

const viewProfile = (professional) => {
  emit('view-profile', professional)
}

const sendMessage = (professional) => {
  emit('send-message', professional)
}
</script>
<style scoped>
.scroller {
  scrollbar-width: none;
  scrollbar-color: rgba(0, 0, 0, 0.4) initial;
}

</style>
