<template>
  <section class="w-full h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center items-center gap-8">
      <p>Áreas ainda não exploradas! 🥺</p>
      <img src="../../assets/imgs/notfound.svg" alt="" class="w-[80%]">
      <router-link to="/" class="flex justify-center items-center">
        <Icon icon="lucide:arrow-left" />
        <span>Voltar</span>
      </router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
const router = useRouter();
console.log(router);

</script>
