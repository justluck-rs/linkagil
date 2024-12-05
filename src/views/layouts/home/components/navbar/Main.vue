<template>
  <div class="navbar bg-sky-500 px-4">
    <div class="navbar-start">
      <div class="navbar-center">
        <img src="../../../../../assets/imgs/logo-core.svg" width="80" alt="">
      </div>
    </div>
    <div class="navbar-end">
      <div class="cursor-pointer p-2 hover:text-white hover:bg-sky-900 ml-1 flex justify-center items-center gap-1 rounded">
        <span>Cadastrar</span>
        <Icon icon="lucide:circle-fading-plus" class="text-base" />
      </div>
      <div class="cursor-pointer p-2 hover:text-white hover:bg-sky-900 ml-1 flex justify-center items-center gap-1 rounded">
        <span>Acessar</span>
        <Icon icon="lucide:log-in" class="text-base" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>
