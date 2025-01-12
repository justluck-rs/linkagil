<template>
  <div class="col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 h-screen overflow-y-auto scroller">
    <article v-for="(professional, index) in props.professionals" :key="index.crp"
      class="bg-white scale-[.99] hover:scale-[1] p-4 shadow-md rounded-lg hover:shadow-lg transition-all flex flex-col justify-between gap-4">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-full border  object-cover flex justify-center items-center">
          <Icon icon="lucide:user" class="text-xl  cursor-pointer  transition" />
        </div>
        <div class="flex-1">
          <h2 class="text-sm font-semibold text-gray-800 truncate">{{ professional.name }}</h2>
          <p class="text-xs ">CRP: {{ professional.crp }}</p>
        </div>
        <div>
          <a class="flex justify-center items-center gap-2 px-2 hover:border-l-2 " href="profile">
            <span>Ver perfil</span>
            <Icon icon="lucide:arrow-right" />
          </a>
        </div>
      </div>
      <hr>
      <p class="text-xs  truncate">{{ professional.description }}</p>
      <div class="flex justify-between items-center">
        <p class="text-xs font-semibold ">{{ professional.price }}</p>
        <div class="flex items-center gap-1">
          <Icon icon="ant-design:star-filled" v-for="i in 5" :key="i" class="text-yellow-500" />
          ({{ professional.rating }})
        </div>
      </div>
      <button
        class="bg-green-500 text-white hover:bg-green-700 hover:text-white flex justify-center items-center gap-2  hover:sky-500 shadow p-2 rounded ">
        <Icon icon="meteor-icons:whatsapp" class="text-xl" />
        <span>Enviar Mensagem</span>
      </button>
    </article>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  professionals: {
    type: Object,
    required: true
  }
})
console.log(props.professionals);


const emit = defineEmits(['view-profile', 'send-message'])

const viewProfile = () => {
  emit('view-profile', props.professional)
}

const sendMessage = () => {
  emit('send-message', props.professional)
}
</script>
<style scoped>
.scroller {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.4) initial;
}

</style>
